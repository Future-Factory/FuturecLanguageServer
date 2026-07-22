import { Position, Diagnostic } from 'vscode-languageserver/node';
import { CParser } from '../Parser/CParser';
import { GlobalAnalyzer, parserFunctions } from '../server';
import {
	TextDocument
} from 'vscode-languageserver-textdocument';

let diagnosticCached :Diagnostic[] = [];
let posCached :Position|null = null;

export type CollectedStatistics = {
	byVariable :StatisticsForParser;
	byType :Map<string, Map<string, number>>;
};

export function OnCollectStatistics(docs :Map<string, TextDocument>, curDoc :TextDocument, pos :Position) :CollectedStatistics {
	if(posCached) {
		if(posCached.line == pos.line) {
			//return diagnosticCached;
		}
	}

	let script = GlobalAnalyzer.getCompleteCurrentScript(pos, curDoc, docs, true, false, false);
	if(script) {
		let parser = new CParser(true);
		parser.ParseText(docs, script, false);
		return {
			byVariable: parser.m_Statistics,
			byType: parser.m_StatisticsByType
		};
	}
	return {
		byVariable: new Map(),
		byType: new Map()
	};
}

export function OnCollectStatisticsForAllScripts(docs :Map<string, TextDocument>, curDoc :TextDocument, _pos :Position) :Map<string, Map<string, number>> {
	let parser = new CParser(true);
	// Nur Skriptkörper dieser Datei zählen — keine Includes/Hauptskripte (sonst Mehrfachzählung).
	let allScripts = GlobalAnalyzer.getAllScripts(curDoc, docs, false);
	allScripts.forEach((script) => {
		parser.ParseText(docs, script, false);
	});
	return parser.m_StatisticsByType;
}

export function formatStatisticsSummary(byType :Map<string, Map<string, number>>) :string[] {
	let entries :{ line: string; count: number }[] = [];
	byType.forEach((funcs, type) => {
		funcs.forEach((count, func) => {
			entries.push({
				line: `${type}.${func} - Count: ${count}`,
				count
			});
		});
	});
	entries.sort((a, b) => b.count - a.count || a.line.localeCompare(b.line));
	return entries.map(e => e.line);
}
