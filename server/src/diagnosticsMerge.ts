import { Diagnostic } from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { Script } from './Script';

/** Prefix für `Diagnostic.source`; Zeile „Quelle“ in der Problems-Ansicht + Zuordnung beim partiellen Merge. */
export const FUTUREC_DIAGNOSTIC_SOURCE_PREFIX = 'future-c · Skript ';

export function parseScriptNumberFromDiagnosticSource(source: string | undefined): number | undefined {
	if (!source?.startsWith(FUTUREC_DIAGNOSTIC_SOURCE_PREFIX)) {
		return undefined;
	}
	const n = parseInt(source.slice(FUTUREC_DIAGNOSTIC_SOURCE_PREFIX.length), 10);
	return Number.isFinite(n) ? n : undefined;
}

/** Erste Zeile im Dokument *nach* dem Skriptkörper (Zeile mit `ENDSCRIPT`). */
export function getScriptBodyEndLineExclusive(
	doc: TextDocument,
	script: Script
): { endLineExclusive: number; endScriptFound: boolean } {
	const startOff = doc.offsetAt(script.m_Position);
	const text = doc.getText();
	const re = /^\s*ENDSCRIPT/gm;
	re.lastIndex = startOff;
	const m = re.exec(text);
	if (!m) {
		return { endLineExclusive: doc.lineCount, endScriptFound: false };
	}
	return { endLineExclusive: doc.positionAt(m.index).line, endScriptFound: true };
}

export interface ScriptBodyLineRange {
	startLine: number;
	endLineExclusive: number;
	/** false → kein ENDSCRIPT gefunden, fremde Skripte nicht anhand bodyRange entfernen */
	endScriptFound: boolean;
}

/**
 * Ersetzt Diagnosen für scriptNumber und entfernt veraltete Einträge *anderer* Skriptnummern,
 * deren Startzeile innerhalb des SCRIPT…ENDSCRIPT-Blocks dieses Skripts liegt (Merge nach vollem Check).
 */
export function mergeDiagnosticsForScript(
	existing: Diagnostic[],
	newForScript: Diagnostic[],
	scriptNumber: number,
	bodyRange?: ScriptBodyLineRange
): Diagnostic[] {
	const filtered = existing.filter((d) => {
		const tag = parseScriptNumberFromDiagnosticSource(d.source);
		if (tag === scriptNumber) {
			return false;
		}
		if (bodyRange !== undefined && bodyRange.endScriptFound && tag !== undefined && tag !== scriptNumber) {
			const line = d.range.start.line;
			if (line >= bodyRange.startLine && line < bodyRange.endLineExclusive) {
				return false;
			}
		}
		return true;
	});
	return filtered.concat(newForScript);
}
