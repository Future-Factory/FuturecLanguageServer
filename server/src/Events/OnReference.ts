import { Position, Location } from 'vscode-languageserver/node';
import { TextParser } from '../TextParser';
import { CursorPositionType } from '../CursorPositionInformation';
import {
	TextDocument
} from 'vscode-languageserver-textdocument';

function findHookDefinitionInMainScript(
	_docs :Map<string, TextDocument>,
	mainScriptNumber :number,
	hookWithSlashes :string
) :Location[] {
	let loc :Location[] = [];

	_docs.forEach((value:TextDocument) => {
		if(loc.length > 0) { return; }

		const text = value.getText();
		const scriptHeader = new RegExp("^\\s*SCRIPT:" + mainScriptNumber.toString() + "\\b.*$", "gm");
		const headerMatch = scriptHeader.exec(text);
		if(!headerMatch) { return; }

		// Limit search to the script block to avoid wrong matches.
		const headerIndex = headerMatch.index;
		const endRegex = /^\\s*ENDSCRIPT.*$/gm;
		endRegex.lastIndex = headerIndex;
		const endMatch = endRegex.exec(text);
		const blockEnd = endMatch ? endMatch.index : text.length;

		const hookIndex = text.indexOf(hookWithSlashes, headerIndex);
		if(hookIndex >= 0 && hookIndex < blockEnd) {
			const startPos = value.positionAt(hookIndex);
			const endPos = value.positionAt(hookIndex + hookWithSlashes.length);
			loc.push({
				uri: value.uri,
				range: { start: startPos, end: endPos }
			});
			return;
		}

		// Fallback: jump to the SCRIPT header if hook marker not found.
		const headerPos = value.positionAt(headerIndex);
		const start = { line: headerPos.line, character: headerPos.character + 7 };
		const end = { line: headerPos.line, character: headerPos.character + 7 + mainScriptNumber.toString().length };
		loc.push({
			uri: value.uri,
			range: { start, end }
		});
	});

	return loc;
}

export function OnReference(docs :Map<string, TextDocument>, curDoc :TextDocument, pos :Position) : Location[] {
	
	let word = TextParser.getWordAtPosition(pos, curDoc);
	let loc :Location[] = [];
	if(word.isValid()) {
		if(word.m_type != CursorPositionType.INCLUDESCRIPT) {
			let functionname = word.getFunctionname();
			if(functionname) {
				// Special case: from customer INSERTINTOSCRIPT hook -> jump to main script //ADDHOOK marker.
				if(word.m_type == CursorPositionType.ADDHOOK) {
					const lineText = curDoc.getText({
						start: { line: pos.line, character: 0 },
						end: { line: pos.line, character: 10000 }
					});
					const insertMatch = /\bINSERTINTOSCRIPT:(\d+),/g.exec(lineText);
					if(insertMatch) {
						const mainNr = Number.parseInt(insertMatch[1]);
						const hookWithSlashes = "//" + functionname;
						const defLoc = findHookDefinitionInMainScript(docs, mainNr, hookWithSlashes);
						if(defLoc.length > 0) {
							return defLoc;
						}
					}
				}
				loc = findReferencesScriptOrFunction(docs, functionname);
			}
		}
		else {
			loc = findReferencesOfIncludescript(docs, parseInt(word.m_word));
		}
	}
	return loc
}

function findReferencesScriptOrFunction(_docs :Map<string, TextDocument>, functionName :string) :Location[] {
	let loc :Location[] = new Array();

	_docs.forEach((value:TextDocument, key:string) => {
		let pattern:RegExp = new RegExp("(FUNCTION:\\s+(void|double|CString|int|BOOL|CTable|CMoney|CDateTime)\\s+" + functionName + "\\(.*\\)|INSERTINTOSCRIPT:[0-9]+,\\s*\\/\\/" + functionName + ")", "g");
		
		let m: RegExpExecArray | null;
		let DocumentText = value.getText();
		while (m = pattern.exec(DocumentText)) {
			let m2 = new RegExp(functionName, "g");
			m2.lastIndex = m.index;
			let posStartFunction = m2.exec(DocumentText);
			if(posStartFunction) {
				loc.push({
					uri: value.uri,
					range: {
						start: { character: value.positionAt(posStartFunction.index).character, line: value.positionAt(m.index).line },
						end: { character: value.positionAt(posStartFunction.index).character + functionName.length, line: value.positionAt(m.index).line }
					}
				});
			}
		}
	});
	return loc;
}

function findReferencesOfIncludescript(_docs :Map<string, TextDocument>, scriptnumber :number) :Location[] {
	let loc :Location[] = new Array();

	_docs.forEach((value:TextDocument, key:string) => {
		let pattern = new RegExp("^SCRIPT:" + scriptnumber.toString() + "\\b.*$", "gm");
		
		let m: RegExpExecArray | null;
		let DocumentText = value.getText();
		while (m = pattern.exec(DocumentText)) {
			loc.push({
				uri: value.uri,
				range: {
					start: { character: value.positionAt(m.index).character + 7, line: value.positionAt(m.index).line },
					end: { character: value.positionAt(m.index).character + 7 + scriptnumber.toString().length, line: value.positionAt(m.index).line }
				}
			});
			
		}
	});
	return loc;
}
