import { Position, Diagnostic } from 'vscode-languageserver/node';
import { CParser } from '../Parser/CParser';
import { GlobalAnalyzer } from '../server';
import { getScriptBodyEndLineExclusive, ScriptBodyLineRange } from '../diagnosticsMerge';
import {
	TextDocument
} from 'vscode-languageserver-textdocument';

let diagnosticCached :Diagnostic[] = [];
let posCached :Position|null = null;

export interface CurrentScriptDiagnosticResult {
	diagnostics: Diagnostic[];
	/** Gesetzt, wenn die Cursorposition einem Skript zugeordnet werden konnte. */
	scriptNumber?: number;
	/** DATEI-Zeilen: Körper des aktuellen SCRIPT-Blocks (für Merge fremder Diagnosen). */
	scriptBodyLineRange?: ScriptBodyLineRange;
}

export function OnDiagnostic(docs :Map<string, TextDocument>, curDoc :TextDocument, pos :Position) :CurrentScriptDiagnosticResult {
	if(posCached) {
		if(posCached.line == pos.line) {
			//return diagnosticCached;
		}
	}

	let script = GlobalAnalyzer.getCompleteCurrentScript(pos, curDoc, docs, true, false, false);
	if(script) {
		let parser = new CParser();
		diagnosticCached = parser.ParseText(docs, script, false).m_diagnostics;
		posCached = pos;
		const bodyEnd = getScriptBodyEndLineExclusive(curDoc, script);
		return {
			diagnostics: diagnosticCached,
			scriptNumber: script.m_scriptnumber,
			scriptBodyLineRange: {
				startLine: script.m_Position.line,
				endLineExclusive: bodyEnd.endLineExclusive,
				endScriptFound: bodyEnd.endScriptFound
			}
		};
	}

	posCached = pos;
	return { diagnostics: diagnosticCached, scriptNumber: undefined };
}
