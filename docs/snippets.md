
# Common Code snippets

 - use these examples to generate code. You can use most of them verbatim, adjusting details for your specific use case.
 - parameters are marked with `${1:nVariableName}` OR `${2:ConstantOrLiteral}`, `${3:strAnotherVariableName}` etc.<br>
   replace those parameters with actual values in your code.

## Unittest Header
```
//UNITTEST1:TABLE1:$1;TABLE2:0;RECORD1:$2;RECORD2:0;USER:$3
```
**description:** Unittest Header

## Unittest Scriptbefore
```
FUNCTION: int UnitTestBuildUp();
//if (m_nUnitTestId == xx) {
$1
ENDFUNCTION;//UnitTestBuildUp
```
**description:** Unittest Script Before

## Unittest ScriptEnd
```
FUNCTION: int UnitTestEnd();
//if (m_nUnitTestId == xx) {
//mstrUnitTestResult1 = 
//mstrUnitTestResultTarget1 = "FILE";
$1
ENDFUNCTION;//UnitTestEnd"
```
**description:** Unittest Result Script

## Unittest Testresult
```
//TESTRESULTS:$1:$2;
```
**description:** Unittest Testanswers

## -1er Datensatz warnen
```
if(m_RecNr <= 0) {
	D.ErrorMessage("Bitte wählen Sie einen gültigen Datensatz aus!");
	return;
};
```
**description:** Warnt den User, wenn er sich im -1er oder 0er Datensatz befindet und bricht das Script ab.

## LockThisScript
```
// Script nur einmal gleichzeitig ausführen lassen (Lokaler Client)
int nParserVersionNumber = H.GetParserVersionNumber();
if (nParserVersionNumber >= 305) {
	H.LockThisScript();
};
```

## LockAction
```
// Script nur einmal gleichzeitig ausführen lassen (Datenbank-weit)
int nParserVersionNumber = H.GetParserVersionNumber();
int nActionLock = 0;
if (nParserVersionNumber >= 429) {
	nActionLock = S.LockAction(${1:AktionNr},-1);		// Aktuelle Funktion		-1 = Alle Records
	if (nActionLock < 0) { D.MessageBoxOK("Aktion wird bereits durchgeführt."); return;};
};
```

## UnlockAction
```
// Action wieder freigeben (Datenbank-weit)
// int nParserVersionNumber = H.GetParserVersionNumber();
if (nParserVersionNumber >= 429) {
	S.UnlockAction(${1:AktionNr}, -1, nActionLock);		// Aktuelle Funktion		-1 = Alle Records
};
```

## Parserversion prüfen
```
if(H.GetParserVersionNumber() < ${1:Mindestversion Parser}) {
	D.ErrorMessage("Für diese Funktion wird eine neuere Softwareversion benötigt. Mindestversion: ${2:Mindestversion Client}");
	return;
};
```
**description:** Warnt den User, wenn seine Parserversion zu gering für das aktuelle Script ist und bricht das Script ab.

## Gebucht prüfen
```
// Überprüfen, ob der Beleg bereits gebucht ist
BOOL bGebucht = m_Rec.GetElementINT(${1:GebuchtCol},0);
if (bGebucht) {
	D.MessageBoxOK("Dieser Beleg ist bereits verbucht. Die Funktionsausführung ist nicht möglich.");
	return;
};
```
**description:** Warnt den User, wenn der Beleg bereits gebucht ist und bricht das Script ab.

## bContinue
```
//INPUT: Sicherheitsabfrage
BOOL bContinue = D.AskUser("Wollen Sie jetzt XXX?");
if (!bContinue) {
	//S.UnlockAction(${1:AktionNr}, -1, nActionLock);		// Aktuelle Funktion		-1 = Alle Records
	return;
};
```

## dtToday
```
CDateTime dtToday;
dtToday.SetActDateOnly();
```

## dtNow
```
CDateTime dtNow;
dtNow.SetActTime();
```

## Zeitraum Abfrage Pflicht
```
//INPUT: Zeitraum abfragen (Pflichteingabe)
CDateTime dtBeginn;
CDateTime dtEnde;
BOOL bZeitraumGültig = FALSE;
while(!bZeitraumGültig) {
	int nZeitraumResult = D.GetDate2Box("Zeitraum bestimmen","Geben Sie den gewünschten Zeitraum ein.","Beginn","Ende",dtBeginn,dtEnde,TRUE);
	if(nZeitraumResult < 1) { return; };

// Auf Gültigkeit überprüfen
	if((!dtBeginn.IsSet()) OR (!dtEnde.IsSet()) OR (dtBeginn > dtEnde)) {
		D.ErrorMessage("Bitte wählen Sie einen gültigen Zeitraum aus.");
	} else {
		bZeitraumGültig = TRUE;
	};
};

// Zeiten in Text umwandeln
CString strBeginn = dtBeginn.GetDateString("DD.MM.YYYY",TRUE);
CString strEnde = dtEnde.GetDateString("DD.MM.YYYY",TRUE);
```
**description:** Erstellt eine Zeitraumabfrage, in der auf einen gültigen Zeitraum geprüft wird.

## Zeitraum Abfrage Optional
```
//INPUT: Zeitraum abfragen (optional)
CDateTime dtBeginn;
CDateTime dtEnde;
int nZeitraumResult = D.GetDate2Box("Zeitraum bestimmen","Geben Sie bei Bedarf den gewünschten Zeitraum ein.","Beginn","Ende",dtBeginn,dtEnde,TRUE);

// Zeiten in Text umwandeln
CString strBeginn = dtBeginn.GetDateString("DD.MM.YYYY",TRUE);
CString strEnde = dtEnde.GetDateString("DD.MM.YYYY",TRUE);
```
**description:** Erstellt eine Zeitraumabfrage

## Datum Abfrage Pflicht
```
//INPUT: Datum abfragen (Pflichtfeld)
CDateTime dtStichtag;
CDateTime dtDefault;
dtDefault.SetActDateOnly();
BOOL bCancelButton = TRUE;		BOOL bCancelled = FALSE; 
BOOL bDatumGültig = FALSE;
while(!bDatumGültig) {
	dtStichtag = D.GetDateBox("Datum bestimmen","Geben Sie das gewünschte Datum ein XXX.","Datum",dtDefault,bCancelButton,bCancelled);
	if (bCancelled) {
		return;
	};
	if (dtStichtag.GetYear() > 1901) {
		bDatumGültig = TRUE;
	};
};
```

## Datum Abfrage Optional
```
//INPUT: Datum abfragen (optional)
CDateTime dtDefault;
dtDefault.SetActDateOnly();
BOOL bCancelButton = TRUE;		BOOL bCancelled = FALSE; 
CDateTime dtStichtag = D.GetDateBox("Datum bestimmen","Geben Sie bei Bedarf das gewünschte Datum ein XXX.","Datum",dtDefault,bCancelButton,bCancelled);
if (bCancelled) {
	return;
};
```

## Money Abfrage Optional
```
//INPUT: Geldbetrag abfragen (optional)
CMoney mDefault;
BOOL bCancelButton = TRUE;		BOOL bCancelled = FALSE; 
CMoney mBetrag = D.GetMoneyBox("Betrag eingeben","Geben Sie bei Bedarf den gewünschten Betrag ein.","Betrag",mDefault,bCancelButton,bCancelled);
if (bCancelled) {
	return;
};
```

## Money Abfrage Pflicht
```
//INPUT: Geldbetrag abfragen (Pflichtfeld)
CMoney mDefault;
CMoney mBetrag;
BOOL bCancelButton = TRUE;		BOOL bCancelled = FALSE; 
BOOL bBetragGültig = FALSE;
while(!bBetragGültig) {
	mBetrag = D.GetMoneyBox("Betrag eingeben","Geben Sie den gewünschten Betrag ein.","Betrag",mDefault,bCancelButton,bCancelled);
	if (bCancelled) {
		return;
	};
	if (mBetrag.GetValue() != 0) {
		bBetragGültig = TRUE;
	};
};
```

## Zeitraum Vorgabe bis heute
```
// Zeitraum Default-Werte setzen
dtBeginn.SetActDateOnly();
dtBeginn.DayMinus(30);
dtEnde.SetActDateOnly();
```
**description:** Erstellt eine Zeitraumabfrage

## Zeitraum Vorgabe Vormonat
```
// Zeitraum Default-Werte Vormonat setzen
dtEnde.SetActDateOnly();
dtEnde.SetDay(1);
dtEnde.DayMinus(1);
dtBeginn = dtEnde;
dtBeginn.SetDay(1);
```
**description:** Erstellt eine Zeitraumabfrage

## tAusgabe
```
// Ausgabetabelle erzeugen
CTable ${1:tAusgabe};
int nColXXX = ${1:tAusgabe}.AddColumn("XXX",TYPE_LINK,90);
int nColXXX = ${1:tAusgabe}.AddColumn("XXX",TYPE_FIXSTRING,100);
int nColXXX = ${1:tAusgabe}.AddColumn("XXX",TYPE_VARSTRING,0);
int nColXXX = ${1:tAusgabe}.AddColumn("XXX",TYPE_INT,0);
int nColXXX = ${1:tAusgabe}.AddColumn("XXX",TYPE_DOUBLE,0);
int nColXXX = ${1:tAusgabe}.AddColumn("XXX",TYPE_DATETIME,0);
```

## Tabelle Zeile ergänzen
```
int nFoundRow = ${1:tAusgabe}.SearchNumber(${2:nID},${3:nCol});
if (nFoundRow < 0) {
	nFoundRow = ${1:tAusgabe}.AddRow();
	${1:tAusgabe}.SetElementINT(${3:nCol},nFoundRow,${2:nID});
};
```

## foreachrow
```
foreachrow(${1:tAuftrag};${2:nRow}) {
	int nID = ${1:tAuftrag}.GetElementINT(1,${2:nRow});
	int nValue = ${1:tAuftrag}.GetElementINT(xx,${2:nRow});
	CString strValue = ${1:tAuftrag}.GetElementSTRING(xx,${2:nRow});
	double dValue = ${1:tAuftrag}.GetElementDOUBLE(xx,${2:nRow});
	CMoney mValue = ${1:tAuftrag}.GetElementMONEY(xx,${2:nRow});
	CDateTime dtValue = ${1:tAuftrag}.GetElementDATE(xx,${2:nRow});
	
	${1:tAuftrag}.SetElementINT(xx,${2:nRow},nXXX);
	${1:tAuftrag}.SetElementSTRING(xx,${2:nRow},strXXX);
};
```
**description:** Erstellt foreachrow Beispielcode

## foreachrowreverse
```
foreachrowreverse(${1:tAuftrag};${2:nRow}) {
	int nID = ${1:tAuftrag}.GetElementINT(1,${2:nRow});
	int nValue = ${1:tAuftrag}.GetElementINT(xx,${2:nRow});
	if (XXX) {
		${1:tAuftrag}.DeleteRow(${2:nRow});
	};
};
```
**description:** Erstellt foreachrow Beispielcode

## RewriteGlobals
```
// m_Rec zwischenspeichern
int nTabNr = m_TabNr;
int nRecNr = m_RecNr;
CTable tRec = m_Rec;

// m_Rec mit gewünschten Daten befüllen
m_TabNr = XXX;
m_RecNr = XXX;
m_Rec.DeleteAll();
m_Rec.SetSameColumns(tXXX);
m_Rec.AddRowFromTable(nRow, tXXX);
H.RewriteGlobalsFromStack();

// Includefunktion aufrufen
#includescript XXX			//

// m_Rec wiederherstellen
m_TabNr = nTabNr;
m_RecNr = nRecNr;
m_Rec = tRec;
H.RewriteGlobalsFromStack();
```

## Protokoll SetText
```
//OUTPUT: Protokollieren im Datensatz
int nMitarbeiter = S.GetActualPersonalNumber();
CTable tUser = S.GetCachedRecord(200,nMitarbeiter);
CString strUser = tUser.GetElementSTRING(5,0) + " " + tUser.GetElementSTRING(7,0);
CDateTime dtNow;
dtNow.SetActTime();

CString strBemerkung = ${1:tRecord}.GetElementSTRING(${2:nProzessCol},0);			// Prozess-Ereigniss VK:143  EK:65
if (strBemerkung.GetLength() > 0) { strBemerkung = strBemerkung + STRING_LINEBREAK;};
strBemerkung = strBemerkung + dtNow.GetDateString("DD.MM.YYYY") + " " + dtNow.GetTimeString("HH:MM") + "\	" + "xxx" + "\	" + strUser;
${1:tRecord}.SetElementSTRING(${2:nProzessCol},0,strBemerkung);
```
**description:** Protokolliert ein Ereignis in einer Bemerkung

## GetListSelection Ergebnis
```
//OUTPUT: Ergebnis anzeigen
//${1:tAusgabe}.SetAllColumnWidth(0);
${1:tAusgabe}.SetColumnWidth(5,20);
CString strTitel = "XXX-Statistik";
CString strRecord = m_Rec.GetElementSTRING(5,0);
strTitel = strTitel + " " + strRecord;
CString strZeitraum = dtBeginn.GetDateString("DD.MM.YYYY",TRUE) + " - " + dtEnde.GetDateString("DD.MM.YYYY",TRUE);
strTitel = strTitel + " " + strZeitraum;
CString strStaticText = "";
int nStatisticType = 0;		// 0 = no statistic, 1 = all statistics, 2 = sum only, 3 = sum+average, 4=sum+count+average
int nWidth = 950;	int nHeight = 800;	BOOL bEnableEdit = FALSE;	BOOL bEnableSort = TRUE;
int nColorColumns = 0;	int nPrintTextHeight = 0;	int nRowHeight = 0;	BOOL bShowWeekdays = FALSE;	int nTreeItemLinkCol = 0;
BOOL bDontShowPrintListButton = FALSE;	int nListEditOnChangeScript = 0;	BOOL bForbidAddRemoveRow = FALSE;
BOOL bToggleCheckButton = FALSE;	CString strNoEditCols = "";	CString strSearchColumns = "";
CTable tFormattingTable;
D.GetListSelection(strTitel,"",${1:tAusgabe},FALSE,strStaticText,nWidth,nHeight,bEnableEdit,0,bEnableSort,nStatisticType,TRUE,TRUE,nColorColumns,nPrintTextHeight,nRowHeight,bShowWeekdays,nTreeItemLinkCol,tFormattingTable,bDontShowPrintListButton,nListEditOnChangeScript,bForbidAddRemoveRow,bToggleCheckButton,strNoEditCols,strSearchColumns);
```

## GetListSelection vollständig
```
//OUTPUT: Tabelle anzeigen
//${1:tAusgabe}.SetAllColumnWidth(0);
${1:tAusgabe}.SetColumnWidth(5,20);
CString strTitle = "XXX-Statistik";
CString strName = "";
CString strStatic = "";
BOOL bCancelButton = FALSE;
int nWidth = 770;
int nHeight = 500;
BOOL bEnableEdit = FALSE;
int nNoEditCol = 0;
BOOL bEnableSort = TRUE;
int nShowStatistics = 0;	// 0 = no statistic, 1 = all statistics, 2 = sum only, 3 = sum+average, 4=sum+count+average
BOOL bDontDBlClickOK = TRUE;
BOOL bPrintPortrait = FALSE;
int nColorColumns = 0;
int nPrintTextHeight = 0;
int nRowHeight = 0;
BOOL bShowWeekdays = FALSE;
int nTreeItemLinkCol = 0;
BOOL bDontShowPrintListButton = FALSE;
int nListEditOnChangeScript = 0;
BOOL bForbidAddRemoveRow = FALSE;
BOOL bToggleCheckButton = FALSE;
CString strNoEditCols = "";
CString strSearchColumns = "";
CTable tFormattingTable;
int nListRow = D.GetListSelection(strTitle, strName, ${1:tAusgabe}, bCancelButton, strStatic, nWidth, nHeight, bEnableEdit, nNoEditCol, bEnableSort, nShowStatistics, bDontDBlClickOK, bPrintPortrait, nColorColumns, nPrintTextHeight, nRowHeight, bShowWeekdays, nTreeItemLinkCol, tFormattingTable, bDontShowPrintListButton, nListEditOnChangeScript, bForbidAddRemoveRow, bToggleCheckButton, strNoEditCols, strSearchColumns);
```
**description:** GetListSelection mit allen Variablen auf Standardwerten

## GetListSelection Auswahl
```
//INPUT: Aus Liste auswählen
//${1:tAusgabe}.SetAllColumnWidth(0);
${1:tAusgabe}.SetColumnWidth(5,20);
CString strTitel = "XXX auswählen";
CString strStaticText = "Bitte wählen Sie den gewünschten XXX aus";
int nWidth = 950;	int nHeight = 800;	BOOL bEnableEdit = FALSE;	BOOL bEnableSort = TRUE;
int nActiveRow = D.GetListSelection(strTitel,"",${1:tAusgabe},FALSE,strStaticText,nWidth,nHeight,bEnableEdit,0,bEnableSort,0,TRUE,TRUE);
if (nActiveRow < 0) { return;};
int nSelectedID = ${1:tAusgabe}.GetElementINT(1,nActiveRow);
```

## GetListEdit Kurz
```
//INPUT: ${1:Ausgabe}-Tabelle bearbeiten
//t${1:tAusgabe}.SetAllColumnWidth(0);
t${1:tAusgabe}.SetColumnWidth(5,20);
CString strTitel = "${1:Ausgabe} bearbeiten";
CString strStaticText = "Bitte geben Sie ... XXX";
int nWidth = 950;	int nHeight = 800;	int nNoEditCol = 0;	int nOnChangeTextNumber = 0;	BOOL bDontDblClkOK = TRUE;
int nResult = D.GetListEdit(strTitel,"${1:Ausgabe}",t${1:tAusgabe},strStaticText,nWidth,nHeight,nNoEditCol,nOnChangeTextNumber,bDontDblClkOK);
if (nResult < 1) { return;};
```

## GetListEdit Lang
```
//INPUT: ${1:Ausgabe}-Tabelle bearbeiten
//t${1:tAusgabe}.SetAllColumnWidth(0);
t${1:tAusgabe}.SetColumnWidth(5,20);
CString strTitel = "${1:Ausgabe} bearbeiten";
CString strStaticText = "Bitte geben Sie ... XXX";
int nWidth = 950;	int nHeight = 800;	int nNoEditCol = 0;	int nOnChangeTextNumber = 0;	BOOL bDontDblClkOK = TRUE;	CString strOnChangeText = "";
BOOL bPrintPortrait = FALSE;	int nPrintTextHeight = 0;	BOOL bNoCancelButton = FALSE;	int nRowHeight = 0;	BOOL bShowWeekdays = FALSE;	int nShowStatistics = 0;
BOOL bAllowSort = FALSE;	BOOL bDefaultButton = FALSE;	int nColorColumns = 0;	BOOL bDontShowPrintListButton = FALSE;	int nListEditOnChangeScript = 0;
BOOL bForbidAddRemoveRow = FALSE;	CString strNoEditCols = "";
CString strSearchColumns = "";
CTable tFormattable;
int nResult = D.GetListEdit(strTitel,"${1:Ausgabe}",t${1:tAusgabe},strStaticText,nWidth,nHeight,nNoEditCol,nOnChangeTextNumber,bDontDblClkOK,strOnChangeText,bPrintPortrait,nPrintTextHeight,bNoCancelButton,nRowHeight,bShowWeekdays,nShowStatistics,bAllowSort,bDefaultButton,nColorColumns,bDontShowPrintListButton,nListEditOnChangeScript,bForbidAddRemoveRow,strNoEditCols,strSearchColumns,tFormattable);
if (nResult < 1) { return;};
```

## GetLinkSelection Optional
```
//INPUT: ${1:XXX} auswählen
CString strStatic = "Bitte wählen Sie das ${1:XXX} aus.";
int nTable = ${2:Table}
int nDefaultValue = 0;
BOOL bCancel = TRUE; BOOL bSearchLink1 = FALSE;
int n${1:XXX} = D.GetLinkSelection("${1:XXX} auswählen","${1:XXX}",nTable,strStatic,bCancel,bSearchLink1,nDefaultValue);	// return value: link-number,  0 if no selection, -1 if canceled
if (n${1:XXX} < 0) {
	return;
};
```
**description:** Erstellt eine Zeitraumabfrage

## GetLinkSelection Pflichtfeld
```
//INPUT: ${1:XXX} auswählen
CString strStatic = "Bitte wählen Sie das ${1:XXX} aus.";
int nTable = ${2:Table};
int nDefaultValue = 0;
BOOL bCancel = TRUE; BOOL bSearchLink1 = FALSE;
int n${1:XXX} = 0;
while (n${1:XXX} == 0) {
	n${1:XXX} = D.GetLinkSelection("${1:XXX} auswählen","${1:XXX}",nTable,strStatic,bCancel,bSearchLink1,nDefaultValue);	// return value: link-number,  0 if no selection, -1 if canceled
	if (n${1:XXX} < 0) {
		return;
	};
};
```
**description:** Erstellt eine Zeitraumabfrage

## Formattable Create
```
// Tabelle für Formatierungen
CTable tFormattable;
D.CreateFormatingTableColumns(tFormattable);
```

## Formattable Zeile
```
// Formatierung für Zelle definieren
int nFarbe = H.GetRGBValue(0,0,0);
int nNewFormattableRow = tFormattable.AddRow();
tFormattable.SetElementINT(1,nNewFormattableRow,nCol);			// Spalte: 0 = Alle   Sonst nCol + 1 !!!
tFormattable.SetElementINT(2,nNewFormattableRow,nRow); 		// Zeile:  0 = Alle   Sonst nRow + 1 !!!
tFormattable.SetElementINT(3,nNewFormattableRow,nFarbe);		// Farbe Text
tFormattable.SetElementINT(4,nNewFormattableRow,nFarbe);		// Farbe Background
tFormattable.SetElementSTRING(5,nNewFormattableRow,"B");		// Textstyle    B=Bold=Fett    I=Italic=Kursiv  U=Underline=Unterstrichen
```

## Zeitraum Select
```
// Zeitraum eingrenzen
CString strWhere;
CString strTemp;
if (dtBeginn.GetYear() > 0) {
	strTemp = dtBeginn.GetDateString("DD.MM.YYYY");
	strWhere = "([${1:XXX}]>=" + strTemp + ")";
};
if (dtEnde.GetYear() > 0) {
	strTemp = dtEnde.GetDateString("DD.MM.YYYY");
	strWhere = strWhere + " AND ([${1:XXX}]<=" + strTemp + ")";
};
if (S.IsModuleActive(10)) {	// Auf Mandant einschränken
	int nMandant = S.GetActualMandantNumber();
	if (nMandant > 0) {
		strWhere = strWhere + " AND ([YYY]=" + nMandant + ")";
	};
};
CTable t${2:Belege} = S.Select(${3:TabellenNr},strWhere);
```

## GetRadioSelectionText
```
//INPUT: Typ auswählen
int nWidth = 500;	int nHeight = 300;	BOOL bCancelButton = TRUE;	int nDefaultRow = 0;
CString strTitle = "XXX auswählen";
CString strStatic = "Bitte XXX";
CString strOption1 = "";		CString strOption2 = "";
CString strOption3 = "";		CString strOption4 = "";		CString strOption5 = "";
int nSelection = D.GetRadioSelectionText(strTitle,bCancelButton,nWidth,nHeight,strStatic,strOption1,strOption2,strOption3,strOption4,strOption5,nDefaultRow);
if (nSelection < 0) {return;};
if (nSelection == 0) {     };
if (nSelection == 1) {     };
```

## GetTextBox
```
//INPUT: ${1:XXX} eingeben
CString strTitle = "${1:XXX} eingeben";
CString strStatic = "Bitte geben Sie den ${1:XXX} ein";
CString strDefault = "";
BOOL bCancelButton = TRUE;
CString str${1:XXX} = D.GetTextBox(strTitle,"${1:XXX}",strDefault,strStatic,bCancelButton);
if (str${1:XXX}.GetLength() < 1) { return; };
```

## GetTextBox - Pflicht
```
//INPUT: ${1:Text} eingeben
CString strTitle = "${1:Text} eingeben";
CString strStatic = "Bitte geben Sie den ${1:Text} ein";
CString strDefault = "";
CString str${1:Text} = "";

while(str${1:Text}.GetLength() == 0) {
	str${1:Text} = D.GetTextBox(strTitle, "${1:Text}", strDefault, strStatic, FALSE);
	str${1:Text}.Trim();
};
```

## GetTextBoxMultiline
```
//INPUT: ${1:XXX} eingeben
CString strTitle = "${1:XXX} eingeben";
CString strStatic = "Bitte geben Sie den ${1:XXX} ein";
CString strDefault = "";
BOOL bCancelButton = TRUE;
int nWidth = 500; int nHeight = 500;
CString str${1:XXX} = D.GetTextBoxMultiline(strTitle,"${1:XXX}",strDefault,strStatic,bCancelButton,nWidth,nHeight);
if (str${1:XXX}.GetLength() < 1) { return; };
```

## MyDialog
```
//INPUT: 
// Dialog initialisieren
CString strMyDialogTitle = "XXX";
CString strMyDialogStatic = "YYY";
D.MyDialogInitialise();
D.MyDialogSetTitle(strMyDialogTitle);
D.MyDialogSetStatic(strMyDialogStatic); 

// Elemente erzeugen
int nElement1 = D.MyDialogAddElement(DLG_EDIT_MONEY,"Betrag","20","+0.5","25","1.2",FALSE,4,mBetrag,0,0,0,"2");
int nElement2 = D.MyDialogAddText(DLG_EDIT_NUMERIC,"Menge","20","+0.5","25","1.2",FALSE,0,dMenge);
int nElement3 = D.MyDialogAddElement(DLG_EDIT_DATE,"Lieferdatum", "20","+0.5","25","1.2",FALSE,4,dtLieferdatum);
int nElement4 = D.MyDialogAddElement(DLG_EDIT, "Text", "20", "+0.5", "25", "1.2", FALSE, 1, strText);
int nElement5 = D.MyDialogAddElement(DLG_EDIT_MULTILINE, "Text", "20", "+0.5", "100", "3.0", FALSE, 1, strText);
int nElement6 = D.MyDialogAddText(DLG_EDIT_PERCENT,"Prozent","20","+0.5","25","1.2",FALSE,2,dProzent);
int nElement7 = D.MyDialogAddElement(DLG_LINK_COMBO, "Mandant", "20", "+0.5", "25", "1.2", FALSE, 0, nMandant, 125);
int nElement8 = D.MyDialogAddElement(DLG_LINK_SEARCH, "Artikel suchen", "20", "+0.5", "25", "1.2", FALSE, 4, nArtikel, 90);
int nElement9 = D.MyDialogAddElement(DLG_COMBO,"Typ","20","+0.5","25","1.2",FALSE,0,tTyp,500);
int nElement10 = D.MyDialogAddElement(DLG_CHECKBOX, "Checkbox", "20", "+0.5", "25", "1.2", FALSE, 4, bCheck);

D.MyDialogSetFirstFocus(nElement1);

// Dialog anzeigen
BOOL bCancelButton = TRUE; BOOL bNoDefaultButton = FALSE;
int nLeft = 0; int nTop = 0; int nWidth = 0; int nHeight = 0;
int nReturn = D.MyDialogDoModal(bCancelButton,bNoDefaultButton,nLeft,nTop,nWidth,nHeight); // return: 1 = OK, 0 = Cancel
if (nReturn == 0) { return; };
D.MyDialogDestroy();
```

## GetCheckSelection
```
//INPUT: CheckSelection ${1:XXX}
CString strTitle = "${1:XXX} auswählen";
CString strStatic = "Wählen Sie die ${1:XXX} aus, für die...";
CString strSpalten = "1,5,6,15,41,93,97";
CString strSpaltenbreiten = "0,15,15,15,20,15,15";
//HINWEIS: es müssen die Spalten berücksichtigt werden, die von der GetCheckSelection intern eingefügt werden
//deshalb sind die Suchfeld-Spalten um 2 verschoben (d.h. 1,2 => 3,4)(!)			
CString strSearchColumns = "";
int nWidth = 1200; 	int nHeight = 600;
BOOL bCheckTrue = FALSE;	BOOL bCancelButton = TRUE;	BOOL bModifyOriginalTable = TRUE;
CString strOKButtonLabel = "";	CString strCancelButtonLabel = "";
int nCheckDefaultCol = 0;	// Check-Status aus einer bestimmten Spalte auslesen?
CString strNoEditCols = "";
BOOL bDontAllowSort = FALSE;
int nColorColumn = 0;		// 1. Byte -> Spalte mit Farbzahl (zB 108)	2. Byte -> Zielspalte (zB 5)  => wäre 1388

CTable tReturn = D.GetCheckSelection(strTitle,t${1:XXX},strSpalten,strSpaltenbreiten,strStatic,bCheckTrue,bCancelButton,nWidth,nHeight,bModifyOriginalTable,strOKButtonLabel,strCancelButtonLabel,nCheckDefaultCol,strNoEditCols,nColorColumn,bDontAllowSort,strSearchColumns);
tReturn.DeleteRowsColumnCondition(0,0);
//Keine Datensätze mehr vorhanden oder Cancel Button -> Abbruch
if ((t${1:XXX}.GetRowCount() < 1) OR (tReturn.GetRowCount() < 1)) {
	return;
};
```

## PositionenElement
```
//Positionen des Belegs holen
int nPositionenElement = D.FindElementFromDataParameter(82,0);		// 82 im Verkauf, 79 im Einkauf
CTable tPositionen = D.GetTable(nPositionenElement);

foreachrow(tPositionen;nPosRow) {
	int nArtikel = tPositionen.GetElementINT(4,nPosRow);				// 4 im Verkauf, 3 im Einkauf
	double dMenge = tPositionen.GetElementDOUBLE(6,nPosRow);

	CTable tArtikel = S.GetCachedRecord(90,nArtikel);
	//CTable tArtikel = S.SelectRecord(90,nArtikel);
};
D.SetTable(nPositionenElement,tPositionen);
D.MarkAllRowsForUpdate(nPositionenElement);
D.SaveTableChanges(nPositionenElement);
```

## PositionenDB
```
//Positionen des Belegs aus Datenbank holen
CString strPositionen = m_Rec.GetElementSTRING(82,0);
CTable tPositionen = S.Select(m_TabNr + 1,"([2]=" + m_RecNr + ")");
tPositionen.SortTableSpecial(strPositionen);
```

## Neuesten Datensatz holen
```
// Letzten Datensatz aus der Datenbank holen
int nTop = 1;
int nSortCol = 1;
CString strAdditionalCondition = "";
CString strCols = "";
BOOL bSortDescending = TRUE;
CTable ${2:tTable} = S.Select(${3:260 }, strAdditionalCondition , strCols, FALSE, 0, nTop, nSortCol, bSortDescending);
```

## Script Body
```
CHANGE:	Datum	Entwickler	//AP-ID:
	Created

///////////////////////////////////////////////////////////////////////////////!
SCRIPT:XXX,Scriptname,0,0,0,Verzeichnis


ENDSCRIPT
///////////////////////////////////////////////////////////////////////////////!
```

## LockActualRecord
```
//S.RequestSaveAndUnlock(m_TabNr,m_RecNr);
S.LockActualRecord();


S.UpdateActualRecord();
S.UnlockActualRecord();
```

## Variablen Text holen Snippet
```
CString strText = "";
int nFormularID = 1;
int nTextKennung = 1;
int nMandant = S.GetActualMandantNumber();
int nSprache = 1;

CTable tText = S.Select(31, "([24]=" + nFormularID + ") AND ([25]=" + nTextKennung + ") AND ([26]=" + nMandant + ")", "1");
int nTextID = tText.GetElementINT(1,0);
if(nTextID > 0) {
	strText = S.GTM(nTextID, nSprache, TRUE);
};
```
**description:** Variablen Text holen Snippet

## Testumgebung Snippet
```
BOOL bTestumgebung = S.GetOptionBOOL(2);
if(bTestumgebung) {
	D.ErrorMessage("Es handelt sich um eine interne Testumgebung. Echtdaten dürfen nur in der Entwicklungsumgebung auf dem Kundenserver geladen werden");
	return;
};
```
**description:** Warnt den User, wenn er sich in einer Testumgebung befindet und bricht das Script ab.

## Unicode Client Snippet
```
BOOL bUnicodeClient = FALSE;
if(H.GetParserVersionNumber() >= 2000) {
	bUnicodeClient = TRUE;
};
```
**description:** Prüft, ob es sich beim aktuellen Client um einen Unicode Client handelt.

## CreateProtocol Snippet
```
// OUTPUT: 84er Protokoll erzeugen
int nParserVersionNumber = H.GetParserVersionNumber();
if ((nParserVersionNumber >= 428) AND (S.TableExists(84))) {
	int nTable = m_TabNr;
	int nRecord = m_RecNr;
	CString strProtocollBemerkung = "";
	int nProtocolType = 3;	// 1: Recordchange, 2: Lockbreak, 3: Parserchange, 4: Scriptanswer, 5: Autorun, 6-10: Client, 11-40: Parser
	S.CreateProtocol(nTable, nRecord, strProtocollBemerkung, nProtocolType);
};
```
**description:** Erzeugt einen Protokoll-Eintrag in der 84er Tabelle

## SearchRecords Snippet
```
//INPUT: ${1:Tabelle} auswählen
int nSearchTable = ${2:TabelleNr};
CString strTitle = "${1:Tabelle}";	// Titel des Suchfensters
BOOL bDontShowList = FALSE;	// Suchergebnis anzeigen
int nSearchMandant = 0;		// Einschränkung auf Mandant
int nSearchBranch = 0;		// Einschränkung auf Filiale // Ab Parserversion 427
// TESTHINT: Rückgabetabelle hat nicht immer alle Spalten. Nur Spalte 1 (ID) ist immer fix. -> Wenn mehr Spalten benötigt werden muss Tabelle neu Selektiert werden.
CTable t${1:Tabelle}Searchresult = S.SearchRecords(nSearchTable, strTitle, bDontShowList, nSearchMandant, nSearchBranch);
int nRows = t${1:Tabelle}Searchresult.GetRowCount();
if (nRows < 1) {
	// UnlockActualRecord();
	return;
};

CString str${1:Tabelle}IDs = t${1:Tabelle}Searchresult.ExtractUniqueNumbers();
CTable t${1:Tabelle} = S.SelectMultipleRecords(${2:TabelleNr}, str${1:Tabelle}IDs);
```
**description:** Erzeugt einen Suchdialog und selektiert die gesuchten Datensätze

## foreachrow mit Update
```
BOOL bUpdateMultipleRecords = TRUE;
if(H.GetParserVersionNumber() < 2003) {
	bUpdateMultipleRecords = FALSE;
};
foreachrow(${1:tAuftrag};${2:nRow}) {
	int nID = ${1:tAuftrag}.GetElementINT(1,${2:nRow});
	int nValue = ${1:tAuftrag}.GetElementINT(xx,${2:nRow});
	CString strValue = ${1:tAuftrag}.GetElementSTRING(xx,${2:nRow});
	double dValue = ${1:tAuftrag}.GetElementDOUBLE(xx,${2:nRow});
	CMoney mValue = ${1:tAuftrag}.GetElementMONEY(xx,${2:nRow});
	CDateTime dtValue = ${1:tAuftrag}.GetElementDATE(xx,${2:nRow});
	
	${1:tAuftrag}.SetElementINT(xx,${2:nRow},nXXX);
	${1:tAuftrag}.SetElementSTRING(xx,${2:nRow},strXXX);
	
	if(!bUpdateMultipleRecords){
		S.UpdateRecord(${3:nTable}, nID,${1:tAuftrag},${2:nRow});
	};
};
if(bUpdateMultipleRecords){
	S.UpdateMultipleRecords(${3:nTable},${1:tAuftrag},${4:strUpdateColumns});
};
```
**description:** Erstellt foreachrow Beispielcode mit UpdateRecord bzw. UpdateMultipleRecords

## InsertMultipleRecords Snippet
```
BOOL bInsertMultipleRecords = TRUE;
if(H.GetParserVersionNumber() < 2001) {
	bInsertMultipleRecords = FALSE;
};

while(xxx){
	
	int nNewRow = ${1:tBelege}.AddRow();
	
	
	
	if(!bInsertMultipleRecords){
		S.InsertRowFromRecord(${2:nTable}, ${1:tBelege}, nNewRow);
	};
};

if(bInsertMultipleRecords){
	S.InsertMultipleRecords(${2:nTable}, ${1:tBelege});
};
```
**description:** Erstellt einen Beispielcode um mehrere Datensätze anzulege
 
