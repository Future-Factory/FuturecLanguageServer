This file contains all built-in functions available in Future-C Script language. There are no other functions available.

F: - Start of function description.
N: - the name of the function.
S: - full signature including parameters
C: - context - either namespace or built-in type.
V: - Script language version where this function was first implemented (See GetParserVersionNumber function)
R: - Type of the return value.
NOTE: - additional info about function, mostly just script version when a parameter has been added - it is multiline and goes up to the next function description (F:)

Context explanation:
Function Context ("C:" tag) is either:
 - a library namespace. OR
 - a built-in complex type.
 Available Namespaces: S=Database,F=Filesystem,D=Dialog(GUI),H=Helper(Misc),P=Printing
  Treat all functions in a namespace as static functions.
  Example namespace function:
   int nNewRecord = S.InsertRecord(189,tNeu);
 Built-in Types: CString, CTable, CDateTime, CMoney
  Treat all such functions as methods. They need a variable and can not be called on the type itself.
  Example method call:
   CString strNummerTemp = strArtikelNr;
   int nFindPos = strNummerTemp.Find("-");

Functions definitions start here
F:
N:AddTEXT
S:AddTEXT(int nTable, int nColumn, int nRecord, CString strText);
C:S
R:void
F:
N:AddMONEY
S:AddMONEY(int nTable, int nColumn, int nRecord, CMoney Money1, Money Money2);
C:S
R:void
F:
N:AddDATETIME
S:AddDATETIME(int nTable, int nColumn, int nRecord, CDateTime Date1);
C:S
R:void
F:
N:AddDATE
S:AddDATE(int nTable, int nColumn, int nRecord, CDateTime Date1);
C:S
R:void
F:
N:AddDOUBLE
S:AddDOUBLE(int nTable, int nColumn, int nRecord, double dValue);
C:S
R:void
F:
N:AddINT
S:AddINT(int nTable, int nColumn, int nRecord, int nValue);
C:S
R:void
F:
N:AddCALCULATION
S:AddCALCULATION(int nTable, int nColumn, int nRecord, CString strCalculation);
C:S
R:void
F:
N:AddFIBUMoneyInOut
S:AddFIBUMoneyInOut(CMoney mMoney, int nKassa, CString strText, int nMandant, int nKontoSoll, int nKontoHaben);
C:S
V:439
R:void
NOTE:
int nKontoSoll - Parserversion: 440
int nKontoHaben - Parserversion: 440
F:
N:AddJob
S:AddJob(int nStep, int nRecord, CDateTime Date1, CDateTime Date2, int nPriority, int nBearbeiter, CString strNoteJob, CString strNoteProcess, CDateTime DatePlanBegin, CDateTime DatePlanEnd, BOOL bCreateIfExistsAlso, int nMandant, int nBranch);
C:S
R:int
NOTE:
int nBranch - Parserversion: 436
F:
N:AddKassaMovement
S:AddKassaMovement(CMoney mMoney, CString strText, int nPaymentMethod, CMoney mStatusNew, BOOL bGetNewTransactionNumber, int nKostenart, int nEinnahmenart, int nKostenstelle, int nProjekt, int nRessource, int nMitarbeiter, CString strText2);
C:S
V:346
R:int
F:
N:ChangeJobStart
S:ChangeJobStart(int nStep, int nRecord, CDateTime DateBegin);
C:S
R:void
F:
N:ChangeJobEnd
S:ChangeJobEnd(int nStep, int nRecord, CDateTime DateEnd);
C:S
R:void
F:
N:ChangeJobPriority
S:ChangeJobPriority(int nStep, int nRecord, int nPriority);
C:S
R:void
F:
N:ChangeJobUser
S:ChangeJobUser(int nStep, int nRecord, int nUser);
C:S
R:void
F:
N:CheckRecordLimitForTable
S:CheckRecordLimitForTable(int nTable, int* pLimit, int* pActualCount);
C:S
R:BOOL
F:
N:ClearCachedTable
S:ClearCachedTable(int nTable);
C:S
R:void
F:
N:CopyValue
S:CopyValue(int nTable, int nColumn1, int nColumn2, int nRecord);
C:S
R:void
F:
N:CloseSQLConnection
S:CloseSQLConnection(int nConn);
C:S
R:void
F:
N:CreateProtocol
S:CreateProtocol(int nTable, int nRecord, CString strText, int nProtocolType, int nStatisticValue1, int nStatisticValue2, int nStatisticValue3);
C:S
V:428
R:void
F:
N:DeleteRecordSpecial
S:DeleteRecordSpecial(CString strTable, int nRecord, int nConn);
C:S
R:void
F:
N:DeleteRecordVariable
S:DeleteRecordVariable(CString strVarName, strVarName.Trim(); );
C:S
V:2005
R:void
F:
N:DoneJob
S:DoneJob(int nStep, int nRecord);
C:S
R:void
F:
N:DeleteJob
S:DeleteJob(int nStep, int nRecord);
C:S
R:void
F:
N:DeleteSubtableRecord
S:DeleteSubtableRecord(int nTable, int nColumn, int nRecord, int nSubtableRecord);
C:S
R:void
F:
N:DeleteSubtableRecords
S:DeleteSubtableRecords(int nTable, int nColumn, int nRecord, CString strRecords);
C:S
R:void
F:
N:DeleteRecords
S:DeleteRecords(int nTable, CString strWhere, BOOL bDontUseTrash);
C:S
R:void
NOTE:
BOOL bDontUseTrash - Parserversion: 2116
F:
N:DeleteOneRecord
S:DeleteOneRecord(int nTable, int nRecord, BOOL bDontUseTrash);
C:S
R:void
NOTE:
BOOL bDontUseTrash - Parserversion: 432
F:
N:DeleteMultipleRecords
S:DeleteMultipleRecords(int nTable, CString strRecords);
C:S
R:void
F:
N:ExtendSelect
S:ExtendSelect(CString strWhere, int nTable, BOOL bEigeneDS, BOOL bMandanten, BOOL bFilialen, BOOL bRecordPermissions);
C:S
V:431
R:void
F:
N:FindTable
S:FindTable(CString strTableName);
C:S
R:int
F:
N:GetActualJobList
S:GetActualJobList();
C:S
R:CTable
F:
N:GetActualJobMergeList
S:GetActualJobMergeList();
C:S
R:CTable
F:
N:GetActualJobRecordList
S:GetActualJobRecordList();
C:S
R:CTable
F:
N:GetActualRecordSelection
S:GetActualRecordSelection();
C:S
R:CTable
F:
N:GetSelectedRecords
S:GetSelectedRecords();
C:S
R:CString
F:
N:GetReport
S:GetReport(int nTable, CString strCondition, CString strShow, CDateTime DateBegin, CDateTime DateEnd, int nAggregateColumn, int nAggregateType, int nComputeColumn, int nComputeType, CString strFormula, int nNameColumn1, int nNameColumn2, int nSortType);
C:S
R:CTable
F:
N:GetCachedRecord
S:GetCachedRecord(int nTable, int nRecord);
C:S
R:CTable
F:
N:GetCachedTable
S:GetCachedTable(int nTable, int nColumn1, int nCondition1, int nColumn2, int nCondition2, BOOL bDontReload, BOOL bAllMandants);
C:S
R:CTable
F:
N:GetActualPrintTable
S:GetActualPrintTable();
C:S
R:CTable
F:
N:GetActualScriptNumber
S:GetActualScriptNumber();
C:S
R:int
F:
N:GetActualScriptName
S:GetActualScriptName();
C:S
R:CString
F:
N:GetActualBranchNumber
S:GetActualBranchNumber(BOOL bAlwaysUseBranchRestriction);
C:S
V:427
R:int
F:
N:GetActualRegistrationCode
S:GetActualRegistrationCode();
C:S
V:429
R:CString
F:
N:GetActualMandantNumber
S:GetActualMandantNumber();
C:S
R:int
F:
N:GetActualMandantNumber
S:GetActualMandantNumber(BOOL bAlwaysUseMandantRestriction);
C:S
R:int
F:
N:GetActualPersonalName
S:GetActualPersonalName();
C:S
R:CString
F:
N:GetActualPersonalNumber
S:GetActualPersonalNumber();
C:S
R:int
F:
N:GetActualUserName
S:GetActualUserName();
C:S
V:414
R:CString
F:
N:GetActualUserNumber
S:GetActualUserNumber();
C:S
R:int
F:
N:GetActualUserCurrency
S:GetActualUserCurrency();
C:S
R:int
F:
N:GetActualUserType
S:GetActualUserType();
C:S
R:int
F:
N:GetActualUserGroup
S:GetActualUserGroup();
C:S
R:int
F:
N:GetActualLockNumber
S:GetActualLockNumber();
C:S
R:int
F:
N:GetAutoNumber
S:GetAutoNumber(int nAutoNumberRecord, int nAutoNumberType, CString strAutoNumberText, CDateTime dtSpecialDate, BOOL bCountBackwards, int nSpecialMandant, BOOL bAutoNumberWithMandant);
C:S
R:CString
F:
N:GetAutoNumberForTable
S:GetAutoNumberForTable(int nTable, BOOL bCountBackwards, int nMandant1, int nAltNrCount, CDateTime dtDate);
C:S
R:CString
F:
N:GetAutoNumberSpecialRecord
S:GetAutoNumberSpecialRecord(int nAutoNumberTable, int nAutoNumberColumn, int nAutoNumberRecord, int nYear, int nStartNumber, int nConn, BOOL bUseConn, BOOL bCountBackwards);
C:S
R:CString
F:
N:GetColumnDatabaseName
S:GetColumnDatabaseName(int nTabNr, int nColumnNr);
C:S
V:472
R:CString
F:
N:GetIndividualisation
S:GetIndividualisation(int nIndividualisationType, int nElementId, int nType);
C:S
V:2100
R:CString
F:
N:GetLocaleParameterString
S:GetLocaleParameterString(CString strParameter);
C:S
R:CString
F:
N:GetMessageText
S:GetMessageText(int nMessage);
C:S
R:CString
F:
N:GetRegClientParameterString
S:GetRegClientParameterString(CString strParameter);
C:S
V:500
R:CString
F:
N:GetServerTime
S:GetServerTime();
C:S
R:CDateTime
F:
N:GetTableName
S:GetTableName(int nTabNr);
C:S
R:CString
F:
N:GetTextSelText
S:GetTextSelText(int nMessage);
C:S
R:CString
F:
N:GetTextModule
S:GetTextModule(m_bDontTranslate , int nTextModule, int nLanguage, BOOL bRichText);
C:S
R:void
F:
N:GTM
S:GTM(m_bDontTranslate , int nTextModule, int nLanguage, BOOL bRichText);
C:S
R:CString
F:
N:GetTextSelection
S:GetTextSelection(int nTextModule, int nLanguage);
C:S
R:void
F:
N:GTS
S:GTS(int nTextModule, int nLanguage);
C:S
R:CString
F:
N:GetLanguageText
S:GetLanguageText(int nTable, int nRecord, int nLanguage, int nColNormal, int nColTable);
C:S
R:CString
F:
N:GetOptionSTRING
S:GetOptionSTRING(int nOption, BOOL bDecrypt, BOOL* pExists);
C:S
R:CString
F:
N:GetOptionINT
S:GetOptionINT(int nOption, BOOL* pExists);
C:S
R:int
F:
N:GetOptionBOOL
S:GetOptionBOOL(int nOption, BOOL* pExists);
C:S
R:BOOL
F:
N:GetOptionDOUBLE
S:GetOptionDOUBLE(int nOption, BOOL* pExists);
C:S
R:double
F:
N:GetOptionDATE
S:GetOptionDATE(int nOption, BOOL* pExists);
C:S
R:CDateTime
F:
N:GetOptionMONEY
S:GetOptionMONEY(int nOption, BOOL* pExists);
C:S
R:CMoney
F:
N:GetOptionTABLE
S:GetOptionTABLE(int nOption, BOOL* pExists);
C:S
R:CTable
F:
N:GetCompanyValueSTRING
S:GetCompanyValueSTRING(int nOption);
C:S
R:CString
F:
N:GetCompanyValueBOOL
S:GetCompanyValueBOOL(int nOption);
C:S
R:BOOL
F:
N:GetCompanyValueINT
S:GetCompanyValueINT(int nOption);
C:S
R:int
F:
N:GetCompanyValueDOUBLE
S:GetCompanyValueDOUBLE(int nOption);
C:S
R:double
F:
N:GetCompanyValueDATE
S:GetCompanyValueDATE(int nOption);
C:S
R:CDateTime
F:
N:GetCompanyValueMONEY
S:GetCompanyValueMONEY(int nOption);
C:S
R:CMoney
F:
N:GetCompanyValueTABLE
S:GetCompanyValueTABLE(int nOption);
C:S
R:CTable
F:
N:GetRecordVariableBOOL
S:GetRecordVariableBOOL(CString strVarName);
C:S
R:BOOL
F:
N:GetRecordVariableSTRING
S:GetRecordVariableSTRING(CString strVarName);
C:S
R:CString
F:
N:GetRecordVariableINT
S:GetRecordVariableINT(CString strVarName);
C:S
R:int
F:
N:GetRecordVariableDOUBLE
S:GetRecordVariableDOUBLE(CString strVarName);
C:S
R:double
F:
N:GetRecordVariableDATE
S:GetRecordVariableDATE(CString strVarName);
C:S
R:CDateTime
F:
N:GetRecordVariableMONEY
S:GetRecordVariableMONEY(CString strVarName);
C:S
R:CMoney
F:
N:GetSysVar
S:GetSysVar(CString strName, BOOL bEncrypted);
C:S
R:CString
F:
N:HasUserRightsForTable
S:HasUserRightsForTable(int nTable);
C:S
R:BOOL
F:
N:HasUserRightsForTableRecord
S:HasUserRightsForTableRecord(int nTable, int nRecord);
C:S
R:BOOL
F:
N:InsertRecordSpecial
S:InsertRecordSpecial(CString strTable, CTable* pTable, int nRow, int nConn);
C:S
R:int
F:
N:InsertMultipleRecords
S:InsertMultipleRecords(int nTable, CTable* pTable);
C:S
R:int
F:
N:InsertRecord
S:InsertRecord(int nTable, CTable* pTable, BOOL bNoNewJob, BOOL bNoScripts);
C:S
R:int
F:
N:InsertRowFromRecord
S:InsertRowFromRecord(int nTable, CTable* pTable, int nRow, BOOL bNoNewJob, BOOL bNoScripts);
C:S
R:int
F:
N:InsertSubtableRecord
S:InsertSubtableRecord(int nTable, int nColumn, int nRecord, CTable* pTable, int nRow);
C:S
R:int
F:
N:InsertSubtableRecords
S:InsertSubtableRecords(int nTable, int nColumn, int nRecord, CTable* pTable);
C:S
R:CString
F:
N:InsertSyncData
S:InsertSyncData(int nTable, CTable* pTable, int nMessageType);
C:S
R:BOOL
F:
N:InsertDocument
S:InsertDocument(CString strFileName, CString strDocTitle);
C:S
R:int
F:
N:InsertPicture
S:InsertPicture(CString strFileName, CString strPictureTitle, int nTable, int nRecord);
C:S
R:int
F:
N:IsActualRecordChangeable
S:IsActualRecordChangeable();
C:S
R:BOOL
F:
N:IsActualRecordLocked
S:IsActualRecordLocked();
C:S
V:356
R:BOOL
F:
N:IsActionLocked
S:IsActionLocked(int nAction, int nRecord);
C:S
V:429
R:BOOL
F:
N:IsDialogDeletingForbidden
S:IsDialogDeletingForbidden(int nTable);
C:S
V:441
R:BOOL
F:
N:IsModuleActive
S:IsModuleActive(int nModule, BOOL bValue);
C:S
R:BOOL
F:
N:IsRecordDeletingForbidden
S:IsRecordDeletingForbidden(int nTable, int nRecord);
C:S
V:441
R:BOOL
F:
N:IsRecordLocked
S:IsRecordLocked(int nTable, int nRecord);
C:S
V:429
R:BOOL
F:
N:IsRKActive
S:IsRKActive();
C:S
V:446
R:BOOL
F:
N:LoadPOSMoney
S:LoadPOSMoney(int nKassa);
C:S
R:void
F:
N:LoadLinkedTable
S:LoadLinkedTable(CString strTableName, CTable* pResultTable);
C:S
R:CTable
F:
N:LockActualRecord
S:LockActualRecord();
C:S
R:void
F:
N:LockRecord
S:LockRecord(int nTable, int nRecord, BOOL bTryOnly);
C:S
R:int
F:
N:LockAction
S:LockAction(int nAction, int nRecord);
C:S
V:429
R:int
F:
N:LockJob
S:LockJob();
C:S
R:void
F:
N:UnlockJob
S:UnlockJob();
C:S
R:void
F:
N:MoveRecord
S:MoveRecord(int nTable, CString strMoveType, int nActRecordNr, CTable ResultTable);
C:S
R:CTable
F:
N:MailDownload
S:MailDownload(CString strServerPOP, CString strUsername, CString strPassword, CTable* pTable, CString* pstrError, BOOL bDeleteOnServer, int nPort, int nAuthMethod, BOOL* pbDownloadNotComplete);
C:S
R:BOOL
NOTE:
int nPort - Parserversion: 439
int nAuthMethod - Parserversion: 439
BOOL* pbDownloadNotComplete - Parserversion: 474
F:
N:MailDownloadAndSave
S:MailDownloadAndSave();
C:S
R:void
F:
N:MailGetPOP3UserName
S:MailGetPOP3UserName();
C:S
R:CString
F:
N:MailGetPOP3Password
S:MailGetPOP3Password();
C:S
R:CString
F:
N:MailGetPOP3Server
S:MailGetPOP3Server();
C:S
R:CString
F:
N:MailGetAllAccounts
S:MailGetAllAccounts();
C:S
R:CTable
F:
N:MailGetSMTPServer
S:MailGetSMTPServer();
C:S
R:CString
F:
N:MailGetFrom
S:MailGetFrom();
C:S
R:CString
F:
N:MailGetAttachments
S:MailGetAttachments(CString strBody, CTable* pTable);
C:S
R:void
F:
N:MailSend
S:MailSend(CString strSMTPServer, CString strFrom, CString strTo, CString strCC, CString strBCC, CString strSubject, CString strBody, CString strAttachments, CString* pstrError, BOOL bSaveInDatabase, BOOL bAutoLink, int nCustomerLink, int nDelivererLink, BOOL bHtml, int nProspectLink);
C:S
R:BOOL
F:
N:MailSerialLetter
S:MailSerialLetter(CString strBodyFile, CTable* pTags, int nMailsPerHour);
C:S
R:void
F:
N:OpenSQLConnection
S:OpenSQLConnection(int nType, CString strDBString, CString strUsername, CString strPassword, CString* strError);
C:S
R:int
F:
N:OptionExists
S:OptionExists(int nOption);
C:S
V:418
R:BOOL
F:
N:QpidGetAllMessagesAfter
S:QpidGetAllMessagesAfter(CString strUrl, CString strOptions, CString strQueue, CString strCondition);
C:S
R:CTable
F:
N:QpidSendMessage
S:QpidSendMessage(CString strUrl, CString strOptions, CString strQueue, CString strMessage);
C:S
R:BOOL
F:
N:ReloadActualRecord
S:ReloadActualRecord(BOOL bForceReload);
C:S
V:462
R:void
F:
N:RequestSaveAndUnlock
S:RequestSaveAndUnlock(int nTable, int nRecord);
C:S
R:void
F:
N:SavePOSMoney
S:SavePOSMoney(int nKassa, CMoney mNewCashAmount);
C:S
R:void
F:
N:SeeOnlyOwnRecordsInTable
S:SeeOnlyOwnRecordsInTable(int nTable);
C:S
R:BOOL
F:
N:SeeOnlyOwnRecords
S:SeeOnlyOwnRecords();
C:S
V:427
R:BOOL
F:
N:SeeOnlyMandantRecordsInTable
S:SeeOnlyMandantRecordsInTable(int nTable);
C:S
R:BOOL
F:
N:SeeOnlyMandantRecords
S:SeeOnlyMandantRecords();
C:S
V:427
R:BOOL
F:
N:SeeOnlyBranchRecordsInTable
S:SeeOnlyBranchRecordsInTable(int nTable);
C:S
V:427
R:BOOL
F:
N:SeeOnlyBranchRecords
S:SeeOnlyBranchRecords();
C:S
V:427
R:BOOL
F:
N:Select
S:Select(int nTable, CString strWhere, CString strShow, BOOL bShowInactives, int nCacheTimeSeconds, int nTop, CString strOrderBy, BOOL bOrderDesc, BOOL bOnlyDeleted);
C:S
R:CTable
F:
N:SelectRecord
S:SelectRecord(int nTable, int nRecord);
C:S
R:CTable
F:
N:SelectRecordSpecial
S:SelectRecordSpecial(CString strTable, CString strShow, CString strWhere, int nConn);
C:S
R:CTable
F:
N:SelectMultipleRecords
S:SelectMultipleRecords(int nTable, CString strRecords, CString strShow);
C:S
R:CTable
F:
N:SelectMultipleCachedRecords
S:SelectMultipleCachedRecords(int nTable, CString strRecords);
C:S
R:CTable
F:
N:SearchRecords
S:SearchRecords(int nTable, CString strTitle, BOOL bDontShowResultDialog, int nSearchMandant, int nSearchBranch, CString strStaticText);
C:S
R:CTable
NOTE:
int nSearchBranch - Parserversion: 427
F:
N:SearchPrintScriptNumber
S:SearchPrintScriptNumber(CString strPrintScriptName);
C:S
R:int
F:
N:SendSQL
S:SendSQL(CString strSQL, int nConn, BOOL bUseActiveDatabase, BOOL bVarDataIsString);
C:S
R:CTable
F:
N:SendSyncMessages
S:SendSyncMessages(BOOL bDontDeleteMessages);
C:S
R:BOOL
F:
N:SetAutoNumber
S:SetAutoNumber(int nAutoNumberRecord, int nYear, int nNewValue, int nMandant);
C:S
R:void
F:
N:SetAutoNumberForTable
S:SetAutoNumberForTable(int nTable, int nYear, int nNewValue, int nMandant);
C:S
R:void
F:
N:SetAutoNumberSpecialRecord
S:SetAutoNumberSpecialRecord(int nTable, int nColumn, int nRecord, int nYear, int nNewValue);
C:S
R:void
F:
N:SetActualRecordUnchangeable
S:SetActualRecordUnchangeable();
C:S
R:void
F:
N:SetActualRecordChangeable
S:SetActualRecordChangeable();
C:S
R:void
F:
N:SetCachedRecord
S:SetCachedRecord(int nTable, int nRecord, CTable* pTable);
C:S
R:void
F:
N:SetLocaleParameterString
S:SetLocaleParameterString(CString strParameter, CString strValue);
C:S
R:void
F:
N:SetOptionSTRING
S:SetOptionSTRING(int nOption, CString strValue);
C:S
R:void
F:
N:SetOptionINT
S:SetOptionINT(int nOption, int nValue);
C:S
R:void
F:
N:SetOptionDOUBLE
S:SetOptionDOUBLE(int nOption, double dValue);
C:S
R:void
F:
N:SetOptionDATE
S:SetOptionDATE(int nOption, CDateTime dtValue);
C:S
R:void
F:
N:SetOptionMONEY
S:SetOptionMONEY(int nOption, CMoney mValue);
C:S
R:void
F:
N:SetOptionTABLE
S:SetOptionTABLE(int nOption, CTable* pTable);
C:S
R:void
F:
N:SetRecordVariableBOOL
S:SetRecordVariableBOOL(CString strVarName, BOOL bValue);
C:S
R:void
F:
N:SetRecordVariableSTRING
S:SetRecordVariableSTRING(CString strVarName, CString strValue);
C:S
R:void
F:
N:SetRecordVariableINT
S:SetRecordVariableINT(CString strVarName, int nValue);
C:S
R:void
F:
N:SetRecordVariableDOUBLE
S:SetRecordVariableDOUBLE(CString strVarName, double dValue);
C:S
R:void
F:
N:SetRecordVariableDATE
S:SetRecordVariableDATE(CString strVarName, CDateTime dtValue);
C:S
R:void
F:
N:SetRecordVariableMONEY
S:SetRecordVariableMONEY(CString strVarName, CMoney mValue);
C:S
R:void
F:
N:SetSysVar
S:SetSysVar(CString strName, CString strValue, BOOL bEncrypted);
C:S
R:BOOL
F:
N:StartLogAllSql
S:StartLogAllSql();
C:S
V:482
R:void
F:
N:StopLogAllSql
S:StopLogAllSql();
C:S
V:482
R:void
F:
N:StartProcessJobs
S:StartProcessJobs();
C:S
R:int
F:
N:SubstractMONEY
S:SubstractMONEY(int nTable, int nColumn, int nRecord, CMoney Money1, Money Money2);
C:S
R:void
F:
N:SubstractDATETIME
S:SubstractDATETIME(int nTable, int nColumn, int nRecord, CDateTime Date1);
C:S
R:void
F:
N:SubstractDATE
S:SubstractDATE(int nTable, int nColumn, int nRecord, CDateTime Date1);
C:S
R:void
F:
N:SubstractDOUBLE
S:SubstractDOUBLE(int nTable, int nColumn, int nRecord, double dValue);
C:S
R:void
F:
N:SubstractINT
S:SubstractINT(int nTable, int nColumn, int nRecord, int nValue);
C:S
R:void
F:
N:SubstractCALCULATION
S:SubstractCALCULATION(int nTable, int nColumn, int nRecord, CString strCalculation);
C:S
R:void
F:
N:SetTEXT
S:SetTEXT(int nTable, int nColumn, int nRecord, CString strValue, BOOL bDontLock);
C:S
R:void
F:
N:SetSTRING
S:SetSTRING(int nTable, int nColumn, int nRecord, CString strValue, BOOL bDontLock);
C:S
R:void
F:
N:SetTABLE
S:SetTABLE(int nTable, int nColumn, int nRecord, CTable* pTable);
C:S
R:void
F:
N:SetMONEY
S:SetMONEY(int nTable, int nColumn, int nRecord, CMoney Money1, Money Money2, BOOL bDontLock);
C:S
R:void
F:
N:SetDATETIME
S:SetDATETIME(int nTable, int nColumn, int nRecord, CDateTime Date1, BOOL bDontLock);
C:S
R:void
F:
N:SetDATE
S:SetDATE(int nTable, int nColumn, int nRecord, CDateTime Date1, BOOL bDontLock);
C:S
R:void
F:
N:SetDOUBLE
S:SetDOUBLE(int nTable, int nColumn, int nRecord, double dValue, BOOL bDontLock);
C:S
R:void
F:
N:SetINT
S:SetINT(int nTable, int nColumn, int nRecord, int nValue, BOOL bDontLock);
C:S
R:void
F:
N:SetCALCULATION
S:SetCALCULATION(int nTable, int nColumn, int nRecord, CString strCalculation);
C:S
R:void
F:
N:SetActualPersonalNumber
S:SetActualPersonalNumber(int nPersonalNumber);
C:S
R:void
F:
N:TableExists
S:TableExists(int nTabNr);
C:S
R:BOOL
F:
N:UpdateMultipleRecords
S:UpdateMultipleRecords(int nTable, CTable* ptTable, CString strUpdateColumns);
C:S
V:2003
R:void
F:
N:UpdateRecordSpecial
S:UpdateRecordSpecial(CString strTable, CTable* pTable, int nRow, int nConn);
C:S
R:void
F:
N:UpdateRecord
S:UpdateRecord(int nTable, int nRecord, CTable* pTable, int nSourceRow, BOOL bUpdateCache, BOOL bDontLock, BOOL bTryInsert, BOOL bForcedUpdate, int nTryLockInSeconds, BOOL bUndelete);
C:S
R:void
NOTE:
BOOL bForcedUpdate - Parserversion: 419
int nTryLockInSeconds - Parserversion: 473
BOOL bUndelete - Parserversion: 485
F:
N:UpdateActualRecord
S:UpdateActualRecord();
C:S
R:void
F:
N:UnlockActualRecord
S:UnlockActualRecord();
C:S
R:void
F:
N:UnlockRecord
S:UnlockRecord(int nTable, int nRecord, int nLockNumber);
C:S
R:void
F:
N:UnlockAction
S:UnlockAction(int nAction, int nRecord, int nLockNumber);
C:S
V:429
R:void
F:
N:UpdateActualJob
S:UpdateActualJob();
C:S
R:void
F:
N:WaitForDataBaseAllRequestsServed
S:WaitForDataBaseAllRequestsServed();
C:S
R:void

F:
N:CompareDate
S:CompareDate(CDateTime Date);
C:CDateTime
R:int
F:
N:Compare
S:Compare(CDateTime Date);
C:CDateTime
R:int
F:
N:CopyDate
S:CopyDate(CDateTime Date2);
C:CDateTime
R:void
F:
N:CopyTime
S:CopyTime(CDateTime Date2);
C:CDateTime
R:void
F:
N:DayPlus
S:DayPlus(int nValue);
C:CDateTime
R:void
F:
N:DayMinus
S:DayMinus(int nValue);
C:CDateTime
R:void
F:
N:GetYear
S:GetYear();
C:CDateTime
R:int
F:
N:GetMonth
S:GetMonth();
C:CDateTime
R:int
F:
N:GetDay
S:GetDay();
C:CDateTime
R:int
F:
N:GetHour
S:GetHour();
C:CDateTime
R:int
F:
N:GetMinute
S:GetMinute();
C:CDateTime
R:int
F:
N:GetSecond
S:GetSecond();
C:CDateTime
R:int
F:
N:GetTotalYears
S:GetTotalYears();
C:CDateTime
R:double
F:
N:GetTotalMonths
S:GetTotalMonths();
C:CDateTime
R:double
F:
N:GetTotalDays
S:GetTotalDays();
C:CDateTime
R:double
F:
N:GetTotalHours
S:GetTotalHours();
C:CDateTime
R:double
F:
N:GetTotalMinutes
S:GetTotalMinutes();
C:CDateTime
R:double
F:
N:GetTotalSeconds
S:GetTotalSeconds();
C:CDateTime
R:double
F:
N:GetCalendarWeek
S:GetCalendarWeek();
C:CDateTime
R:int
F:
N:GetWeekdayNumber
S:GetWeekdayNumber();
C:CDateTime
R:int
F:
N:GetWeekday
S:GetWeekday(int nBracket);
C:CDateTime
R:CString
F:
N:GetMonthDays
S:GetMonthDays();
C:CDateTime
R:int
F:
N:GetMonthWorkDays
S:GetMonthWorkDays(int nDayStart, int nDayEnd, BOOL bCountSaturday);
C:CDateTime
R:int
F:
N:GetWorkDays
S:GetWorkDays(CDateTime dtEnd, BOOL bCountSaturday);
C:CDateTime
R:int
F:
N:GetDaysSince1900
S:GetDaysSince1900();
C:CDateTime
R:int
F:
N:GetDateString
S:GetDateString(CString strValue, BOOL bSetNoBlank, BOOL bSetZeroForBlank, BOOL bShowZeroDate, int nLanguage);
C:CDateTime
R:CString
F:
N:GetTimeString
S:GetTimeString(CString strValue);
C:CDateTime
R:CString
F:
N:GetDayDifference
S:GetDayDifference(CDateTime Date);
C:CDateTime
R:int
F:
N:GetMonthName
S:GetMonthName(int nType, int nLanguage);
C:CDateTime
R:CString
F:
N:GetSecondsDifference
S:GetSecondsDifference(CDateTime Date);
C:CDateTime
R:int
F:
N:GetTimestamp
S:GetTimestamp(BOOL bDateOnly, BOOL bConvertToUTC, BOOL bRFC2445Variant, CString* pstrTimezone, BOOL bIgnoreTimeOffset);
C:CDateTime
R:CString
NOTE:
BOOL bIgnoreTimeOffset - Parserversion: 507
F:
N:GetWeekdayName
S:GetWeekdayName(int nType, int nLanguage);
C:CDateTime
R:CString
F:
N:GetUnixTime
S:GetUnixTime(*nDataType );
C:CDateTime
V:2008
R:void
F:
N:HourPlus
S:HourPlus(int nValue);
C:CDateTime
R:void
F:
N:HourMinus
S:HourMinus(int nValue);
C:CDateTime
R:void
F:
N:IsDateValid
S:IsDateValid();
C:CDateTime
R:BOOL
F:
N:IsSet
S:IsSet();
C:CDateTime
R:BOOL
F:
N:IsLeapYear
S:IsLeapYear();
C:CDateTime
R:BOOL
F:
N:IsHoliday
S:IsHoliday(BOOL* pIsHalfHoliday, CDateTime* pTimeHalfHoliday, int nCountry);
C:CDateTime
R:BOOL
NOTE:
int nCountry - Parserversion: 2111
F:
N:LocalToUtc
S:LocalToUtc();
C:CDateTime
R:void
F:
N:MonthPlus
S:MonthPlus(int nValue);
C:CDateTime
R:void
F:
N:MonthMinus
S:MonthMinus(int nValue);
C:CDateTime
R:void
F:
N:MinutePlus
S:MinutePlus(int nValue);
C:CDateTime
R:void
F:
N:MinuteMinus
S:MinuteMinus(int nValue);
C:CDateTime
R:void
F:
N:SetYear
S:SetYear(int nYear);
C:CDateTime
R:void
F:
N:SetMonth
S:SetMonth(int nMonth);
C:CDateTime
R:void
F:
N:SetDay
S:SetDay(int nDay);
C:CDateTime
R:void
F:
N:SetHour
S:SetHour(int nHour);
C:CDateTime
R:void
F:
N:SetMinute
S:SetMinute(int nMinute);
C:CDateTime
R:void
F:
N:SetSecond
S:SetSecond(int nSecond);
C:CDateTime
R:void
F:
N:SetTotalDays
S:SetTotalDays(double dDays);
C:CDateTime
R:void
F:
N:SetTotalHours
S:SetTotalHours(double dHours);
C:CDateTime
R:void
F:
N:SetActTime
S:SetActTime();
C:CDateTime
R:void
F:
N:SetActDateOnly
S:SetActDateOnly();
C:CDateTime
R:void
F:
N:SetActTimeOnly
S:SetActTimeOnly();
C:CDateTime
R:void
F:
N:SetCalendarWeek
S:SetCalendarWeek(int nYear, int nWeek);
C:CDateTime
R:void
F:
N:SetNoTime
S:SetNoTime();
C:CDateTime
R:void
F:
N:SetToTime
S:SetToTime(CDateTime Date);
C:CDateTime
R:void
F:
N:SetTimestamp
S:SetTimestamp(CString strTimestamp, BOOL bRFC2445Variant);
C:CDateTime
R:BOOL
F:
N:SetToTimeFromString
S:SetToTimeFromString(CString strValue);
C:CDateTime
R:void
F:
N:SetTimeUnixEpoch
S:SetTimeUnixEpoch(int64_t nSeconds);
C:CDateTime
V:2007
R:void
F:
N:SecondPlus
S:SecondPlus(int nValue);
C:CDateTime
R:void
F:
N:SecondMinus
S:SecondMinus(int nValue);
C:CDateTime
R:void
F:
N:UtcToLocal
S:UtcToLocal();
C:CDateTime
R:void
F:
N:YearPlus
S:YearPlus(int nValue);
C:CDateTime
R:void
F:
N:YearMinus
S:YearMinus(int nValue);
C:CDateTime
R:void

F:
N:AskUser
S:AskUser(CString strText, CString strDefinedAnswerOption);
C:D
R:BOOL
NOTE:
CString strDefinedAnswerOption - Parserversion: 413
F:
N:Beep
S:Beep(int nHertz, int nMilliseconds);
C:D
R:void
F:
N:CancelLastUserCommand
S:CancelLastUserCommand();
C:D
R:void
F:
N:ClearWaitCursor
S:ClearWaitCursor();
C:D
R:void
F:
N:CloseApplication
S:CloseApplication();
C:D
R:void
F:
N:ChangeBackgroundColor
S:ChangeBackgroundColor(int nRed, int nGreen, int nBlue);
C:D
R:void
F:
N:ChangeBackgroundColorPage0
S:ChangeBackgroundColorPage0(int nRed, int nGreen, int nBlue);
C:D
R:void
F:
N:ChangeElementPosition
S:ChangeElementPosition(int nElement, CString strXPos, CString strYPos, CString strWidth, CString strHeight, int nNamePosition, BOOL bRepaint);
C:D
R:void
F:
N:ChangeElementNextTab
S:ChangeElementNextTab(int nElement, int nNextElement);
C:D
R:void
F:
N:ChangeElementParameter1
S:ChangeElementParameter1(int nElement, double dParameter);
C:D
R:void
F:
N:ChangeElementScript
S:ChangeElementScript(int nElement, int nScript);
C:D
R:void
F:
N:ChangeElementScriptOnChangeComplete
S:ChangeElementScriptOnChangeComplete(int nElement, int nScript);
C:D
R:void
F:
N:ChangeElementStaticName
S:ChangeElementStaticName(int nElement, CString strName);
C:D
R:void
F:
N:ChangeElementStaticNameFromDataParameter
S:ChangeElementStaticNameFromDataParameter(int nDataParameter1, int nDataParameter2, CString strName);
C:D
R:void
F:
N:ClearDashboard
S:ClearDashboard();
C:D
R:void
F:
N:CreateFormatingTableColumns
S:CreateFormatingTableColumns(CTable* pTable1);
C:D
R:void
F:
N:DataViewerShow
S:DataViewerShow(int nDataViewer, BOOL bOnlyForActiveDialog, CString strTitle, BOOL bEnableEdit, CTable* pTable, int nXPos, int nYPos, int nWidth, int nHeight, int nColorColumn, int nColorColumnData, int nScriptOnDblClick, BOOL bDontClearActiveRow);
C:D
R:void
F:
N:DataViewerKill
S:DataViewerKill(int nDataViewer);
C:D
R:void
F:
N:DataViewerSetPos
S:DataViewerSetPos(int nDataViewer, int nXPos, int nYPos, int nWidth, int nHeight);
C:D
R:void
F:
N:DataViewerUpdate
S:DataViewerUpdate(int nDataViewer, CTable* pTable, BOOL bDontClearActiveRow);
C:D
R:void
F:
N:DataViewerIsVisible
S:DataViewerIsVisible(int nDataViewer);
C:D
R:BOOL
F:
N:DataViewerGetTable
S:DataViewerGetTable(int nDataViewer, CTable* pTable);
C:D
R:void
F:
N:DisableEdit
S:DisableEdit(int nFirstElement, int nLastElement);
C:D
R:void
F:
N:EditAppointmentRecurrence
S:EditAppointmentRecurrence();
C:D
R:int
F:
N:EditInMask
S:EditInMask(CString strTitle, CString strStaticText, CTable* pDataTable, CTable* pDialogDesign, CTable* pListDesign, int nXPos, int nYPos, int nWidth, int nHeight, BOOL bRemoveNewline, CString strScripts, CTable tButtons);
C:D
R:int
F:
N:ElementEditLinkedRecord
S:ElementEditLinkedRecord(int nElementNumber);
C:D
R:void
F:
N:ErrorMessage
S:ErrorMessage(CString strErrMsg);
C:D
R:void
F:
N:EnableEdit
S:EnableEdit(int nFirstElement, int nLastElement);
C:D
R:void
F:
N:EditRecord
S:EditRecord(int nTable, int nRecord, BOOL bNoAutoSave);
C:D
R:void
F:
N:FindElementFromDataParameter
S:FindElementFromDataParameter(int nDataParam1, int nDataParam2);
C:D
R:int
F:
N:FindElement
S:FindElement(CString strElementName);
C:D
R:int
F:
N:FindElementLinkedTable
S:FindElementLinkedTable(int nTable);
C:D
R:int
F:
N:GetContent
S:GetContent(int nElementId);
C:D
R:void
F:
N:GetActualColorBackground
S:GetActualColorBackground(int* pnRed, int* pnGreen, int* pnBlue);
C:D
R:void
F:
N:GetActualColorBackgroundPage0
S:GetActualColorBackgroundPage0(int* pnRed, int* pnGreen, int* pnBlue);
C:D
R:void
F:
N:GetStandardColorBackground
S:GetStandardColorBackground(int* pnRed, int* pnGreen, int* pnBlue);
C:D
R:void
F:
N:GetElementPosition
S:GetElementPosition(int nElement, CString* pstrXPos, CString* pstrYPos, CString* pstrWidth, CString* pstrHeight, CString* pstrName, int* pnNamePosition, int* pnNextTab, int* pnVisible);
C:D
R:void
F:
N:GetTableElementText
S:GetTableElementText(int nElement, int nCol, int nRow);
C:D
R:CString
F:
N:GetTableSubtableText
S:GetTableSubtableText(int nElement, int nCol, int nRow, int nSubCol);
C:D
R:CString
F:
N:GetTable
S:GetTable(int nElement);
C:D
R:CTable
F:
N:GetTableReplaceLink
S:GetTableReplaceLink(int nElement, BOOL bShowAllColumns);
C:D
R:CTable
F:
N:GetElementColumn
S:GetElementColumn(int nElement, int nColumn);
C:D
R:void
F:
N:GetActivePage
S:GetActivePage();
C:D
R:int
F:
N:GetDateBox
S:GetDateBox(CString strTitle, CString strStatic, CString strEditTitle, CDateTime Default, BOOL bCancelButton, BOOL* pCancelled);
C:D
R:CDateTime
F:
N:GetDate2Box
S:GetDate2Box(CString strTitle, CString strStatic, CString strEditTitle1, CString strEditTitle2, CDateTime* pDate1, CDateTime* pDate2, BOOL bCancelButton, int nDateType1, int nDateType2);
C:D
R:int
F:
N:GetDate3Box
S:GetDate3Box(CString strTitle, CString strStatic, CString strEditTitle1, CString strEditTitle2, CString strEditTitle3, CDateTime* pDate1, CDateTime* pDate2, CDateTime* pDate3, BOOL bCancelButton);
C:D
R:int
F:
N:GetDateCal
S:GetDateCal(CString strTitle, CString strStatic, CString strEditTitle1, CDateTime* pDate1, BOOL bCancelButton, BOOL bDontShowDateString);
C:D
R:int
F:
N:GetDate2Cal
S:GetDate2Cal(CString strTitle, CString strStatic, CString strEditTitle1, CString strEditTitle2, CDateTime* pDate1, CDateTime* pDate2, BOOL bCancelButton, BOOL bDontShowDateString);
C:D
R:int
F:
N:GetDate3Cal
S:GetDate3Cal(CString strTitle, CString strStatic, CString strEditTitle1, CString strEditTitle2, CString strEditTitle3, CDateTime* pDate1, CDateTime* pDate2, CDateTime* pDate3, BOOL bCancelButton, BOOL bDontShowDateString);
C:D
R:int
F:
N:GetDate4Cal
S:GetDate4Cal(CString strTitle, CString strStatic, CString strEditTitle1, CString strEditTitle2, CString strEditTitle3, CString strEditTitle4, CDateTime* pDate1, CDateTime* pDate2, CDateTime* pDate3, CDateTime* pDate4, BOOL bCancelButton, BOOL bDontShowDateString);
C:D
R:int
F:
N:GetDoubleNumber
S:GetDoubleNumber(CString strTitle, CString strStatic, CString strName1, double* pNumber1, BOOL bCancelButton);
C:D
R:int
F:
N:GetDoubleNumber2
S:GetDoubleNumber2(CString strTitle, CString strStatic, CString strName1, CString strName2, double* pNumber1, double* pNumber2, BOOL bCancelButton);
C:D
R:int
F:
N:GetDoubleNumber3
S:GetDoubleNumber3(CString strTitle, CString strStatic, CString strName1, CString strName2, CString strName3, double* pNumber1, double* pNumber2, double* pNumber3, BOOL bCancelButton);
C:D
V:483
R:int
F:
N:GetIntNumber
S:GetIntNumber(CString strTitle, CString strStatic, CString strName1, int* pNumber1, BOOL bCancelButton);
C:D
R:int
F:
N:GetIntNumber2
S:GetIntNumber2(CString strTitle, CString strStatic, CString strName1, CString strName2, int* pNumber1, int* pNumber2, BOOL bCancelButton);
C:D
R:int
F:
N:GetTimeBox
S:GetTimeBox(CString strTitle, CString strStatic, CString strEditTitle, CDateTime Default, BOOL bCancelButton, BOOL* pCancelled);
C:D
R:CDateTime
F:
N:GetPercentBox
S:GetPercentBox(CString strTitle, CString strStatic, CString strEditTitle, double dDefault, BOOL bCancelButton, BOOL* pCancelled);
C:D
R:double
NOTE:
BOOL bCancelButton - Parserversion: 457
BOOL* pCancelled - Parserversion: 457
F:
N:GetDateTimeBox
S:GetDateTimeBox(CString strTitle, CString strStatic, CString strEditTitle, CDateTime Default, BOOL bCancelButton, BOOL* pCancelled);
C:D
R:CDateTime
F:
N:GetMoneyBox
S:GetMoneyBox(CString strTitle, CString strStatic, CString strEditTitle, CMoney mDefault, BOOL bCancelButton, BOOL* pCancelled);
C:D
R:CMoney
NOTE:
BOOL bCancelButton - Parserversion: 362
BOOL* pCancelled - Parserversion: 362
F:
N:GetMoney2Box
S:GetMoney2Box(CString strTitle, CString strStatic, CString strEditTitle1, CString strEditTitle2, CMoney* pMoney1, CMoney* pMoney2);
C:D
R:int
F:
N:GetMoney3Box
S:GetMoney3Box(CString strTitle, CString strStatic, CString strEditTitle1, CString strEditTitle2, CString strEditTitle3, CMoney* pMoney1, CMoney* pMoney2, CMoney* pMoney3);
C:D
R:int
F:
N:GetMoneyPercentBox
S:GetMoneyPercentBox(CString strTitle, CString strStatic, CString strEditTitle1, CString strEditTitle2, CMoney* pMoney1, double* pPercent1, BOOL bCancelButton);
C:D
R:int
F:
N:GetRadioSelectionTable
S:GetRadioSelectionTable(CString strTitle, BOOL bCancelButton, int nWidth, int nHeight, CString strStatic, CTable* pTable);
C:D
R:int
F:
N:GetRadioSelectionText
S:GetRadioSelectionText(CString strTitle, BOOL bCancelButton, int nWidth, int nHeight, CString strStatic, CString strText1, CString strText2, CString strText3, CString strText4, CString strText5, int nDefaultRow);
C:D
R:int
F:
N:GetTextBox
S:GetTextBox(CString strDialogTitle, CString strEditLabel, CString strInitialValue, CString strStatic, BOOL bCancelButton, BOOL bPassword, int nRed, int nGreen, int nBlue, int nWidth, int nHeight, int nStaticFontSize, int nTitleFontSize, BOOL bShowCapsLockWarning);
C:D
R:CString
F:
N:GetTextBoxHtml
S:GetTextBoxHtml(CString strTitle, CString strName1, CString strText, CString strStatic, BOOL bCancelButton, int nWidth, int nHeight, int nStaticFontSize, int nTitleFontSize, BOOL bReadOnly, int nXPos, int nYPos);
C:D
R:CString
F:
N:GetTextBoxRich
S:GetTextBoxRich(CString strTitle, CString strNameRich, CString strTextRich, BOOL bCancelButton, int nWidth, int nHeight, int nXPos, int nYPos, BOOL bShowPlainTextField, CString strNamePlain, CString* strTextPlain);
C:D
R:CString
F:
N:GetTextBoxMultiline
S:GetTextBoxMultiline(CString strTitle, CString strName, CString strTextMultiline, CString strStatic, BOOL bCancelButton, int nWidth, int nHeight, int nStaticFontSize, int nTitleFontSize, BOOL bReadOnly, int nXPos, int nYPos);
C:D
R:CString
F:
N:GetText2Box
S:GetText2Box(CString strTitle, CString strStatic, CString strEditTitle1, CString strEditTitle2, CString* pstrText1, CString* pstrText2, BOOL bCancelButton, int nWidth, int nHeight, int nStaticFontSize, int nTitleFontSize, BOOL bShowCapsLockWarning);
C:D
R:int
F:
N:GetText3Box
S:GetText3Box(CString strTitle, CString strStatic, CString strEditTitle1, CString strEditTitle2, CString strEditTitle3, CString* pstrText1, CString* pstrText2, CString* pstrText3, int nWidth, int nHeight, int nStaticFontSize, int nTitleFontSize, BOOL bShowCapsLockWarning);
C:D
R:int
F:
N:GetCheckSelection
S:GetCheckSelection(CString strTitle, CTable* pTable, CString strColumns, CString strWidth, CString strStatic, BOOL bCheckTrue, BOOL bCancelButton, int nWidth, int nHeight, BOOL bModifyOriginalTable, CString strOKButtonLabel, CString strCancelButtonLabel, int nCheckCol, CString strNoEditCols, int nColorColumns, BOOL bDontAllowSort, CString strSearchColumns);
C:D
R:CTable
NOTE:
CString strNoEditCols - Parserversion: 417
int nColorColumns - Parserversion: 444
BOOL bDontAllowSort - Parserversion: 451
CString strSearchColumns - Parserversion: 484
F:
N:GetListSelection
S:GetListSelection(CString strTitle, CString strName1, CTable* pTable, BOOL bCancelButton, CString strStatic, int nWidth, int nHeight, BOOL bEnableEdit, int nNoEditCol, BOOL bEnableSort, int nShowStatistics, BOOL bDontDBlClickOK, BOOL bPrintPortrait, int nColorColumns, int nPrintTextHeight, int nRowHeight, BOOL bShowWeekdays, int nTreeItemLinkCol, CTable* pFormattingTable, BOOL bDontShowPrintListButton, int nListEditOnChangeScript, BOOL bForbidAddRemoveRow, BOOL bToggleCheckButton, CString strNoEditCols, CString strSearchColumns);
C:D
R:int
NOTE:
BOOL bToggleCheckButton - Parserversion: 471
CString strNoEditCols - Parserversion: 471
CString strSearchColumns - Parserversion: 484
F:
N:GetListEdit
S:GetListEdit(CString strTitle, CString strName1, CTable* pTable, CString strStatic, int nWidth, int nHeight, int nNoEditCol, int nOnChangeTextNr, BOOL bDontDblClkOK, CString strOnChangeText, BOOL bPrintPortrait, int nPrintTextHeight, BOOL bNoCancelButton, int nRowHeight, BOOL bShowWeekdays, int nShowStatistics, BOOL bAllowSort, BOOL bDefaultButton, int nColorColumns, BOOL bDontShowPrintListButton, int nListEditOnChangeScript, BOOL bForbidAddRemoveRow, CString strNoEditCols, CString strSearchColumns, CTable* pFormattingTable, CTable* ptElementParameters);
C:D
R:int
NOTE:
CString strNoEditCols - Parserversion: 415
CString strSearchColumns - Parserversion: 484
F:
N:GetTableSelection
S:GetTableSelection(CString strTitle, CTable* pTable1, CTable* pTable2, CString strShowCols, CString strStatic1, CString strStatic2);
C:D
R:int
F:
N:GetComboSelection
S:GetComboSelection(CString strTitle, CString strName1, CString strShowColumns, CTable* pTable, CString strStatic, BOOL bCancel, BOOL bShowListNever1);
C:D
R:int
F:
N:GetComboSelection2
S:GetComboSelection2(CString strTitle, CString strName1, CString strName2, CString strShowColumns, CString strShowColumns2, CTable* pTable, CTable* pTable2, CString strStatic, BOOL bCancel, BOOL bShowListAlways1, BOOL bShowListAlways2);
C:D
R:int
F:
N:GetComboSelection_Date_Text
S:GetComboSelection_Date_Text(CString strTitle, CString strName1, CString strName2, CString strName3, CString strShowColumns, CTable* pTable, CDateTime* pDate, CString* pstrText, BOOL bCancel, int nDropDownHeight, BOOL bSort, CString strStatic, BOOL bShowListAlways);
C:D
R:int
F:
N:GetComboSelection_Date_Text2
S:GetComboSelection_Date_Text2(CString strTitle, CString strName1, CString strName2, CString strName3, CString strName4, CString strShowColumns, CTable* pTable, CDateTime* pDate, CString* pstrText1, CString* pstrText2, BOOL bCancel, int nDropDownHeight, BOOL bSort, CString strStatic, BOOL bShowListAlways);
C:D
R:int
F:
N:GetLinkSelection
S:GetLinkSelection(CString strTitle, CString strName1, int nTable, CString strStatic, BOOL bCancel, BOOL bSearchLink1, int nDefaultValue);
C:D
R:int
F:
N:GetLinkSelection2
S:GetLinkSelection2(CString strTitle, CString strName1, int nTable1, int* pnValue1, CString strName2, int nTable2, int* pnValue2, CString strStatic, BOOL bCancel, BOOL bSearchLink1, BOOL bSearchLink2);
C:D
R:int
F:
N:GetLinkSelection3
S:GetLinkSelection3(CString strTitle, CString strName1, int nTable1, int* pnValue1, CString strName2, int nTable2, int* pnValue2, CString strName3, int nTable3, int* pnValue3, CString strStatic, BOOL bCancel, BOOL bSearchLink1, BOOL bSearchLink2, BOOL bSearchLink3);
C:D
R:int
F:
N:GetSearchLinkSelection
S:GetSearchLinkSelection(CString strTitle, CString strName1, int nTable1, CString strStatic, BOOL bCancel, int nDefault);
C:D
R:int
F:
N:GetSelectedRecordNumber
S:GetSelectedRecordNumber(int nElement);
C:D
R:int
F:
N:GetLastChangedListViewRow
S:GetLastChangedListViewRow(int nListElement);
C:D
R:int
F:
N:HasContentChanged
S:HasContentChanged();
C:D
R:BOOL
F:
N:HasElementChanged
S:HasElementChanged(int nElement);
C:D
R:BOOL
F:
N:HasDataChanged
S:HasDataChanged(int nCol);
C:D
R:BOOL
F:
N:HideActualDialog
S:HideActualDialog();
C:D
R:void
F:
N:HideElement
S:HideElement(int nElement);
C:D
R:void
F:
N:HideElementFromDataParameter
S:HideElementFromDataParameter(int nDataParameter1, int nDataParameter2);
C:D
R:void
F:
N:HTMLViewerShow
S:HTMLViewerShow(int nDataViewer, CString strTitle, CString strHTMLFile, CString strHTMLString, int nXPos, int nYPos, int nWidth, int nHeight, BOOL bKeepOldPosition);
C:D
R:void
F:
N:HTMLViewerKill
S:HTMLViewerKill(int nDataViewer);
C:D
R:void
F:
N:HTMLViewerSetPos
S:HTMLViewerSetPos(int nDataViewer, int nXPos, int nYPos, int nWidth, int nHeight);
C:D
R:void
F:
N:HTMLViewerUpdate
S:HTMLViewerUpdate(int nDataViewer, CString strHTMLFile, CString strHTMLString);
C:D
R:void
F:
N:HTMLViewerIsVisible
S:HTMLViewerIsVisible(int nDataViewer);
C:D
R:BOOL
F:
N:IsElementHidden
S:IsElementHidden(int nElement);
C:D
R:BOOL
F:
N:IsElementHiddenFromDataParameter
S:IsElementHiddenFromDataParameter(int nDataParameter1, int nDataParameter2);
C:D
R:BOOL
F:
N:MarkAllRowsForUpdate
S:MarkAllRowsForUpdate(int nElement);
C:D
R:void
F:
N:Message
S:Message(CString strMessage);
C:D
R:void
F:
N:MessageBoxOK
S:MessageBoxOK(CString strMessage);
C:D
R:void
F:
N:MoveAllElements
S:MoveAllElements();
C:D
R:void
F:
N:MyDialogAddMessageHandler
S:MyDialogAddMessageHandler(int nElement, int nMessage, int nScript, double dValue2);
C:D
R:void
F:
N:MyDialogInitialise
S:MyDialogInitialise(BOOL bScrollable);
C:D
R:void
F:
N:MyDialogDestroy
S:MyDialogDestroy();
C:D
R:void
F:
N:MyDialogSetActiveRowForElement
S:MyDialogSetActiveRowForElement(int nElement, int nRow);
C:D
V:2107
R:void
F:
N:MyDialogSetCurrency
S:MyDialogSetCurrency(int nCurrency);
C:D
R:void
F:
N:MyDialogSetFontHeight
S:MyDialogSetFontHeight(int nFontHeight);
C:D
V:2107
R:void
F:
N:MyDialogSetTitle
S:MyDialogSetTitle(CString strTitle);
C:D
R:void
F:
N:MyDialogSetStatic
S:MyDialogSetStatic(CString strStatic);
C:D
R:void
F:
N:MyDialogSetFirstFocus
S:MyDialogSetFirstFocus(int nElement);
C:D
R:void
F:
N:MyDialogHideElement
S:MyDialogHideElement(int nElement);
C:D
R:void
F:
N:MyDialogShowElement
S:MyDialogShowElement(int nElement);
C:D
R:void
F:
N:MyDialogSetElementWidth
S:MyDialogSetElementWidth(int nElement, CString strWidth);
C:D
R:void
F:
N:MyDialogSetInternalParameter
S:MyDialogSetInternalParameter(int nElement, int nParameterNumber, int nInternalParameter);
C:D
V:478
R:void
F:
N:MyDialogUpdateElement
S:MyDialogUpdateElement(int nElement);
C:D
R:void
F:
N:MyDialogUpdateAllElements
S:MyDialogUpdateAllElements(int nStartElement, int nEndElement);
C:D
R:void
F:
N:MyDialogRewriteElement
S:MyDialogRewriteElement(int nElement);
C:D
R:void
F:
N:MyDialogRewriteAllElements
S:MyDialogRewriteAllElements(int nStartElement, int nEndElement);
C:D
R:void
F:
N:MyDialogAddCombo
S:MyDialogAddCombo(CString strName, CString strXPos, CString strYPos, CString strWidth, CString strShowColumns, int nDropDownHeight, BOOL bSort, BOOL bShowListAlways, int nNamePosition);
C:D
R:int
F:
N:MyDialogAddElement
S:MyDialogAddElement(int nType, CString strName, CString strXPos, CString strYPos, CString strWidth, CString strHeight, BOOL bReadOnly, int nNamePosition, double dParameter1, double dParameter2, double dParameter3, CString strParameter4, CString strParameter5, CString strParameter6, int nDataParameter1, int nDataParameter2, BOOL bReturnSimulatesOkButton, CString strParameter7, int nParameter8, int nParameter9, int nParameter10);
C:D
R:int
F:
N:MyDialogAddText
S:MyDialogAddText(int nType, CString strName, CString strXPos, CString strYPos, CString strWidth, CString strHeight, BOOL bReadOnly, double dParameter1);
C:D
R:int
F:
N:MyDialogDoModal
S:MyDialogDoModal(BOOL bCancelButton, BOOL bNoDefaultButton, int nLeft, int nTop, int nWidth, int nHeight);
C:D
R:int
F:
N:NavigateToRecord
S:NavigateToRecord();
C:D
R:void
F:
N:NavigateToDialog
S:NavigateToDialog();
C:D
R:void
F:
N:NavigateToSelector
S:NavigateToSelector(int nSelectorNumber, int nFilterValue1, int nFilterValue2, int nFilterValue3, int nFilterValue4, int nFilterValue5, int nFilterValue6);
C:D
V:404
R:void
NOTE:
int nFilterValue4 - Parserversion: 423
int nFilterValue5 - Parserversion: 423
int nFilterValue6 - Parserversion: 423
F:
N:NavigateToJob
S:NavigateToJob(int nProcess, int nJobRecord, BOOL bForceReload);
C:D
R:void
F:
N:NavigateToTimeTable
S:NavigateToTimeTable(int nTimeTableId, CDateTime dtStart, CDateTime dtEnd, int nShowType, CString strRessourceSelection1, CString strRessourceSelection2, CString strRessourceSelection3, BOOL bHighlightFilter, CString strEntrySelection1, CString strEntrySelection2, CString strEntrySelection3, CString strEntrySelection4, CString strEntrySelection5, CString strEntrySelection6, CString strEntrySelection7, CString strEntrySelection8, CString strEntrySelection9, BOOL bSetCondition1, BOOL bSetCondition2, BOOL bSetCondition3, BOOL bSetCondition4, BOOL bSetCondition5);
C:D
V:477
R:void
F:
N:OpenMailSendDialog
S:OpenMailSendDialog(CString strTo, CString strSubject, CString strBody, CString strCC, CString strBCC, CString strAttachmentList, BOOL bAutoLink, int nCustomerLink, int nDelivererLink, int nProspectLink, CString strFrom);
C:D
R:void
NOTE:
CString strFrom - Parserversion: 481
F:
N:ParentSimulateChangedMessage
S:ParentSimulateChangedMessage(int nDataCol);
C:D
R:void
F:
N:ProgressBarShow
S:ProgressBarShow(int nSize, BOOL bSmooth);
C:D
R:void
F:
N:ProgressBarHide
S:ProgressBarHide();
C:D
R:void
F:
N:ProgressBarSetText
S:ProgressBarSetText(CString strText);
C:D
R:void
F:
N:ProgressBarSetRange
S:ProgressBarSetRange(int nRange);
C:D
R:void
F:
N:ProgressBarSetPos
S:ProgressBarSetPos(int nPos);
C:D
R:void
F:
N:ProgressBarStepIt
S:ProgressBarStepIt();
C:D
R:void
F:
N:ProgressBarStartMarquee
S:ProgressBarStartMarquee();
C:D
R:void
F:
N:ProgressBarStopMarquee
S:ProgressBarStopMarquee();
C:D
R:void
F:
N:RecordListUpdate
S:RecordListUpdate();
C:D
R:void
F:
N:RecordListReload
S:RecordListReload();
C:D
R:void
F:
N:RefreshAllElements
S:RefreshAllElements();
C:D
R:void
F:
N:RefreshElement
S:RefreshElement(int nElement, BOOL bDontLooseEditFocus);
C:D
R:void
F:
N:ReportViewerShow
S:ReportViewerShow(CString strTitle, CTable* pTable, double dConstantValue, int nColumnWidth, int nColumnGap, int nAggregateGap, CTable* pTable2, CTable* pTable3, double dConstantValue2, BOOL bHideCharts, BOOL bDontHideDashboard);
C:D
R:void
F:
N:ReportViewerHide
S:ReportViewerHide();
C:D
R:void
F:
N:RewriteAllElements
S:RewriteAllElements();
C:D
R:void
F:
N:RewriteElement
S:RewriteElement(int nElement);
C:D
R:void
F:
N:RewriteExternalVariables
S:RewriteExternalVariables();
C:D
R:void
F:
N:SendChangedMessage
S:SendChangedMessage();
C:D
R:void
F:
N:SetActiveRowForElement
S:SetActiveRowForElement(int nElement, int nRow);
C:D
V:404
R:void
F:
N:SetDashboardReport
S:SetDashboardReport(CString strReportTitle, CTable* ptTableData, int nType, CString strXPos, CString strYPos, CString strWidth, CString strHeight, BOOL bConvertTable, int nNameCol1, int nNameCol2, int nValueCol);
C:D
R:void
F:
N:SetHTMLContentOnMainPage
S:SetHTMLContentOnMainPage(CString strValue, BOOL bDontSaveAsMainPage);
C:D
R:void
NOTE:
BOOL bDontSaveAsMainPage - Parserversion: 480
F:
N:SetReadOnly
S:SetReadOnly(int nElement);
C:D
V:494
R:void
F:
N:SetResultValue
S:SetResultValue(int nValue);
C:D
R:void
F:
N:SetResultValueText1
S:SetResultValueText1(CString strValue);
C:D
R:void
F:
N:SetResultValueText2
S:SetResultValueText2(CString strValue);
C:D
R:void
F:
N:SetResultValueText3
S:SetResultValueText3(CString strValue);
C:D
R:void
F:
N:SetResultValueTable1
S:SetResultValueTable1(CTable* pTable);
C:D
R:void
F:
N:SetResultValueTable2
S:SetResultValueTable2(CTable* pTable);
C:D
R:void
F:
N:SetResultValueTable3
S:SetResultValueTable3(CTable* pTable);
C:D
R:void
F:
N:SetResultValueVariable
S:SetResultValueVariable();
C:D
V:2009
R:void
F:
N:SetFocus
S:SetFocus(int nElement);
C:D
R:void
F:
N:ShowLinkTable
S:ShowLinkTable(CString strTitle, int nTable, CString strLinks, BOOL bEdit, CString strCols, CString strColWidths);
C:D
R:void
F:
N:ShowElement
S:ShowElement(int nElement);
C:D
R:void
F:
N:ShowElementFromDataParameter
S:ShowElementFromDataParameter(int nDataParameter1, int nDataParameter2);
C:D
R:void
F:
N:ShowActiveElements
S:ShowActiveElements(int nElement);
C:D
R:void
F:
N:ShowLinkedMail
S:ShowLinkedMail(int nMailID, int nCustomer, int nDeliverer);
C:D
V:470
R:void
F:
N:ShowTooltip
S:ShowTooltip(CString strContent, CString strPosition);
C:D
V:461
R:void
F:
N:SetWaitCursor
S:SetWaitCursor();
C:D
R:void
F:
N:SimulateChangedMessage
S:SimulateChangedMessage(int nElement);
C:D
R:void
F:
N:SetChanged
S:SetChanged(BOOL bChanged);
C:D
R:void
F:
N:SetElementChanged
S:SetElementChanged(int nElement);
C:D
R:void
F:
N:SetDataChanged
S:SetDataChanged(int nCol);
C:D
R:void
F:
N:SetContent
S:SetContent(int nElement, auto Data);
C:D
R:void
NOTE:
'auto' type means that any type is accepted here and is automatically recognized by the script engine.
F:
N:SetListViewElement
S:SetListViewElement(int nElement, int nCol, int nRow, CString strValue, BOOL bRecalculate, int nActRecNr);
C:D
R:void
F:
N:SetListViewElementCurrencyValues
S:SetListViewElementCurrencyValues(int nElement, int nCurrency1, double dCurrencyValue1, int nCurrency2, double dCurrencyValue2);
C:D
V:2103
R:void
F:
N:SetMoneyElementCurrencyValues
S:SetMoneyElementCurrencyValues(int nElement, int nCurrency1, double dCurrencyValue1, int nCurrency2, double dCurrencyValue2);
C:D
V:2106
R:void
F:
N:SetTable
S:SetTable(int nElement, CTable* pTable);
C:D
R:void
F:
N:SetTableSelection
S:SetTableSelection(int nElement, int nSelection);
C:D
R:void
F:
N:SaveAllTableChanges
S:SaveAllTableChanges(BOOL bUnlock);
C:D
R:void
NOTE:
BOOL bUnlock - Parserversion: 358
F:
N:SaveTableChanges
S:SaveTableChanges(int nElement, BOOL bDontLooseEditFocus);
C:D
R:void
F:
N:SetBackgroundText
S:SetBackgroundText(CString strBackgroundText);
C:D
V:2102
R:void
F:
N:SetColorBackground
S:SetColorBackground(int nRed, int nGreen, int nBlue);
C:D
R:void
F:
N:SetColorElements
S:SetColorElements(int nRed, int nGreen, int nBlue);
C:D
R:void
F:
N:SetColorStaticText
S:SetColorStaticText(int nRed, int nGreen, int nBlue);
C:D
R:void
F:
N:SetColorElementsText
S:SetColorElementsText(int nRed, int nGreen, int nBlue);
C:D
R:void
F:
N:SetFontWeight
S:SetFontWeight(int nWeight);
C:D
R:void
F:
N:SetFontHeight
S:SetFontHeight(int nHeight);
C:D
R:void
F:
N:SetFontPitchAndFamily
S:SetFontPitchAndFamily(int nPitchAndFamily);
C:D
R:void
F:
N:SetFontFacename
S:SetFontFacename(CString strFacename);
C:D
R:void
F:
N:SetLeading
S:SetLeading(double dLeading);
C:D
R:void
F:
N:SetBorder
S:SetBorder(int nBorder);
C:D
R:void
F:
N:SetTitle
S:SetTitle(CString strTitle);
C:D
R:void
F:
N:SetPageBorder
S:SetPageBorder(int nLeft, int nTop, int nRight, int nBottom);
C:D
R:void
F:
N:SetCurrency
S:SetCurrency(int nCurrency);
C:D
R:void
F:
N:SetSelection
S:SetSelection(int nElement, int nSelection);
C:D
R:void
F:
N:StatusMessage
S:StatusMessage(CString strText, int nStatusMessagePosition);
C:D
R:void
F:
N:SetDefaultButton
S:SetDefaultButton(int nElement);
C:D
R:void
F:
N:SetTimeTableSelections
S:SetTimeTableSelections(int nTimeTableId, CString strSelectedEntries1, CString strSelectedEntries2, CString strSelectedEntries3);
C:D
V:479
R:void
F:
N:SpecialDialogSetStaticText1
S:SpecialDialogSetStaticText1(CString strContent);
C:D
R:void
F:
N:SpecialDialogSetStaticText2
S:SpecialDialogSetStaticText2(CString strContent);
C:D
R:void
F:
N:SpecialDialogSetStaticText3
S:SpecialDialogSetStaticText3(CString strContent);
C:D
R:void
F:
N:SpecialDialogSetStaticText4
S:SpecialDialogSetStaticText4(CString strContent);
C:D
R:void
F:
N:SpecialDialogSetStaticText5
S:SpecialDialogSetStaticText5(CString strContent);
C:D
R:void
F:
N:SpecialDialogGetStaticText1
S:SpecialDialogGetStaticText1();
C:D
R:CString
F:
N:SpecialDialogGetStaticText2
S:SpecialDialogGetStaticText2();
C:D
R:CString
F:
N:SpecialDialogGetStaticText3
S:SpecialDialogGetStaticText3();
C:D
R:CString
F:
N:SpecialDialogGetStaticText4
S:SpecialDialogGetStaticText4();
C:D
R:CString
F:
N:SpecialDialogGetStaticText5
S:SpecialDialogGetStaticText5();
C:D
R:CString
F:
N:SpecialDialogSetPictureRecord
S:SpecialDialogSetPictureRecord(int nPictureRecordNumber);
C:D
R:void
F:
N:SpecialDialogGetPictureRecord
S:SpecialDialogGetPictureRecord();
C:D
R:int
F:
N:SpecialDialogGetTable
S:SpecialDialogGetTable(int nInternalTable);
C:D
R:CTable
F:
N:SpecialDialogSetTable
S:SpecialDialogSetTable(int nInternalTable);
C:D
R:void
F:
N:UnsetReadOnly
S:UnsetReadOnly(int nElement);
C:D
V:494
R:void
F:
N:UpdateAllElements
S:UpdateAllElements();
C:D
R:void
F:
N:UpdateElement
S:UpdateElement(int nElement);
C:D
R:void
F:
N:ViewRecord
S:ViewRecord(int nTable, int nRecord);
C:D
R:void

F:
N:Close
S:Close(int nFile, CloseFileImpl(nFile); );
C:F
R:void
F:
N:Copy
S:Copy(CString strSourceFile, CString strTargetFile, BOOL bOK);
C:F
R:BOOL
F:
N:CopyDir
S:CopyDir(CString strSourceDir, CString strTargetDir);
C:F
R:BOOL
F:
N:CreateDirectory
S:CreateDirectory(CString strDirectory);
C:F
R:BOOL
F:
N:FindFile
S:FindFile(CString strPath);
C:F
R:BOOL
F:
N:FindFileNextFile
S:FindFileNextFile();
C:F
R:BOOL
F:
N:FindFileGetFileName
S:FindFileGetFileName();
C:F
R:CString
F:
N:FindFileGetFilePath
S:FindFileGetFilePath();
C:F
R:CString
F:
N:FindFileClose
S:FindFileClose();
C:F
R:void
F:
N:Flush
S:Flush(int nFile);
C:F
R:void
F:
N:GetApplicationPath
S:GetApplicationPath();
C:F
R:CString
F:
N:GetDocumentsPath
S:GetDocumentsPath();
C:F
R:CString
F:
N:GetScanExportPath
S:GetScanExportPath();
C:F
R:CString
F:
N:GetLocalDataPath
S:GetLocalDataPath();
C:F
R:CString
F:
N:GetTempDirPath
S:GetTempDirPath();
C:F
V:2113
R:CString
F:
N:GetTempFilePath
S:GetTempFilePath(CString strPrefix, int nUnique);
C:F
V:2113
R:CString
F:
N:GetFileAttribute
S:GetFileAttribute(int nFile);
C:F
R:int
F:
N:GetFileName
S:GetFileName(int nFile);
C:F
R:CString
F:
N:GetFilePath
S:GetFilePath(int nFile);
C:F
R:CString
F:
N:GetFileTitle
S:GetFileTitle(int nFile);
C:F
R:CString
F:
N:GetFileSize
S:GetFileSize(int nFile);
C:F
R:int
F:
N:GetLength
S:GetLength(int nFile);
C:F
R:int
F:
N:GetFileNameFromUser
S:GetFileNameFromUser(CString strDefault, BOOL bOpenFile, BOOL bAllowMultipleSelection, CString strDefaultPath, CString strFilter, CString strExtension);
C:F
R:CString
NOTE:
CString strFilter - Parserversion: 363
CString strExtension - Parserversion: 363
F:
N:GetPathFromUser
S:GetPathFromUser(CString strTitle, CString strInitialFolder);
C:F
R:CString
F:
N:GetPosition
S:GetPosition(int nFile);
C:F
R:int
F:
N:GetTimeCreated
S:GetTimeCreated(int nFile);
C:F
R:CDateTime
F:
N:GetTimeLastAccessed
S:GetTimeLastAccessed(int nFile);
C:F
R:CDateTime
F:
N:GetTimeLastModified
S:GetTimeLastModified(int nFile);
C:F
R:CDateTime
F:
N:IsDirectory
S:IsDirectory(CString strPath);
C:F
V:2104
R:BOOL
F:
N:LockRange
S:LockRange(int nFile, int nPos, int nCount);
C:F
R:BOOL
F:
N:Move
S:Move(CString strExistingFileName, CString strNewFileName, BOOL bReplaceExisting);
C:F
V:453
R:BOOL
F:
N:Open
S:Open(CString strFile, int nAccessMode, int nCreateMode, int nShareMode, int nByteMode);
C:F
R:int
F:
N:OpenDirectory
S:OpenDirectory(CString strDirectory, CString strType);
C:F
R:BOOL
F:
N:ReadTotalFile
S:ReadTotalFile(int nFile, CString* pstrLine);
C:F
R:BOOL
F:
N:ReadOneByteFromFile
S:ReadOneByteFromFile(int nFile, int* pnValue);
C:F
R:BOOL
F:
N:ReadOneCharFromFile
S:ReadOneCharFromFile(int nFile, CString* pstrLine);
C:F
R:BOOL
F:
N:ReadOneLineFromFile
S:ReadOneLineFromFile(int nFile, CString* pstrLine);
C:F
R:BOOL
F:
N:Remove
S:Remove(CString strFile1);
C:F
R:BOOL
F:
N:RemoveDirectory
S:RemoveDirectory(CString strDir, BOOL bForced, BOOL bOK);
C:F
R:BOOL
NOTE:
BOOL bForced - Parserversion: 453
F:
N:Rename
S:Rename(CString strFile1, CString strFile2);
C:F
R:BOOL
F:
N:Seek
S:Seek(int nFile, int nPos, int nFrom);
C:F
R:int
F:
N:SeekToBegin
S:SeekToBegin(int nFile);
C:F
R:void
F:
N:SeekToEnd
S:SeekToEnd(int nFile);
C:F
R:int
F:
N:SetFileAttribute
S:SetFileAttribute(CString strFile, int nAttribute);
C:F
R:void
F:
N:SetLength
S:SetLength(int nFile, int nFileLength);
C:F
R:BOOL
F:
N:UnlockRange
S:UnlockRange(int nFile, int nPos, int nCount);
C:F
R:BOOL
F:
N:WriteText
S:WriteText(int nFile, CString strText, int nCodePage);
C:F
R:void

F:
N:ActualisePlace
S:ActualisePlace(int nArtikel, double dMenge, CString strPlaceIn, CString strPlaceOut, CTable* ptPlaces, CTable* ptBelegungen, double dArtikelProPalette, int nKunde, int nAuftrag, int nProjekt, int nBewegungsart, CString strBemerkungBewegung);
C:H
R:void
F:
N:AddAutoFillData
S:AddAutoFillData(CString strValue1, CString strValue2, CString strValue3, CString strValue4, CString strValue5);
C:H
R:void
F:
N:AddCustomTextTrace
S:AddCustomTextTrace(CString strTag, CString strText);
C:H
V:467
R:void
F:
N:AddLearningTaskCompletion
S:AddLearningTaskCompletion(int nScriptID, int nDialogID, CString strCommand, int nRecordID);
C:H
R:void
F:
N:AddProcessStep
S:AddProcessStep(CTable* ptProcess, CTable* ptStep);
C:H
R:void
F:
N:AddToTableRowMONEY
S:AddToTableRowMONEY(CTable* ptTable, int nCol, int nSearchValue, int nValueCol, CMoney mValue);
C:H
R:void
F:
N:AddToTableRowINT
S:AddToTableRowINT(CTable* ptTable, int nCol, int nSearchValue, int nValueCol, int nValue);
C:H
R:void
F:
N:AddToTableRowDOUBLE
S:AddToTableRowDOUBLE(CTable* ptTable, int nCol, int nSearchValue, int nValueCol, double dValue);
C:H
R:void
F:
N:AddToTableRowDATE
S:AddToTableRowDATE(CTable* ptTable, int nCol, int nSearchValue, int nValueCol, CDateTime dtValue);
C:H
R:void
F:
N:ANSI2UTF8
S:ANSI2UTF8(CString* pstrAnsi);
C:H
R:CString
F:
N:AsignTseStartTransaction
S:AsignTseStartTransaction(CString strBonId, CString strKassenId, int* pnTransactionNumber, CString* pstrTransactionGuid, CDateTime* pdtLogTime, CString* pstrSerialNumber, int* pnSignatureCounter, CString* pstrSignatureValue);
C:H
V:498
R:int
NOTE:
CString* pstrTransactionGuid - Parserversion: 502
F:
N:AsignTseFinishTransaction
S:AsignTseFinishTransaction(CString strBonId, CString strKassenId, int nTransactionNumber, CString strTransactionGuid, CString strProcessData, CString strProcessType, CString strAdditionalData, CDateTime* pdtLogTime, int* pnSignatureCounter, CString* pstrSignatureValue, CTable* ptDataTable, BOOL bCalculationBrutto);
C:H
V:498
R:int
NOTE:
CString strTransactionGuid - Parserversion: 502
CTable* ptDataTable - Parserversion: 503
BOOL bCalculationBrutto - Parserversion: 514
F:
N:AsignTseExportDataFilteredPeriodClientID
S:AsignTseExportDataFilteredPeriodClientID(CString strFileName, CString strKassenID, CDateTime dtStart, CDateTime dtEnd, int nMaxRecords);
C:H
V:509
R:BOOL
F:
N:BillingFindMietvertraege
S:BillingFindMietvertraege(CTable* ptGespraeche, CTable* ptID, CTable* ptIDRange);
C:H
R:void
F:
N:BillingFindArtikel
S:BillingFindArtikel(CTable* ptGespraeche, CTable* ptZonen);
C:H
R:void
F:
N:BillingFilterLocalAndSpecials
S:BillingFilterLocalAndSpecials(CTable* ptGespraeche, int nArtikelLokal, int nZoneLokal);
C:H
R:void
F:
N:BillingUpdateMietvertraege
S:BillingUpdateMietvertraege(CTable* ptGespraeche);
C:H
R:int
F:
N:BinaryStringToInt
S:BinaryStringToInt(CString strText);
C:H
V:2112
R:int
F:
N:CalculateAppointmentMatrix
S:CalculateAppointmentMatrix(CString strMitarbeiter, CDateTime dtDateBegin, CDateTime dtDateEnd, CDateTime dtTimeBegin, CDateTime dtTimeEnd, CDateTime dtDauer, CTable* pResult);
C:H
R:void
F:
N:CalculateNumericValue
S:CalculateNumericValue(CString strCalculation);
C:H
R:double
F:
N:CalculatePlaceMoney
S:CalculatePlaceMoney(CDateTime today, CDateTime dtLastCalc, CTable* tLagerTemp, double dActMenge, CTable* tPositionenHilfeTemp, int nArtikel, double dArtikelProPalette, CTable* tTagesTabelle, CMoney mPalettengebuehrKunde, double* pdPalettenanzahlGesamt, *pdPalettenanzahlGesamt );
C:H
R:void
F:
N:CalculateWorkdays
S:CalculateWorkdays(CDateTime DateBegin, CDateTime DateEnd, int nWorkTimeModel, CTable* ptWorkTimeModels, double* pdHours, *pdHours );
C:H
R:double
F:
N:CalculateWorkTimeMonthList
S:CalculateWorkTimeMonthList(CDateTime DateBegin, CDateTime DateEnd, CTable* ptZeiterfassung, CTable* ptAbwesenheit, int nWorkTimeModel, CTable* ptWorkTimeModels, BOOL bUrlaubAddHours, BOOL bUrlaubShowHoursInsteadOfDays, BOOL bShowFutureHours, int nRoundInterval, BOOL bRoundOutput, BOOL bWorseRoundingForEmployee, BOOL bFeiertagAddHours);
C:H
R:CTable
F:
N:CheckIfPeriodeIsOpenFIBU
S:CheckIfPeriodeIsOpenFIBU(int nMandant, int nYear, int nPeriode);
C:H
V:489
R:BOOL
F:
N:CheckIfPeriodeIsOpenDateFIBU
S:CheckIfPeriodeIsOpenDateFIBU(int nMandant, CDateTime dtDate);
C:H
V:489
R:BOOL
F:
N:CloseTcpIpConnection
S:CloseTcpIpConnection(int nErrorCode);
C:H
V:2110
R:int
F:
N:CreateGUID
S:CreateGUID();
C:H
V:487
R:CString
F:
N:CreateMaterialStocklist
S:CreateMaterialStocklist(int nArtikelID, double dMenge, CString* strError);
C:H
R:CTable
F:
N:CreateSignature
S:CreateSignature(CString strFilePath);
C:H
V:407
R:CString
F:
N:CreateZipArchive
S:CreateZipArchive(CString strZipFilePath, CString strFilesToAdd);
C:H
V:405
R:int
F:
N:CloseWordDocument
S:CloseWordDocument(CString strFilename);
C:H
R:void
F:
N:CalculateWorkTimeFaktorRealValue
S:CalculateWorkTimeFaktorRealValue(CDateTime TimeBegin, CDateTime TimeEnd, int nWorkTimeModel, CTable* ptWorkTimeModels);
C:H
R:CDateTime
F:
N:CalculateWorkTimeStatus
S:CalculateWorkTimeStatus(CTable* ptMitarbeiter, CTable* ptZeiterfassung, int nLastCalcCol, int nTimeStatusCol, int nWorkTimeCol, int nDailyWorkTableCol, int nDailyWorkTimeCol, int nMACol, int nTypeCol, int nType2Col, int nTimeCol, int nGebuchtCol, int nType2Del, CDateTime Today);
C:H
R:void
F:
N:CheckPlacesIn
S:CheckPlacesIn(int nArtikel, double dMenge, CString strPlaceIn, CTable* ptPlaces, CTable* ptBelegungen, double dArtikelProPalette);
C:H
R:BOOL
F:
N:CheckPlacesOut
S:CheckPlacesOut(int nArtikel, double dMenge, CString strPlaceOut, CTable* ptPlaces, CTable* ptBelegungen, double dArtikelProPalette);
C:H
R:BOOL
F:
N:CheckPriceRowActive
S:CheckPriceRowActive(CTable* pPriceTable, int nRow, int nColLink1, int nLink1, int nColLink2, int nLink2, int nColDate1, int nColDate2, CDateTime Date1, int nColMenge, double dMenge);
C:H
R:BOOL
F:
N:CheckRegistrationRights
S:CheckRegistrationRights(CString strCode, BOOL bShowMessage);
C:H
V:403
R:CString
F:
N:Ceil
S:Ceil(double dValue1);
C:H
R:double
F:
N:CalculateCheckSum
S:CalculateCheckSum(CString strCode, int nModulo, int nWeight1, int nWeight2);
C:H
R:CString
F:
N:CalculateStock
S:CalculateStock(int nArtikel, double* pdSumVorbestellt, double* pdSumNachbestellt, double* pdSumVorbestellt2, double* pdSumNachbestellt2, BOOL bUseCache, int nLager);
C:H
R:void
F:
N:CalculateStockArticleList
S:CalculateStockArticleList(CTable* pTable, CString strLager);
C:H
V:454
R:int
F:
N:ClipboardGetString
S:ClipboardGetString(CString strResult);
C:H
R:CString
F:
N:ClipboardSetString
S:ClipboardSetString(CString strText);
C:H
R:void
F:
N:CloseSQLConnection
S:CloseSQLConnection(int nConn);
C:H
R:void
F:
N:ConvertRecurrencyToRRule
S:ConvertRecurrencyToRRule(CString strRecurrencyRule, CDateTime dtRecurrencyEnd);
C:H
V:353
R:CString
F:
N:ConvertRRuleToRecurrency
S:ConvertRRuleToRecurrency(CDateTime dtRecurrentStart, CDateTime dtRecurrentEnd, CString* pstrRfc2445RRule, CDateTime* pdtRecurrencyEnd);
C:H
V:353
R:CString
F:
N:CopyPositionsFromVoucher
S:CopyPositionsFromVoucher(int nTable, int nRecord, BOOL bReturning, CTable* pPositions);
C:H
V:342
R:BOOL
NOTE:
CTable* pPositions - Parserversion: 344
F:
N:CreateNewJobDialog
S:CreateNewJobDialog(int nDialog, int nActRecord, int nDefaultReviser, BOOL bOnlySeenProcesses);
C:H
R:int
F:
N:CTableToXML
S:CTableToXML(CTable* pTable, BOOL bUseId);
C:H
R:CString
F:
N:ConvertPdfToTiff
S:ConvertPdfToTiff(CString strPdfFilename, CString strOutputPath, BOOL bConvertAllPages, int nResolution);
C:H
R:CTable
F:
N:DetermineSuppliers
S:DetermineSuppliers(CTable* pArtikel, int nBestimmungsart);
C:H
R:CTable
F:
N:DeleteDoublesFromDatabase
S:DeleteDoublesFromDatabase(int nDeleteTable, CTable* pDeleteTable, CTable* pCheckTable, int nDeleteCol1, int nDeleteCol2, int nDeleteCol3, int nDeleteCol4, int nDeleteCol5, int nCheckCol1, int nCheckCol2, int nCheckCol3, int nCheckCol4, int nCheckCol5, BOOL bSameTable);
C:H
R:int
F:
N:DebugStart
S:DebugStart();
C:H
R:void
F:
N:DebugStartCondition
S:DebugStartCondition(BOOL bCondition);
C:H
R:void
F:
N:DebugStartVariableChange
S:DebugStartVariableChange();
C:H
R:void
F:
N:DebugStop
S:DebugStop();
C:H
R:void
F:
N:EAN13CalculateCheckSum
S:EAN13CalculateCheckSum(CString strCode);
C:H
R:CString
F:
N:EAN13CheckCheckSum
S:EAN13CheckCheckSum(CString strCode);
C:H
R:BOOL
F:
N:EditScript
S:EditScript(int nScript);
C:H
R:void
F:
N:EmbedZugferdXmlIntoPdf
S:EmbedZugferdXmlIntoPdf(CString strInvoiceXmlPath, CString strInvoicePdfPath, CString strOutputPdfPath, CString strAdditionalOptions);
C:H
V:3004
R:BOOL
F:
N:ExtractZugferdXmlFromPdf
S:ExtractZugferdXmlFromPdf(CString strZugferdPdfPath, CString strOutputXmlPath);
C:H
V:3005
R:BOOL
F:
N:EnsureValidFilename
S:EnsureValidFilename(CString* pstrFilename, CString strReplacementChar);
C:H
V:421
R:BOOL
F:
N:ExecuteScript
S:ExecuteScript(int nScript, CString strParam);
C:H
V:352
R:void
F:
N:ExportPictureFile
S:ExportPictureFile(CTable* pTable, CString strTargetFile, int nRow);
C:H
R:BOOL
F:
N:ExtractAllFormFieldsFromWord
S:ExtractAllFormFieldsFromWord(CString strFilename, BOOL bSaveFirst);
C:H
R:CTable
F:
N:ExtractFullTextFromWord
S:ExtractFullTextFromWord(CString strFilename, BOOL bSaveFirst);
C:H
R:CString
F:
N:ExtractAllPicturesFromWord
S:ExtractAllPicturesFromWord(CString strFilename, CTable* pPictures);
C:H
R:void
F:
N:ExtractFirstLine
S:ExtractFirstLine(CString* pstrText);
C:H
R:CString
F:
N:ExtractFirstElementFromLine
S:ExtractFirstElementFromLine(CString* pstrText, CString strSeparator);
C:H
R:CString
F:
N:ExtendOldRegistration
S:ExtendOldRegistration(CString strOldCode, CDateTime dtNewDate);
C:H
V:403
R:CString
F:
N:FindFinancialYearFIBU
S:FindFinancialYearFIBU(int nMandant, CDateTime dtDate);
C:H
V:489
R:int
F:
N:FindPeriodeFIBU
S:FindPeriodeFIBU(CDateTime dtDate);
C:H
V:489
R:int
F:
N:Floor
S:Floor(double dValue1);
C:H
R:double
F:
N:FTPLogOnToServer
S:FTPLogOnToServer(CString strServerName, CString strUserName, CString strPassword, int nPortNumber);
C:H
R:BOOL
F:
N:FTPLogOffServer
S:FTPLogOffServer();
C:H
R:void
F:
N:FTPMoveFile
S:FTPMoveFile(CString strRemotePath, CString strLocalPath, BOOL bGet, BOOL bPassiv);
C:H
R:BOOL
F:
N:FTPList
S:FTPList(CString strPath, BOOL bPassiv);
C:H
R:CTable
F:
N:FTPCwd
S:FTPCwd(CString strPath);
C:H
R:BOOL
F:
N:FTPMakeDir
S:FTPMakeDir(CString strPath);
C:H
R:BOOL
F:
N:FTPRemoveDir
S:FTPRemoveDir(CString strPath);
C:H
V:410
R:BOOL
F:
N:FTPDelete
S:FTPDelete(CString strFilename);
C:H
V:408
R:int
F:
N:FTPCommand
S:FTPCommand();
C:H
R:BOOL
F:
N:FTPGetAnswer
S:FTPGetAnswer();
C:H
R:CString
F:
N:GeneratePDFFilePath
S:GeneratePDFFilePath(int nTable, int nScript, CTable* pRecord, BOOL bWithFilename);
C:H
V:486
R:CString
F:
N:GetArchivausleihe
S:GetArchivausleihe(int* pnSelection1, int* pnSelection2, CDateTime* pDate, CString* pstrText, CString strTitle, CString strStatic, CString strName1, CString strName2, CString strName3, CString strName4, CString strShowColumns1, CString strShowColumns2);
C:H
R:int
F:
N:GetCurrentWorkTimeModel
S:GetCurrentWorkTimeModel(CDateTime dtDate, int nDefaultModel, CTable* ptWorkTimeModels);
C:H
V:519
R:int
F:
N:GetDefaultTseKassenId
S:GetDefaultTseKassenId();
C:H
V:507
R:CString
F:
N:GetTaxType
S:GetTaxType(int nTaxRecNr, int nRegistrierkassenType, BOOL bUstBefreit, BOOL bDifferenzbesteuert);
C:H
V:507
R:int
F:
N:GetTaxPercentFromType
S:GetTaxPercentFromType(int nTaxRecNr, int nRegistrierkassenType);
C:H
V:516
R:double
F:
N:GetValueFromJson
S:GetValueFromJson(CString strJson, CString strKey, int nIndex, BOOL bTrim);
C:H
V:491
R:CString
F:
N:GetCharacterValue
S:GetCharacterValue(CString strCharacter);
C:H
R:int
F:
N:GetCustomTextTrace
S:GetCustomTextTrace(CString strTag);
C:H
V:467
R:CString
F:
N:GetCustomTextTraceTable
S:GetCustomTextTraceTable(CString strTag);
C:H
V:467
R:CTable
F:
N:GetHash
S:GetHash(CString strText, int nHashBasis);
C:H
V:401
R:int
F:
N:GetNamedParameter
S:GetNamedParameter(CString strLine, CString strParameter, CString strTabChar);
C:H
R:CString
F:
N:GetRGBValue
S:GetRGBValue(int nRed, int nGreen, int nBlue);
C:H
R:int
F:
N:GetNextXMLPart
S:GetNextXMLPart(CString* pstrSource, CString* pstrXMLKey, CString* pstrXMLValue, CString* pstrXMLAttributes, int* pnStartPos, int* pnEndPos);
C:H
R:void
F:
N:GetClientVersion
S:GetClientVersion();
C:H
R:CString
F:
N:GetParserVersionNumber
S:GetParserVersionNumber();
C:H
R:int
F:
N:GetPictureDataAsBase64
S:GetPictureDataAsBase64(CTable* pTable, int nRow);
C:H
R:CString
F:
N:GetPictureFileName
S:GetPictureFileName(CTable* pTable, int nRow);
C:H
R:CString
F:
N:GetPictureFileType
S:GetPictureFileType(CTable* pTable, int nRow);
C:H
R:int
F:
N:GetSecondsFromString
S:GetSecondsFromString(CString strDauer);
C:H
R:double
F:
N:GetLastAutomationFileName
S:GetLastAutomationFileName();
C:H
R:CString
F:
N:GetLocalTimezone
S:GetLocalTimezone();
C:H
R:CString
F:
N:GetUserInputData
S:GetUserInputData(CTable* pResultTable, GetUserInputData(pResultTable); );
C:H
R:CTable
F:
N:GenerateAppointmentRecurrences
S:GenerateAppointmentRecurrences(CTable* pAppointments, CDateTime dtFrom, CDateTime dtTo);
C:H
R:void
F:
N:GenerateRecurrenceString
S:GenerateRecurrenceString(CTable* pAppointments, int nRow);
C:H
V:353
R:CString
F:
N:HTMLEntityDecode
S:HTMLEntityDecode(CString strText);
C:H
R:CString
F:
N:HTMLEntityEncode
S:HTMLEntityEncode(CString strText);
C:H
R:CString
F:
N:HttpConfigureOAuth
S:HttpConfigureOAuth(CString strConsumerKey, CString strConsumerSecret, CString strTempEndpoint, CString strAuthEndpoint, CString strTokenEndpoint, CString strToken, CString strTokenSecret, int nOAuthType);
C:H
V:490
R:void
F:
N:HttpGet
S:HttpGet(CString strURL, CTable* ptResultHeaders, BOOL bUseOAuth, CTable* ptRequestHeaders);
C:H
R:CString
NOTE:
BOOL bUseOAuth - Parserversion: 490
F:
N:HttpPost
S:HttpPost(CString strURL, CString strData, CString strContentType, CTable* ptResultHeaders, BOOL bUseOAuth, CTable* ptRequestHeaders);
C:H
R:CString
NOTE:
BOOL bUseOAuth - Parserversion: 490
F:
N:HttpDelete
S:HttpDelete(CString strURL, CString strData, CString strContentType, CTable* ptResultHeaders, BOOL bUseOAuth, CTable* ptRequestHeaders);
C:H
V:490
R:CString
F:
N:HttpPut
S:HttpPut(CString strURL, CString strData, CString strContentType, CTable* ptResultHeaders, BOOL bUseOAuth, CTable* ptRequestHeaders);
C:H
V:490
R:CString
F:
N:HttpPatch
S:HttpPatch(CString strURL, CString strData, CString strContentType, CTable* ptResultHeaders, BOOL bUseOAuth, CTable* ptRequestHeaders);
C:H
V:503
R:CString
F:
N:ImportCAMT053
S:ImportCAMT053(CString strFileName, CTable* pTable, CString* pstrMessageId, CString* pstrCreationDateTime);
C:H
V:348
R:BOOL
F:
N:ImportRecordsCSV
S:ImportRecordsCSV(CString strFileName, CString strCols, CString strSeparator, int nTable, int nColArtikelnummer, int nColArtikelnummerDatabase, BOOL bCheckExisting, BOOL bReplaceQuotes, BOOL bDontParseScripts, BOOL bNoNewJob);
C:H
R:int
F:
N:ImportPLZ
S:ImportPLZ(CString strFile, CTable* pTablePLZ, CTable* pTableLand);
C:H
R:int
F:
N:ImportUpdateZip
S:ImportUpdateZip(CString strUpdateZipFilePath, CString* pstrOutput);
C:H
V:2004
R:void
F:
N:InvokeFFSoapDLL
S:InvokeFFSoapDLL(CString strMethod, CString strParameters, CString strEndpoint, CString strDLLPath);
C:H
R:CString
F:
N:InvokeGoogle
S:InvokeGoogle(CString strMethod, CString strParameters);
C:H
R:CString
F:
N:IsDebug
S:IsDebug();
C:H
R:void
F:
N:IsDialogVisible
S:IsDialogVisible(int nDialog, BOOL bVisible);
C:H
V:420
R:BOOL
F:
N:IsThisScriptLocked
S:IsThisScriptLocked();
C:H
R:BOOL
F:
N:IsJobInList
S:IsJobInList(int nStep, int nRecord);
C:H
R:BOOL
F:
N:IntToBinaryString
S:IntToBinaryString(int nInteger);
C:H
V:2112
R:CString
F:
N:IsScriptLocked
S:IsScriptLocked(int nScript);
C:H
R:BOOL
F:
N:IsVariableDefined
S:IsVariableDefined(int nNumber, BOOL bOK);
C:H
R:BOOL
F:
N:IsTSEKassaActive
S:IsTSEKassaActive();
C:H
V:507
R:BOOL
F:
N:Log
S:Log(double dValue1);
C:H
R:double
F:
N:Log10
S:Log10(double dValue1);
C:H
R:double
F:
N:LockThisScript
S:LockThisScript();
C:H
R:void
F:
N:MD5Encode
S:MD5Encode(CString strText);
C:H
R:CString
F:
N:OMExportData
S:OMExportData(CString strSCUrl, CString strACMUrl, int nAcountingPartnerID, int nLotOwnerPartner, int nItSystemId, int nUserId, int nUserExecId, int nExecutivePartnerID, CString strSSLKeyfile, CString strSSLPass, CString strSSLCertFile, CString strSSLCertPath);
C:H
R:CString
F:
N:OpenAutomationDocument
S:OpenAutomationDocument(int nRecord, BOOL bDontOpenViewer, int nScriptToParseOnFinishedWatching, int nRecNrToParseScript, int nTabNrToParseScript);
C:H
R:void
NOTE:
int nScriptToParseOnFinishedWatching - Parserversion: 2005
int nRecNrToParseScript - Parserversion: 2005
int nTabNrToParseScript - Parserversion: 2005
F:
N:OpenSQLConnection
S:OpenSQLConnection(int nType, CString strDBString, CString strUsername, CString strPassword);
C:H
R:int
F:
N:OpenTcpIpConnection
S:OpenTcpIpConnection(CString strHost, CString strPort, int nTimeoutMilliseconds);
C:H
V:2110
R:int
F:
N:OutlookExport
S:OutlookExport(CTable* pExportTable, CTable* pResultTable, CString* pstrErrors);
C:H
R:void
NOTE:
CString* pstrErrors - Parserversion: 470
F:
N:OutlookGetExportTable
S:OutlookGetExportTable(CTable* pExportTable, int nTable, CTable* pDBTable, BOOL bAppend);
C:H
R:int
F:
N:OutlookGetImportAppointments
S:OutlookGetImportAppointments(CTable* pImportTable, CString strFilter, BOOL bAppend, BOOL bNoItemSearch);
C:H
R:int
NOTE:
BOOL bNoItemSearch - Parserversion: 458
F:
N:OutlookGetImportContacts
S:OutlookGetImportContacts(CTable* pImportTable, CString strFilter, BOOL bAppend);
C:H
R:int
F:
N:OutlookGetImportTasks
S:OutlookGetImportTasks(CTable* pImportTable, CString strFilter, BOOL bAppend);
C:H
R:int
F:
N:OutlookImportAppointments
S:OutlookImportAppointments(CTable* pImportTable, CTable* pResultTable, CString* pstrErrors);
C:H
R:void
NOTE:
CString* pstrErrors - Parserversion: 470
F:
N:OutlookImportContacts
S:OutlookImportContacts(CTable* pImportTable, CTable* pResultTable, CString* pstrErrors);
C:H
R:void
NOTE:
CString* pstrErrors - Parserversion: 470
F:
N:OutlookImportTasks
S:OutlookImportTasks(CTable* pImportTable, CTable* pResultTable, CString* pstrErrors);
C:H
R:void
NOTE:
CString* pstrErrors - Parserversion: 470
F:
N:OutlookExportContacts
S:OutlookExportContacts();
C:H
R:void
F:
N:OutlookImportContacts
S:OutlookImportContacts();
C:H
R:void
F:
N:OutlookExportAppointment
S:OutlookExportAppointment(CString strEntryID, CTable tAppointment, BOOL bPickFolder);
C:H
R:void
F:
N:OutlookImportAppointments
S:OutlookImportAppointments();
C:H
R:void
F:
N:OutlookExportTask
S:OutlookExportTask(CString strEntryID);
C:H
R:void
F:
N:OutlookImportTasks
S:OutlookImportTasks();
C:H
R:void
F:
N:OutlookExportContact
S:OutlookExportContact(CString strEntryID, CTable Param1);
C:H
R:void
F:
N:OutlookNewAppointment
S:OutlookNewAppointment(CTable Param1);
C:H
R:void
F:
N:OutlookNewTask
S:OutlookNewTask(CTable Param1);
C:H
R:void
F:
N:OutlookShowContact
S:OutlookShowContact(CString strEntryID);
C:H
R:void
F:
N:OutlookShowAppointment
S:OutlookShowAppointment(CString strEntryID);
C:H
R:void
F:
N:OutlookShowTask
S:OutlookShowTask(CString strEntryID);
C:H
R:void
F:
N:OutlookShowMail
S:OutlookShowMail(CString strEntryID);
C:H
R:void
F:
N:OutlookMailTo
S:OutlookMailTo(CString strTo, CString strTitel, CString strText, CString strCC, CString strAttachment, CString strFrom);
C:H
R:BOOL
NOTE:
CString strFrom - Parserversion: 469
F:
N:OutlookNewMail
S:OutlookNewMail(CTable Param1, BOOL bSend, CString strAttachments, BOOL bHtmlBody, BOOL bDontThrowError, CString* pstrError);
C:H
R:void
F:
N:OutlookFindMail
S:OutlookFindMail(CString strSearchString, BOOL bSearchAll);
C:H
R:void
F:
N:OutlookSetFutureID
S:OutlookSetFutureID(CString strMessageClass, CString strEntryId, CString strFutureId);
C:H
V:445
R:BOOL
F:
N:OutlookSearchItems
S:OutlookSearchItems();
C:H
V:445
R:int
F:
N:Pow
S:Pow(double dBase, double dExponent);
C:H
R:double
F:
N:ParseFormulaString
S:ParseFormulaString(CString strFormula);
C:H
R:double
F:
N:PictureOpen
S:PictureOpen(CString strName);
C:H
R:BOOL
F:
N:PictureClose
S:PictureClose();
C:H
R:BOOL
F:
N:PictureConvertToGrayScale
S:PictureConvertToGrayScale();
C:H
R:BOOL
F:
N:PictureSave
S:PictureSave(CString strName, int nType1, int nQuality);
C:H
R:BOOL
F:
N:PictureGetWidth
S:PictureGetWidth(int nResult);
C:H
R:int
F:
N:PictureGetHeight
S:PictureGetHeight(int nResult);
C:H
R:int
F:
N:PictureResize
S:PictureResize(int nNewWidth, int nNewHeight);
C:H
R:BOOL
F:
N:PictureRotate
S:PictureRotate(double dAngle);
C:H
R:BOOL
F:
N:PictureFlip
S:PictureFlip(BOOL bResult);
C:H
R:BOOL
F:
N:PictureGreyscale
S:PictureGreyscale(BOOL bResult);
C:H
R:BOOL
F:
N:PictureMirror
S:PictureMirror(BOOL bResult);
C:H
R:BOOL
F:
N:PictureNegative
S:PictureNegative(BOOL bResult);
C:H
R:BOOL
F:
N:PrepareForSQL
S:PrepareForSQL(CString strString);
C:H
R:CString
F:
N:ProcessMessages
S:ProcessMessages();
C:H
R:void
F:
N:ProposeInPlace
S:ProposeInPlace(int nArtikel, double dMenge, double dArtikelProPalette, CTable* ptPlaetzeLeer, int nLager, CTable* ptBelegungenArtikelÜbergabe, CTable* ptVorhandenePlätzeÜbergabe);
C:H
R:CString
F:
N:ProposeOutPlace
S:ProposeOutPlace(int nArtikel, double dMenge, int nLager, CTable* ptBelegungenArtikelÜbergabe, CTable* ptVorhandenePlätzeÜbergabe);
C:H
R:CString
F:
N:Random
S:Random();
C:H
R:double
F:
N:ReceiveTcpIpAnswer
S:ReceiveTcpIpAnswer(CString* strAnswer, int nErrorCode);
C:H
V:2110
R:int
F:
N:RecordUserInput
S:RecordUserInput(BOOL bRecord);
C:H
R:void
F:
N:RecordsZuordnen
S:RecordsZuordnen(CTable* ptRecords, int nIDCol, int nHashBasis, CTable* ptRecords1, CTable* ptRecords2, CTable* ptRecords3, CTable* ptRecords4, CTable* ptRecords5, CTable* ptRecords6, CTable* ptRecords7, CTable* ptRecords8, CTable* ptRecords9, CTable* ptRecords10, CTable* ptRecords11, CTable* ptRecords12, CTable* ptRecords13, CTable* ptRecords14, CTable* ptRecords15, CTable* ptRecords16, CTable* ptRecords17, CTable* ptRecords18, CTable* ptRecords19, CTable* ptRecords20);
C:H
R:void
F:
N:RemoveScriptComments
S:RemoveScriptComments(CString strScript);
C:H
R:CString
F:
N:RememberString
S:RememberString(CString strKeyword, CString strRemember);
C:H
R:void
F:
N:RecallString
S:RecallString(CString strKeyword);
C:H
R:CString
F:
N:RewriteGlobalsFromStack
S:RewriteGlobalsFromStack();
C:H
R:void
F:
N:RemoveNavigationFilter
S:RemoveNavigationFilter();
C:H
R:void
F:
N:ReadFileAsBase64
S:ReadFileAsBase64(CString strFilename, CString strBase64);
C:H
R:CString
F:
N:ReadBarcodeFromImage
S:ReadBarcodeFromImage(CString strFilepath, BOOL bEnhanceContrast, int nLeft, int nTop, int nWidth, int nHeight);
C:H
R:CTable
F:
N:ReadTextWithOCR
S:ReadTextWithOCR(int nTableID, int nRecordID, CString* pstrError, CString strWhiteList);
C:H
R:CString
F:
N:ReadRegistryValue
S:ReadRegistryValue(CString strRoot, CString strKey, CString strName);
C:H
R:CString
F:
N:ReadSymbolScanner
S:ReadSymbolScanner(CString* pstrError, int nCOMPort, BOOL bDontSetDeviceTime);
C:H
R:CTable
F:
N:Round
S:Round(double dValue, int nPositions);
C:H
R:double
F:
N:RunScriptInWorkerThread
S:RunScriptInWorkerThread(int nScript);
C:H
V:351
R:BOOL
F:
N:RunUnitTests
S:RunUnitTests(BOOL bSilent);
C:H
V:2003
R:void
F:
N:RunUnitTestsIntegrated
S:RunUnitTestsIntegrated(BOOL bSilent, CString strDBKennung);
C:H
V:2003
R:void
F:
N:ScheduleSynchronisation
S:ScheduleSynchronisation();
C:H
V:3003
R:void
F:
N:SearchRouterCode
S:SearchRouterCode(CTable* ptRouten, CString strLand, CString strPLZ, CString* pstrRouterNummer, CString* pstrASort);
C:H
R:CString
F:
N:SetOAuth2Token
S:SetOAuth2Token(CString strAccessToken, int nExpiresIn);
C:H
V:2109
R:void
F:
N:SendHttpRequest
S:SendHttpRequest(CString strURL, CString strPayload, CTable* ptHeaders, DWORD dwForceSSLMode, int nTimeout);
C:H
R:CString
F:
N:SendStatisticInfo
S:SendStatisticInfo(int nType, CString strStatisticInfo, CString* pError);
C:H
R:BOOL
F:
N:SendSQL
S:SendSQL(CString strSQL, int nConn);
C:H
R:CTable
F:
N:SendTcpIpMessage
S:SendTcpIpMessage(CString strMessage, int nErrorCode);
C:H
V:2110
R:int
F:
N:SetJobDate
S:SetJobDate(int nStep, int nRecord, CDateTime DateBegin, CDateTime DateEnd);
C:H
R:void
F:
N:SetNamedParameter
S:SetNamedParameter(CString* pstrLine, CString strParameter, CString strTabChar, BOOL bDontReplaceEscapeCharacters, CString strValue);
C:H
R:void
F:
N:SearchNearestDate
S:SearchNearestDate(int nFilterValue1, int nFilterCol1, int nFilterValue2, int nFilterCol2, CDateTime dtDate, int nDateCol, CTable* pTable1);
C:H
R:int
F:
N:SerialOpenPort
S:SerialOpenPort(int nPort, int nBaud, int nParity, int nDataBits, int nStopBits, int nFlowControl, BOOL bOverlapped);
C:H
R:int
F:
N:SerialClosePort
S:SerialClosePort(int nSerial);
C:H
R:void
F:
N:SerialGetWaitForSendSize
S:SerialGetWaitForSendSize(int nSerial);
C:H
R:int
F:
N:SerialGetWaitForReadSize
S:SerialGetWaitForReadSize(int nSerial);
C:H
R:int
F:
N:SerialReadint
S:SerialReadint(int nSerial, int* pByte);
C:H
R:int
F:
N:SerialReadSHORT
S:SerialReadSHORT(int nSerial, int* pByte);
C:H
R:int
F:
N:SerialReadINT
S:SerialReadINT(int nSerial, int* pByte);
C:H
R:int
F:
N:SerialReadDOUBLE
S:SerialReadDOUBLE(int nSerial, double* pByte);
C:H
R:int
F:
N:SerialReadTEXT
S:SerialReadTEXT(int nSerial, int nLength);
C:H
R:int
F:
N:SerialWriteint
S:SerialWriteint(int nSerial, int nData);
C:H
R:int
F:
N:SerialWriteSHORT
S:SerialWriteSHORT(int nSerial, int nData);
C:H
R:int
F:
N:SerialWriteINT
S:SerialWriteINT(int nSerial, int nData);
C:H
R:int
F:
N:SerialWriteDOUBLE
S:SerialWriteDOUBLE(int nSerial, double dData);
C:H
R:int
F:
N:SerialWriteTEXT
S:SerialWriteTEXT(int nSerial, CString strData);
C:H
R:int
F:
N:SerialFlush
S:SerialFlush(int nSerial);
C:H
R:void
F:
N:SerialCancelIo
S:SerialCancelIo(int nSerial);
C:H
R:void
F:
N:SerialClearReadBuffer
S:SerialClearReadBuffer(int nSerial);
C:H
R:void
F:
N:SerialClearWriteBuffer
S:SerialClearWriteBuffer(int nSerial);
C:H
R:void
F:
N:SetPictureLinkData
S:SetPictureLinkData(CTable* pTable, CString strFileName, CString strExportType, int nRow);
C:H
R:void
F:
N:SetPictureData
S:SetPictureData(CTable* pTable, CString strFileName, CString strExportType, int nRow);
C:H
R:BOOL
F:
N:SetPictureDataFromTable
S:SetPictureDataFromTable(CTable* pTable, CString strExportType, int nCol, int nRow, CTable* pResult, int nDestRow);
C:H
R:void
F:
N:SHA256Encode
S:SHA256Encode(CString strInput);
C:H
V:2002
R:CString
F:
N:ShellExecute
S:ShellExecute(CString strOperation, CString strParameters, CString strWorkingDir, int nCloseTimeoutMiliseconds, CString strVerb);
C:H
R:BOOL
F:
N:ShellExecuteReadOutput
S:ShellExecuteReadOutput(CString strCommandline, BOOL bReadResults, BOOL* pbSuccess);
C:H
R:CString
F:
N:SkypeAttach
S:SkypeAttach();
C:H
R:void
F:
N:SkypeDetach
S:SkypeDetach();
C:H
R:void
F:
N:SkypeMakeCall
S:SkypeMakeCall();
C:H
R:void
F:
N:Sleep
S:Sleep(int nMiliseconds);
C:H
R:void
F:
N:SFTPBatch
S:SFTPBatch(CString strHost, int nPort, CString strUser, CString strPwd, CString strCommands, BOOL bContinueOnErrors);
C:H
R:int
F:
N:SFTPFileUpload
S:SFTPFileUpload(CString strHost, int nPort, CString strUser, CString strPwd, CString strLocalFileName, CString strRemoteAbsolutePath);
C:H
R:int
F:
N:TelephoneMakeCall
S:TelephoneMakeCall(CString strNumber);
C:H
R:void
F:
N:TSECreateDataTable
S:TSECreateDataTable(BOOL bDayFinish);
C:H
V:505
R:CTable
F:
N:TSEAddDataTableEntryBusinesscases
S:TSEAddDataTableEntryBusinesscases(CTable* pDataTable, int nPosition, CString strGVTyp, CString strGVName, CString strAgenturID, CString strUstSchluessel, CString strZUmsBrutto, CString strZUmsNetto, CString strZUst);
C:H
V:505
R:void
F:
N:TSEAddDataTableEntryPayment
S:TSEAddDataTableEntryPayment(CTable* pDataTable, int nPosition, CString strZahlartTyp, CString strZahlartName, CString strZZahlartBetrag);
C:H
V:505
R:void
F:
N:TSEAddDataTableEntryTransactions
S:TSEAddDataTableEntryTransactions(CTable* pDataTable, int nPosition, CString strBonNr, CString strBonTyp, CString strBonName, CString strTerminalID, CString strBonStorno, CString strBedienerID, CString strBedienerName, CString strUMSBrutto, CString strKundeName, CString strKundeID, CString strKundeTyp, CString strKundeStrasse, CString strKundePLZ, CString strKundeOrt, CString strKundeLand, CString strKundeUstID, CString strBonNotiz);
C:H
V:505
R:void
F:
N:TSEAddDataTableEntryAllocationGroups
S:TSEAddDataTableEntryAllocationGroups(CTable* pDataTable, int nPosition, CString strAbrechnungskreis);
C:H
V:505
R:void
F:
N:TSEAddDataTableEntryTransactionsVat
S:TSEAddDataTableEntryTransactionsVat(CTable* pDataTable, int nPosition, CString strUstSchluessel, CString strBonBrutto, CString strBonNetto, CString strBonUst);
C:H
V:505
R:void
F:
N:TSEAddDataTableEntryDataPayment
S:TSEAddDataTableEntryDataPayment(CTable* pDataTable, int nPosition, CString strZahlartTyp, CString strZahlartName, CString strZahlWaehCode, CString strZahlWaehBetrag, CString strBasisWaehBetrag);
C:H
V:505
R:void
F:
N:TSEAddDataTableEntryLines
S:TSEAddDataTableEntryLines(CTable* pDataTable, int nPosition, CString strPosZeile, CString strGutscheinNr, CString strArtikeltext, CString strPosTerminalID, CString strGVTyp, CString strGVName, CString strInHaus, CString strPStorno, CString strAgenturID, CString strArtNr, CString strGtin, CString strWarenGrID, CString strWarenGr, CString strMenge, CString strFaktor, CString strEinheit, CString strStkBr);
C:H
V:505
R:void
F:
N:TSEAddDataTableEntryLinesVat
S:TSEAddDataTableEntryLinesVat(CTable* pDataTable, int nPosition, CString strPosZeile, CString strUstSchluessel, CString strPosBrutto, CString strPosNetto, CString strPosUst);
C:H
V:505
R:void
F:
N:TSEAddDataTableEntryItemAmounts
S:TSEAddDataTableEntryItemAmounts(CTable* pDataTable, int nPosition, CString strPosZeile, CString strTyp, CString strUstSchluessel, CString strPFBrutto, CString strPFNetto, CString strPFUst);
C:H
V:505
R:void
F:
N:TSEAddDataTableEntrySubItems
S:TSEAddDataTableEntrySubItems(CTable* pDataTable, int nPosition, CString strPosZeile, CString strZiArtNr, CString strZiGtin, CString strZiName, CString strZiWarenGrID, CString strZiWarenGr, CString strZiMenge, CString strZiFaktor, CString strZiEinheit, CString strZiUstSchluessel, CString strZiBasispreisBrutto, CString strZiBasispreisNetto, CString strZiBasispreisUst);
C:H
V:505
R:void
F:
N:TSEAddDataTableEntryReferences
S:TSEAddDataTableEntryReferences(CTable* pDataTable, int nPosition, CString strPosZeile, CString strRefTyp, CString strRefName, CString strRefDatum, CString strRefZKasseID, CString strRefZNr, CString strRefBonID);
C:H
V:505
R:void
F:
N:TSEDisplayErrorMessage
S:TSEDisplayErrorMessage(int nErrorCode1, int nErrorCode2, BOOL bSilent);
C:H
V:513
R:CString
F:
N:TseExportDSFinVK
S:TseExportDSFinVK(CString strFileName, CDateTime dtStart, CDateTime dtEnd);
C:H
V:528
R:BOOL
F:
N:TSEGetCaseDetails
S:TSEGetCaseDetails(int nKasseRecord, int nTable, int nRecord, int nScript, CString strTypes, BOOL bDontFollowLinks);
C:H
V:506
R:CTable
F:
N:TSEGetBonIdAndNumber
S:TSEGetBonIdAndNumber(int nKasse, CString* pstrBonId, CString* pstrBonNr, int nMandant);
C:H
V:510
R:void
NOTE:
int nMandant - Parserversion: 512
F:
N:TSEGetPaymentTypeAndName
S:TSEGetPaymentTypeAndName(int nPaymentType, CString* pstrPaymentType, CString* pstrPaymentName);
C:H
V:508
R:void
F:
N:TranslationOff
S:TranslationOff();
C:H
R:void
F:
N:TranslationOn
S:TranslationOn();
C:H
R:void
F:
N:TwainAcquireImage
S:TwainAcquireImage(CString strFileName, CString strFileType, int nResolution, BOOL bSelectSource, CString* pstrSelectSource);
C:H
R:int
NOTE:
int nResolution - Parserversion: 449
BOOL bSelectSource - Parserversion: 449
CString* pstrSelectSource - Parserversion: 452
F:
N:TwainSelectDefaultSource
S:TwainSelectDefaultSource();
C:H
R:void
F:
N:TwainSelectSource
S:TwainSelectSource(CString* pstrSelectedSource);
C:H
R:void
NOTE:
CString* pstrSelectedSource - Parserversion: 452
F:
N:TwainSetResolution
S:TwainSetResolution(int nResolution);
C:H
R:void
F:
N:TraceMark
S:TraceMark(int nColor);
C:H
R:void
NOTE:
int nColor - Parserversion: 464
F:
N:TraceStart
S:TraceStart();
C:H
R:void
F:
N:TraceStop
S:TraceStop();
C:H
R:void
F:
N:UpdateArticle
S:UpdateArticle(int nArtikelID, CString* strError, int nDepth);
C:H
R:void
F:
N:UpdateHTMLView
S:UpdateHTMLView();
C:H
R:void
F:
N:UrlEncode
S:UrlEncode(CString strURL, int nCodePage);
C:H
R:CString
NOTE:
int nCodePage - Parserversion: 2000
F:
N:UrlDecode
S:UrlDecode(CString strURL, int nCodePage);
C:H
R:CString
NOTE:
int nCodePage - Parserversion: 2000
F:
N:UTF2Latin1
S:UTF2Latin1(CString* pstrUTF8, BOOL* pbSuccess);
C:H
R:CString
F:
N:UnZipArchive
S:UnZipArchive(CString strZipFilePath, CString strDestinationPath);
C:H
V:406
R:int
F:
N:UnZipArchive7z
S:UnZipArchive7z(CString strZipFilePath, CString strDestinationPath, CString strEncryptionPassword);
C:H
V:2113
R:BOOL
F:
N:VerifySignature
S:VerifySignature(CString strFilePath, CString strSignature);
C:H
V:407
R:BOOL
F:
N:VouchersInCirculationStatistic
S:VouchersInCirculationStatistic(CDateTime dtBegin, CDateTime dtEnd);
C:H
V:412
R:CTable
F:
N:Wait
S:Wait(int nMillis);
C:H
V:350
R:void
F:
N:WebXMLRPCCall
S:WebXMLRPCCall(CString strURL, CString strMethode, CString strMethode2, CTable* ptRequestParameters, CTable* ptResult, BOOL bMakeHTMLSaveCodes, BOOL bEncrypted, CString strUsername, CString strPassword);
C:H
R:int
F:
N:WebRobotSearchPage
S:WebRobotSearchPage(CString strURL, CString strSearchStrings, BOOL bAnd, int nLinkTiefe, CTable* ptResult, CString strURLExclude, CString strURLInclude);
C:H
R:void
F:
N:WebRobotSearchPageMultiple
S:WebRobotSearchPageMultiple(CString strURL, CTable* ptConditions, int nLinkTiefe, CTable* ptResult, CString strURLExclude, CString strURLInclude);
C:H
R:void
F:
N:WebRobotSearchFile
S:WebRobotSearchFile(CString strFile, CString strSearchStrings, BOOL bAnd);
C:H
R:BOOL
F:
N:WebRobotSavePage
S:WebRobotSavePage(CString strURL, CString strPath, CString strName);
C:H
R:void
F:
N:WebRobotGetFirmenbuchEintragungen
S:WebRobotGetFirmenbuchEintragungen(CDateTime dtDate, CTable* ptResult);
C:H
R:void
F:
N:WebRobotGetFirmenByBranche
S:WebRobotGetFirmenByBranche(CString strURL, CTable* ptResult, CString strPageCountAppendixFormat);
C:H
R:void
F:
N:WebRobotGetFirmenByBranche11880com
S:WebRobotGetFirmenByBranche11880com(CString strURL, CTable* ptResult, CString strPageCountAppendixFormat);
C:H
R:void
F:
N:WebRobotGetFirmenFromWKO
S:WebRobotGetFirmenFromWKO(CString strURL, CTable* ptResult);
C:H
R:void
F:
N:WebRobotDownloadToFile
S:WebRobotDownloadToFile(CString strURL, CString strFile, CString strUsername, CString strPassword, BOOL bSilent);
C:H
R:void
NOTE:
CString strUsername - Parserversion: 499
CString strPassword - Parserversion: 499
BOOL bSilent - Parserversion: 499
F:
N:WebRobotDownloadToString
S:WebRobotDownloadToString(CString strURL, CString strUsername, CString strPassword, BOOL bSilent, BOOL bSetTimeout, int nTimeoutMilliseconds);
C:H
R:CString
NOTE:
CString strUsername - Parserversion: 433
CString strPassword - Parserversion: 433
BOOL bSilent - Parserversion: 442
BOOL bSetTimeout - Parserversion: 525
int nTimeoutMilliseconds - Parserversion: 525
F:
N:WebRobotGetFileSize
S:WebRobotGetFileSize(CString strURL);
C:H
R:int
F:
N:WordGetPageCount
S:WordGetPageCount(CString strFileName, CString* strError);
C:H
R:int
F:
N:WordRemoveComments
S:WordRemoveComments(CString strFileName);
C:H
R:void
F:
N:WordProtect
S:WordProtect(CString strFileName);
C:H
R:void
F:
N:WordSave
S:WordSave(CString strFileName, BOOL bVisible);
C:H
R:void
F:
N:WordShow
S:WordShow(CString strFileName);
C:H
R:void
NOTE:
CString strFileName - Parserversion: 524
F:
N:WordUnprotect
S:WordUnprotect(CString strFileName);
C:H
R:void
F:
N:WriteFileFromBase64
S:WriteFileFromBase64(CString strFilename, CStringA strBase64);
C:H
V:426
R:BOOL
F:
N:WriteRegistryValue
S:WriteRegistryValue(CString strRoot, CString strKey, CString strName, CString strValue, int nRegType);
C:H
R:void
F:
N:XMLToCTable
S:XMLToCTable(CString strXML);
C:H
R:CTable
F:
N:XmlNewDocument
S:XmlNewDocument(TiXmlDocument* newXmlDoc);
C:H
R:int
F:
N:XmlNewElement
S:XmlNewElement(CString strNodeName);
C:H
R:int
F:
N:XmlParse
S:XmlParse(int nXmlDocHandle, CString strXml);
C:H
R:int
F:
N:XmlAddBody
S:XmlAddBody(int nDocHandle, int nElmHandle);
C:H
R:void
F:
N:XmlGetDocumentAsString
S:XmlGetDocumentAsString(int nHandle, CString strIndentation);
C:H
R:CString
F:
N:XmlGetElementAsString
S:XmlGetElementAsString(int nHandle, CString strIndentation);
C:H
R:CString
F:
N:XmlFirstChildElement
S:XmlFirstChildElement(int nElmHandle, CString strNodeName);
C:H
R:int
F:
N:XmlNextSiblingElement
S:XmlNextSiblingElement(int nElmHandle, CString strNodeName);
C:H
R:int
F:
N:XmlCloneElement
S:XmlCloneElement(int nElmHandle);
C:H
R:int
F:
N:XmlLinkEndChild
S:XmlLinkEndChild(int nElmTargetHandle, int nElmSourceHandle);
C:H
R:void
F:
N:XmlSetAttribute
S:XmlSetAttribute(int nElmHandle, CString strAttribute, CString strValue);
C:H
R:void
F:
N:XmlGetAttribute
S:XmlGetAttribute(int nElmHandle, CString strAttribute);
C:H
R:CString
F:
N:XmlSetText
S:XmlSetText(int nElmHandle, CString strValue);
C:H
R:void
F:
N:XmlGetText
S:XmlGetText(int nElmHandle);
C:H
R:CString
F:
N:XmlGetElementName
S:XmlGetElementName(int nElmHandle);
C:H
R:CString
F:
N:XmlDeleteDoc
S:XmlDeleteDoc(int nHandle);
C:H
R:void

F:
N:CalculateNewCurrency
S:CalculateNewCurrency(int nNewCurrency);
C:CMoney
R:void
F:
N:GetCurrency
S:GetCurrency();
C:CMoney
R:int
F:
N:GetCurrencyValue
S:GetCurrencyValue(int nCurrency);
C:CMoney
R:double
F:
N:GetValue
S:GetValue(int nCurrency, BOOL bDontRound);
C:CMoney
R:double
F:
N:GetValueInUserCurrency
S:GetValueInUserCurrency();
C:CMoney
R:double
F:
N:GetText
S:GetText(CString strCurrency, BOOL bNoThousandPoint);
C:CMoney
R:CString
F:
N:GetTextInCurrency
S:GetTextInCurrency(int nCurrency, BOOL bNoThousandPoint);
C:CMoney
R:CString
F:
N:GetTextInUserCurrency
S:GetTextInUserCurrency(BOOL bNoThousandPoint);
C:CMoney
R:CString
F:
N:GetTextFormat
S:GetTextFormat(CString strFormat, BOOL bNoThousandPoint);
C:CMoney
R:CString
F:
N:GetTextFormatInCurrency
S:GetTextFormatInCurrency(CString strFormat, int nCurrency, BOOL bNoThousandPoint);
C:CMoney
R:CString
F:
N:GetTextFormatInUserCurrency
S:GetTextFormatInUserCurrency(CString strFormat, BOOL bNoThousandPoint);
C:CMoney
R:CString
F:
N:GetTextWithoutCurrencyString
S:GetTextWithoutCurrencyString(CString strCurrency, BOOL bNoThousandPoint);
C:CMoney
R:CString
F:
N:GetTextWithoutCurrencyStringInUserCurrency
S:GetTextWithoutCurrencyStringInUserCurrency(BOOL bNoThousandPoint);
C:CMoney
R:CString
F:
N:Round
S:Round(int nPositions);
C:CMoney
R:void
F:
N:RoundFranken
S:RoundFranken();
C:CMoney
R:void
F:
N:SetCurrencyValue
S:SetCurrencyValue(int nCurrency, double dValue);
C:CMoney
R:void
F:
N:SetValue
S:SetValue(double dValue);
C:CMoney
R:void
F:
N:SetCurrency
S:SetCurrency(int nCurrency);
C:CMoney
R:void
F:
N:SetMoney
S:SetMoney(CString strValue);
C:CMoney
R:void

F:
N:AL
S:AL();
C:P
R:void
F:
N:AC
S:AC();
C:P
R:void
F:
N:AR
S:AR();
C:P
R:void
F:
N:ActDate
S:ActDate(CString strDateFormat, CDateTime today, today.SetActTime(); );
C:P
R:void
F:
N:ActTime
S:ActTime(CString strTimeFormat, CDateTime today, today.SetActTime(); );
C:P
R:void
F:
N:AddStyleChange
S:AddStyleChange(int nStyle, int nStyleValue);
C:P
V:424
R:void
F:
N:BackgroundColor
S:BackgroundColor(int nRed, int nGreen, int nBlue);
C:P
R:void
F:
N:Barcode
S:Barcode(int nPage, double dXPos, double dYPos, double dWidth, double dHeight, CString strText, int nBarcodeType);
C:P
R:void
F:
N:BarcodeOnSpecialPos
S:BarcodeOnSpecialPos(int nPage, int nPosType, int nPosOrigin, double dXPos, double dYPos, double dWidth, double dHeight, CString strText, int nBarcodeType);
C:P
R:void
F:
N:BrushColor
S:BrushColor(int nRed, int nGreen, int nBlue);
C:P
R:void
F:
N:BrushHatch
S:BrushHatch(int nBrushHatch);
C:P
R:void
F:
N:CancelActualPrintJob
S:CancelActualPrintJob();
C:P
R:void
F:
N:CharDecimal
S:CharDecimal(int nChar);
C:P
R:void
F:
N:CharHex
S:CharHex(CString strHex);
C:P
R:void
F:
N:EngravedOn
S:EngravedOn();
C:P
R:void
F:
N:EngravedOff
S:EngravedOff();
C:P
R:void
F:
N:EscapeTest
S:EscapeTest();
C:P
R:void
F:
N:Escape
S:Escape(CString strEscapeSequence);
C:P
R:void
F:
N:EscapeDecimal
S:EscapeDecimal(TCHAR cEscapeCharacter);
C:P
R:void
F:
N:EscapeHex
S:EscapeHex(CString strHex);
C:P
R:void
F:
N:EndMultiPrint
S:EndMultiPrint(m_pDoc->ClearVariable(L"MultiprintRunning"); , m_pDoc->ClearVariable(L"MultiPrintUseArchiveAsked"); , m_pDoc->ClearVariable(L"MultiPrintUseArchive"); , bFound );
C:P
V:2009
R:void
F:
N:FontHeight
S:FontHeight(int nFontHeight);
C:P
R:void
F:
N:FontHeightOnPage
S:FontHeightOnPage(int nFontHeight, int nPage);
C:P
R:void
F:
N:FontWeight
S:FontWeight(int nFontWeight);
C:P
R:void
F:
N:FontWeightOnPage
S:FontWeightOnPage(int nFontWeight, int nPage);
C:P
R:void
F:
N:FontFace
S:FontFace(CString strFontFace);
C:P
R:void
F:
N:FontFaceOnPage
S:FontFaceOnPage(CString strFontFace, int nPage);
C:P
R:void
F:
N:FontOrientation
S:FontOrientation(int nFontOrientation);
C:P
R:void
F:
N:FontOrientationOnPage
S:FontOrientationOnPage(int nPage, int nFontOrientation);
C:P
R:void
F:
N:FilledRectangle
S:FilledRectangle(int nPageNumber, double dXPos, double dYPos, double dWidth, double dHeight, double dBorderThickness);
C:P
R:void
F:
N:Graphic
S:Graphic(int nGraphicRecordId, double dWidth, double dHeight);
C:P
R:void
F:
N:GraphicOnPos
S:GraphicOnPos(int nGraphicRecordId, int nPageNumber, double dXPos, double dYPos, double dWidth, double dHeight);
C:P
R:void
F:
N:IsPreview
S:IsPreview();
C:P
R:BOOL
F:
N:LineBreak
S:LineBreak();
C:P
R:void
F:
N:Line
S:Line(int nPageNumber, double dXPos1, double dYPos1, double dXPos2, double dYPos2, double dLineWidth, int nLineColor);
C:P
R:void
F:
N:NewPage
S:NewPage();
C:P
R:void
F:
N:NewPageIfNotEnoughPlace
S:NewPageIfNotEnoughPlace(int nLines);
C:P
R:void
F:
N:NewPrintJob
S:NewPrintJob();
C:P
R:void
F:
N:Position
S:Position(int nPageNumber, double dXPos, double dYPos);
C:P
R:void
F:
N:PenWidth
S:PenWidth(int nPenWidth);
C:P
R:void
F:
N:PenStyle
S:PenStyle(int nPenStyle);
C:P
R:void
F:
N:PenColor
S:PenColor(int nRed, int nGreen, int nBlue);
C:P
R:void
F:
N:ParagraphAlign
S:ParagraphAlign(int nParagraphAlignment);
C:P
R:void
F:
N:ParagraphLeftBorder
S:ParagraphLeftBorder(double dParagraphLeftBorder);
C:P
R:void
F:
N:ParagraphRightBorder
S:ParagraphRightBorder(double dParagraphRightBorder);
C:P
R:void
F:
N:ParagraphLeading
S:ParagraphLeading(double dParagraphLeading);
C:P
R:void
F:
N:Rule
S:Rule(double dLineThickness);
C:P
R:void
F:
N:Rule2
S:Rule2(double dLineThickness);
C:P
R:void
F:
N:RuleOnPos
S:RuleOnPos(int nPageNumber, double dYPos, double dLineThickness);
C:P
R:void
F:
N:Rectangle
S:Rectangle(int nPageNumber, double dXPos, double dYPos, double dWidth, double dHeight, double dBorderThickness);
C:P
R:void
F:
N:ReportOnPos
S:ReportOnPos(int nPage, double dXPosInCM, double dYPosInCM, double dWidthInCM, double dHeightInCM, CString strTitle, CTable* pData, int nDiagrammType, BOOL bShowAverageConstant, BOOL bShowAverageVariable, int nShowAverageVariablePeriods, BOOL bShowValues, BOOL bShowHelpLines, int nNumberOfHelpLines, BOOL bAggregate, BOOL bShowPercentOneReport, BOOL bShowPercentBetweenReports, BOOL bShowPercentShare, int nColumnWidth, int nColumnGap, int nAggregateGap);
C:P
R:void
F:
N:ScriptText
S:ScriptText(int nTextNumber, bFound , CString strText);
C:P
R:void
F:
N:ScriptGraphic
S:ScriptGraphic(int nGraphicNumber, bFound );
C:P
R:void
F:
N:SetPrintTextNoRTF
S:SetPrintTextNoRTF(BOOL bNoRTF);
C:P
R:void
F:
N:SpecialPosition
S:SpecialPosition(int nPageNumber, int nPosType, int nPosOrigin, double dXPos, double dYPos);
C:P
R:void
F:
N:ShadowOn
S:ShadowOn();
C:P
R:void
F:
N:ShadowOff
S:ShadowOff();
C:P
R:void
F:
N:SetNumberOfCopies
S:SetNumberOfCopies(int nNumberOfCopies);
C:P
R:void
F:
N:SetDuplex
S:SetDuplex(BOOL bDuplex);
C:P
R:void
F:
N:SetJobTitle
S:SetJobTitle(CString strTitle);
C:P
R:void
F:
N:SetShowDialog
S:SetShowDialog(BOOL bShow);
C:P
R:void
F:
N:SetPageBorderTop
S:SetPageBorderTop(double dBorderTopCM);
C:P
R:void
F:
N:SetPageBorderLeft
S:SetPageBorderLeft(double dBorderLeftCM);
C:P
R:void
F:
N:SetPageBorderBottom
S:SetPageBorderBottom(double dBorderBottomCM);
C:P
R:void
F:
N:SetPageBorderRight
S:SetPageBorderRight(double dBorderRightCM);
C:P
R:void
F:
N:SetPageHeight
S:SetPageHeight(double dPageHeightCM);
C:P
R:void
F:
N:SetPageWidth
S:SetPageWidth(double dPageWidthCM);
C:P
R:void
F:
N:SetPageOrientation
S:SetPageOrientation(int nPageOrientation);
C:P
R:void
F:
N:SetLeading
S:SetLeading(double dLeading);
C:P
R:void
F:
N:SetPageNumberType
S:SetPageNumberType(int nPageNumberType);
C:P
R:void
F:
N:SetPageNumberPos
S:SetPageNumberPos(int nPageNumberPos);
C:P
R:void
F:
N:SetPageNumberStart
S:SetPageNumberStart(int nPageNumberStart);
C:P
R:void
F:
N:SetPageNumberOnFirstPage
S:SetPageNumberOnFirstPage(BOOL bShowPageNumberOnFirstPage);
C:P
R:void
F:
N:SetPageNumberText
S:SetPageNumberText(CString strPageNumberText);
C:P
R:void
F:
N:SetFont
S:SetFont(int nFontHeight, int nFontWeight, int nFontPitchAndFamily, CString strFontFace);
C:P
R:void
F:
N:SetFontHeight
S:SetFontHeight(int nFontHeight);
C:P
R:void
F:
N:SetFontWeight
S:SetFontWeight(int nFontWeight);
C:P
R:void
F:
N:SetFontFamily
S:SetFontFamily(int nFontPitchAndFamily);
C:P
R:void
F:
N:SetFontFace
S:SetFontFace(CString strFontFace);
C:P
R:void
F:
N:SetPaperSize
S:SetPaperSize(int nPaperSize);
C:P
R:void
F:
N:SetPaperSource1
S:SetPaperSource1(int nPaperTray1);
C:P
R:void
F:
N:SetPaperSource2
S:SetPaperSource2(int nPaperTray2);
C:P
R:void
F:
N:SetPaperName
S:SetPaperName(CString strPaperName);
C:P
R:void
F:
N:SetPrinter
S:SetPrinter(CString strPrinterName);
C:P
R:void
F:
N:SetActualPrintCurrency
S:SetActualPrintCurrency(m_nActualCurrency , bFound );
C:P
R:void
F:
N:StartPrinting
S:StartPrinting(BOOL bPreview);
C:P
R:void
F:
N:StopPrinting
S:StopPrinting();
C:P
R:void
F:
N:StartMultiPrint
S:StartMultiPrint();
C:P
V:2009
R:void
F:
N:TextOnPos
S:TextOnPos(int nPageNumber, double dXPos, double dYPos, CString strTextContent, int nAlign);
C:P
R:void
F:
N:TextOnSpecialPos
S:TextOnSpecialPos(int nPageNumber, int nPosType, int nPosOrigin, double dXPos, double dYPos, CString strTextContent);
C:P
R:void
F:
N:TextQuote
S:TextQuote();
C:P
R:void
F:
N:TextBracketOpen
S:TextBracketOpen();
C:P
R:void
F:
N:TextBracketClose
S:TextBracketClose();
C:P
R:void
F:
N:Text
S:Text(CString strTextContent, int nPage);
C:P
R:void
F:
N:TextColor
S:TextColor(int nRed, int nGreen, int nBlue);
C:P
R:void
F:
N:TabStops
S:TabStops(double arTabStops[10], arTabStops[0] , arTabStops[1] , arTabStops[2] , arTabStops[3] , arTabStops[4] , arTabStops[5] , arTabStops[6] , arTabStops[7] , arTabStops[8] , arTabStops[9] );
C:P
R:void
F:
N:TableBorder
S:TableBorder(double dTableBorderThicknessCM);
C:P
R:void
F:
N:TableHorzLines
S:TableHorzLines(double dTableHorzLinesThicknessCM);
C:P
R:void
F:
N:TableVertLines
S:TableVertLines(double dTableVertLinesThicknessCM);
C:P
R:void
F:
N:TableTitleBorder
S:TableTitleBorder(double m_dTableTitleBorderThicknessCM);
C:P
R:void
F:
N:TableTitleOrientation
S:TableTitleOrientation(double dTableTitleOrientationDegree);
C:P
R:void
F:
N:TableTitleFontHeight
S:TableTitleFontHeight(int nFontHeight);
C:P
R:void
F:
N:TableTitleFontWeight
S:TableTitleFontWeight(int nFontWeight);
C:P
R:void
F:
N:TableTitleHeightMax
S:TableTitleHeightMax(int nTableTitleHeightMaxCM);
C:P
R:void
F:
N:TableTitle
S:TableTitle(BOOL bShowTableTitle);
C:P
R:void
F:
N:TableColorTitle
S:TableColorTitle(int nRed, int nGreen, int nBlue);
C:P
R:void
F:
N:TableColorRow1
S:TableColorRow1(int nRed, int nGreen, int nBlue);
C:P
R:void
F:
N:TableColorRow2
S:TableColorRow2(int nRed, int nGreen, int nBlue);
C:P
R:void
F:
N:TableRowHeightFix
S:TableRowHeightFix(int nHeight);
C:P
R:void
F:
N:TableRowHeightMax
S:TableRowHeightMax(int nHeight);
C:P
R:void
F:
N:Table
S:Table(CTable* pTable, CString strPageSumCols);
C:P
R:void
F:
N:TableOnPos
S:TableOnPos(int nPageNumber, double dXPos, double dYPos, CTable* pTable1, CString strPageSumCols);
C:P
R:void
F:
N:TableRows
S:TableRows(CTable tTable, int nStartRow, int nRowMax);
C:P
R:void
F:
N:TU0
S:TU0();
C:P
R:void
F:
N:TU1
S:TU1();
C:P
R:void
F:
N:TU2
S:TU2();
C:P
R:void
F:
N:TUB
S:TUB();
C:P
R:void
F:
N:TUDOT
S:TUDOT();
C:P
R:void
F:
N:TUDASHDOTDOT
S:TUDASHDOTDOT();
C:P
R:void
F:
N:TUDASHDOT
S:TUDASHDOT();
C:P
R:void
F:
N:TUDASH
S:TUDASH();
C:P
R:void
F:
N:TS0
S:TS0();
C:P
R:void
F:
N:TS1
S:TS1();
C:P
R:void
F:
N:TS2
S:TS2();
C:P
R:void
F:
N:TSB
S:TSB();
C:P
R:void
F:
N:TB
S:TB();
C:P
R:void
F:
N:TN
S:TN();
C:P
R:void

F:
N:AddHtml
S:AddHtml(CString strSource, BOOL bDelimiterSourceInDiv);
C:CString
V:468
R:void
F:
N:AddIntegerToString
S:AddIntegerToString(int nValue);
C:CString
R:void
F:
N:AddIntegersToString
S:AddIntegersToString(CString strValues);
C:CString
R:void
F:
N:AddRTF
S:AddRTF(CString strNewText);
C:CString
R:void
F:
N:Any2HTML
S:Any2HTML(BOOL bDontGenerateInlineHtml, BOOL bDontReplaceNumberedHtmlEntities);
C:CString
V:476
R:void
NOTE:
BOOL bDontGenerateInlineHtml - Parserversion: 476
BOOL bDontReplaceNumberedHtmlEntities - Parserversion: 476
F:
N:CompareNoCase
S:CompareNoCase(CString strParam1);
C:CString
R:int
F:
N:Compare
S:Compare(CString strParam1);
C:CString
R:int
F:
N:ConvertToBase64
S:ConvertToBase64(bool bIsBinaryString);
C:CString
R:void
NOTE:
bool bIsBinaryString - Parserversion: 2112
F:
N:ConvertFromBase64
S:ConvertFromBase64(bool bMakeBinaryString, int nReadBytes);
C:CString
R:void
NOTE:
bool bMakeBinaryString - Parserversion: 2112
int nReadBytes - Parserversion: 2112
F:
N:ConvertToHexString
S:ConvertToHexString(CStringA straSource, CStringA straHex);
C:CString
R:void
F:
N:ConvertFromQuotedPrintable
S:ConvertFromQuotedPrintable(int* pData, long nLength);
C:CString
R:void
F:
N:Delete
S:Delete(int nStart, int nCount);
C:CString
R:int
F:
N:DeleteQuotes
S:DeleteQuotes();
C:CString
R:void
F:
N:Empty
S:Empty();
C:CString
R:void
F:
N:Find
S:Find(CString strParam1, int nStartPos);
C:CString
R:int
F:
N:FindCaseInsensitive
S:FindCaseInsensitive(CString strParam1, int nStartPos);
C:CString
V:460
R:int
F:
N:FindLast
S:FindLast(CString strParam1);
C:CString
R:int
F:
N:FindOneOf
S:FindOneOf(CString strParam1);
C:CString
R:int
F:
N:GetLength
S:GetLength();
C:CString
R:int
F:
N:GetLineNumber
S:GetLineNumber();
C:CString
R:int
F:
N:GetAt
S:GetAt(int nPos);
C:CString
R:int
F:
N:Get2Parts
S:Get2Parts(CString* pstrLeft, CString* pstrRight, CString strTab);
C:CString
R:void
F:
N:HasQuotes
S:HasQuotes();
C:CString
R:BOOL
F:
N:Insert
S:Insert(int nPosition, CString strValue);
C:CString
R:int
F:
N:InsertHtml
S:InsertHtml(CString strTarget, CString strSource, CString strPlaceholder, BOOL bDelimiterSourceInDiv);
C:CString
V:468
R:void
F:
N:IsIntegerInString
S:IsIntegerInString(int nValue);
C:CString
R:BOOL
F:
N:IsTagInString
S:IsTagInString(CString strTag);
C:CString
V:2100
R:BOOL
F:
N:Left
S:Left(int nCount);
C:CString
R:CString
F:
N:MakeMinLength
S:MakeMinLength(int nMinLength, CString strLastChar, BOOL bAddInFront);
C:CString
R:void
F:
N:MakeLastChar
S:MakeLastChar(CString strLastChar);
C:CString
R:void
F:
N:Mid
S:Mid(int nStartPos, int nCount);
C:CString
R:CString
F:
N:MakeUpper
S:MakeUpper();
C:CString
R:void
F:
N:MakeUpperOneChar
S:MakeUpperOneChar(int nPos);
C:CString
R:void
F:
N:MakeLower
S:MakeLower();
C:CString
R:void
F:
N:MakeLowerOneChar
S:MakeLowerOneChar(int nPos);
C:CString
R:void
F:
N:MakeReverse
S:MakeReverse();
C:CString
R:void
F:
N:MakeFromCHAR
S:MakeFromCHAR(int nChar, char cChar);
C:CString
R:void
F:
N:MakeFromINT
S:MakeFromINT(int nValue, BOOL bThousandPoint, CString strNewString, strNewString.Format(_T("%i"), nValue));
C:CString
R:void
F:
N:MakeFromDOUBLE
S:MakeFromDOUBLE(double dValue, int nPostComma, BOOL bThousandPoint);
C:CString
R:void
F:
N:MakeFromPERCENT
S:MakeFromPERCENT(double dValue, int nPostComma);
C:CString
R:void
F:
N:PrepareStringForXML
S:PrepareStringForXML();
C:CString
V:456
R:void
F:
N:Right
S:Right(int nCount);
C:CString
R:CString
F:
N:RemoveIntegerFromString
S:RemoveIntegerFromString(int nValue);
C:CString
R:void
F:
N:RemoveIntegersFromString
S:RemoveIntegersFromString(CString strValues);
C:CString
R:void
F:
N:ReplaceNoCase
S:ReplaceNoCase(CString strSearch, CString strReplace);
C:CString
R:void
F:
N:Replace
S:Replace(CString strSearch, CString strReplace);
C:CString
R:int
F:
N:ReplaceCharsNotInList
S:ReplaceCharsNotInList(CString strCharList, CString strReplaceWith);
C:CString
V:354
R:void
F:
N:ReplaceUmlaut
S:ReplaceUmlaut(BOOL bReplaceHTMLCodes);
C:CString
R:void
F:
N:RemoveLeadingZero
S:RemoveLeadingZero();
C:CString
R:void
F:
N:RemoveLeadingChar
S:RemoveLeadingChar(CString strRemoveChar);
C:CString
R:void
F:
N:RemoveTrailingChar
S:RemoveTrailingChar(CString strRemoveChar);
C:CString
R:void
F:
N:RTFSetFontSize
S:RTFSetFontSize(int nFontSize, int nStartPos, int nEndPos);
C:CString
R:void
F:
N:RTFSetFontName
S:RTFSetFontName(CString strName, int nStartPos, int nEndPos);
C:CString
R:void
F:
N:RTFSetStyleBold
S:RTFSetStyleBold(BOOL bBold, int nStartPos, int nEndPos);
C:CString
R:void
F:
N:RTFSetTabStops
S:RTFSetTabStops(CString strTabStops, int nStartPos, int nEndPos);
C:CString
R:void
F:
N:RTF2HTML
S:RTF2HTML(BOOL bIgnoreFontFace, BOOL bFontSizePoints, BOOL bParagraphAsLine);
C:CString
R:void
NOTE:
BOOL bFontSizePoints - Parserversion: 360
BOOL bParagraphAsLine - Parserversion: 404
F:
N:RTFTrim
S:RTFTrim();
C:CString
R:void
F:
N:ReplaceJoin
S:ReplaceJoin(CString strTable, CString strToReplace, CString strJoin);
C:CString
R:int
F:
N:SetAt
S:SetAt(int nPosition, CString strValue);
C:CString
R:void
F:
N:SetLastChars
S:SetLastChars(CString strLastChar);
C:CString
R:void
F:
N:StripHTML
S:StripHTML();
C:CString
R:void
F:
N:StripRTF
S:StripRTF();
C:CString
R:void
F:
N:Trim
S:Trim();
C:CString
R:void
F:
N:TrimLeft
S:TrimLeft();
C:CString
R:void
F:
N:TrimRight
S:TrimRight();
C:CString
R:void

F:
N:AddRow
S:AddRow(CString strContent);
C:CTable
R:int
F:
N:AddColumn
S:AddColumn(CString strName, int nType, int nColumnParameter);
C:CTable
R:int
F:
N:AddColumnsFromTable
S:AddColumnsFromTable(CTable* pTable1);
C:CTable
R:void
F:
N:AddElement
S:AddElement(int nTargetCol, int nTargetRow, int nSourceCol, int nSourceRow, CTable* pTable1);
C:CTable
R:void
F:
N:AddElements
S:AddElements(CString strTargetCols, int nTargetRow, CString strSourceCols, int nSourceRow, CTable* pTable1);
C:CTable
R:void
F:
N:AddAllRowsFromTable
S:AddAllRowsFromTable(CTable* pTable1);
C:CTable
R:void
F:
N:AddAllInexistentRowsFromTable
S:AddAllInexistentRowsFromTable(CTable* pTable1, int nIDCol);
C:CTable
R:void
F:
N:AddRowFromTable
S:AddRowFromTable(int nSourceRow, CTable* pTable1);
C:CTable
R:int
F:
N:AddElementSTRING
S:AddElementSTRING(int nColumn, int nRow, CString strValue);
C:CTable
R:void
F:
N:AddElementLINK
S:AddElementLINK(int nColumn, int nRow, int nLink);
C:CTable
R:void
F:
N:AddElementINT
S:AddElementINT(int nColumn, int nRow, int nValue);
C:CTable
R:void
F:
N:AddElementDOUBLE
S:AddElementDOUBLE(int nColumn, int nRow, double nValue);
C:CTable
R:void
F:
N:AddElementMONEY
S:AddElementMONEY(int nColumn, int nRow, CMoney mValue);
C:CTable
R:void
F:
N:AddElementDATE
S:AddElementDATE(int nColumn, int nRow, CDateTime dtValue);
C:CTable
R:void
F:
N:Aggregate
S:Aggregate(int nColAggregate, int nColValue1, int nColValue2, int nColValue3, int nColValue4, int nColValue5, int nColValue6, int nColValue7, int nColValue8, int nColValue9, int nColValue10, int nColValue11, int nColValue12, int nColValue13, int nColValue14, int nColValue15, int nColValue16);
C:CTable
R:void
F:
N:AggregateEx
S:AggregateEx(int nColAggregate, int nAggregateFunction, int nAggregateType);
C:CTable
R:void
F:
N:AggregateMultipleColumns
S:AggregateMultipleColumns(CString strColsAggregate, CString strColsValues);
C:CTable
R:void
F:
N:CalculateReport
S:CalculateReport(int nAggregateColumn, int nAggregateType, int nComputeColumn, int nComputeType, CString strFormula, int nNameColumn1, int nNameColumn2, CDateTime PeriodeStart, CDateTime PeriodeEnd);
C:CTable
R:CTable
F:
N:ClearRow
S:ClearRow(int nRow);
C:CTable
R:void
F:
N:ClearColumnElements
S:ClearColumnElements(int nCol);
C:CTable
R:void
F:
N:CopyRowFromTable
S:CopyRowFromTable(int nTargetRow, int nSourceRow, CTable* pTable1);
C:CTable
R:void
F:
N:CopyElement
S:CopyElement(int nTargetCol, int nTargetRow, int nSourceCol, int nSourceRow, CTable* pTable1);
C:CTable
R:void
F:
N:CopyElements
S:CopyElements(CString strTargetCols, int nTargetRow, CString strSourceCols, int nSourceRow, CTable* pTable1);
C:CTable
R:void
F:
N:CombineTable
S:CombineTable(CTable* pTable1, int nColIdentifier, int nColName, int nColAddValue1, int nColAddValue2, int nSortDir);
C:CTable
R:void
F:
N:CreateWordMailList
S:CreateWordMailList(CString strFile);
C:CTable
R:void
F:
N:CreateFormatingTableColumns
S:CreateFormatingTableColumns(CTable* pTable1);
C:CTable
R:void
F:
N:Col1IsBeginningOfCol2
S:Col1IsBeginningOfCol2(int nCol1, int nCol2, int nRow, BOOL bRemoveLeadingZero, BOOL bMustHaveContent);
C:CTable
R:BOOL
F:
N:DeleteAll
S:DeleteAll();
C:CTable
R:void
F:
N:DeleteAllRows
S:DeleteAllRows();
C:CTable
R:void
F:
N:DeleteAllColumns
S:DeleteAllColumns();
C:CTable
R:void
F:
N:DeleteColumn
S:DeleteColumn(int nColumn);
C:CTable
R:void
F:
N:DeleteColumnByIdentifier1
S:DeleteColumnByIdentifier1(int nIdentifier1);
C:CTable
R:void
F:
N:DeleteColumnByIdentifier2
S:DeleteColumnByIdentifier2(int nIdentifier2);
C:CTable
R:void
F:
N:DeleteRow
S:DeleteRow(int nRow);
C:CTable
R:void
F:
N:DeleteRowsColumnCondition
S:DeleteRowsColumnCondition(int nColumn1, double dCondition1, int nColumn2, double dCondition2);
C:CTable
R:int
F:
N:DeleteRowsColumnConditionNOT
S:DeleteRowsColumnConditionNOT(int nColumn1, double dCondition1);
C:CTable
R:int
F:
N:ExcelGetDocumentProperties
S:ExcelGetDocumentProperties(CString strFileName, CString* strError);
C:CTable
R:BOOL
F:
N:ExtractUniqueNumbers
S:ExtractUniqueNumbers(int nColumn);
C:CTable
R:CString
F:
N:FormatStringFromContent
S:FormatStringFromContent(CString strFormat, CString strSeparator, int nRowStart, int nRowEnd, int nColumn);
C:CTable
V:447
R:CString
F:
N:GetColumnType
S:GetColumnType(int nColumn);
C:CTable
R:int
F:
N:GetColumnIdentifier1
S:GetColumnIdentifier1(int nColumn);
C:CTable
R:int
F:
N:GetColumnIdentifier2
S:GetColumnIdentifier2(int nColumn);
C:CTable
R:int
F:
N:GetColumnParameter
S:GetColumnParameter(int nColumn);
C:CTable
R:int
F:
N:GetColumnPrecisionPreComma
S:GetColumnPrecisionPreComma(int nColumn);
C:CTable
R:int
F:
N:GetColumnPrecisionPostComma
S:GetColumnPrecisionPostComma(int nColumn);
C:CTable
R:int
F:
N:GetColumnName
S:GetColumnName(int nColumn);
C:CTable
R:CString
F:
N:GetColumnNumber
S:GetColumnNumber(CString strColumnName);
C:CTable
R:int
F:
N:GetColumnNumberInexact
S:GetColumnNumberInexact(CString strText1, int* pnExactStatus, int* pnTruncateLength);
C:CTable
R:int
F:
N:GetColumnNumberIdentifier1
S:GetColumnNumberIdentifier1(int nID);
C:CTable
R:int
F:
N:GetColumnNumberIdentifier2
S:GetColumnNumberIdentifier2(int nID);
C:CTable
R:int
F:
N:GetColumnNumberIdentifier
S:GetColumnNumberIdentifier(int nID1, int nID2);
C:CTable
R:int
F:
N:GetColumnCount
S:GetColumnCount();
C:CTable
R:int
F:
N:GetRowCount
S:GetRowCount();
C:CTable
R:int
F:
N:GetRowContent
S:GetRowContent(int nRow);
C:CTable
R:CString
F:
N:GetRowXML
S:GetRowXML(int nRow, CString strColumns, BOOL bStripRTF);
C:CTable
R:CString
F:
N:GetTableXML
S:GetTableXML(CString strColumns, BOOL bStripRTF, CString strElementSeparator);
C:CTable
R:CString
F:
N:GetRowContentSelection
S:GetRowContentSelection(int nRow, CString strColumns);
C:CTable
R:CString
F:
N:GetTableAsText
S:GetTableAsText(BOOL bShowFirstColumn, BOOL bShowColumns, BOOL bDontCheckColType);
C:CTable
R:CString
NOTE:
BOOL bDontCheckColType - Parserversion: 497
F:
N:GetElementSTRING
S:GetElementSTRING(int nColumn, int nRow, int nCodePage);
C:CTable
R:void
NOTE:
int nCodePage - Parserversion: 2114
F:
N:GetElementTEXT
S:GetElementTEXT(int nColumn, int nRow, int nCodePage);
C:CTable
R:CString
NOTE:
int nCodePage - Parserversion: 2114
F:
N:GetElementDATA
S:GetElementDATA(int nColumn, int nRow);
C:CTable
R:CString
F:
N:GetElementTABLE
S:GetElementTABLE(int nColumn, int nRow);
C:CTable
R:CTable
F:
N:GetElementBOOL
S:GetElementBOOL(int nColumn, int nRow);
C:CTable
R:BOOL
F:
N:GetElementINT
S:GetElementINT(int nColumn, int nRow);
C:CTable
R:int
F:
N:GetElementDOUBLE
S:GetElementDOUBLE(int nColumn, int nRow);
C:CTable
R:double
F:
N:GetElementDATE
S:GetElementDATE(int nColumn, int nRow);
C:CTable
R:CDateTime
F:
N:GetElementMONEY
S:GetElementMONEY(int nColumn, int nRow);
C:CTable
R:CMoney
F:
N:GetElementLinkRecord
S:GetElementLinkRecord(int nColumn, int nRow);
C:CTable
R:CTable
F:
N:GetElementLinkText
S:GetElementLinkText(int nColumn, int nRow, int nLinkColumn);
C:CTable
R:CString
F:
N:GetLinkCount
S:GetLinkCount(int nColumn, int nRow);
C:CTable
R:int
F:
N:GetCount
S:GetCount(int nColumn);
C:CTable
R:double
F:
N:GetMinRow
S:GetMinRow(int nColumn, BOOL bDontAllowZero);
C:CTable
R:int
F:
N:GetMaxRow
S:GetMaxRow(int nColumn);
C:CTable
R:int
F:
N:GetMinDOUBLE
S:GetMinDOUBLE(int nColumn, BOOL bDontAllowZero);
C:CTable
R:double
F:
N:GetMaxDOUBLE
S:GetMaxDOUBLE(int nColumn);
C:CTable
R:double
F:
N:GetSumDOUBLE
S:GetSumDOUBLE(int nColumn);
C:CTable
R:double
F:
N:GetAverageDOUBLE
S:GetAverageDOUBLE(int nColumn);
C:CTable
R:double
F:
N:GetMinMONEY
S:GetMinMONEY(int nColumn, int cCurrency);
C:CTable
R:CMoney
NOTE:
int cCurrency - Parserversion: 430
F:
N:GetMaxMONEY
S:GetMaxMONEY(int nColumn, int cCurrency);
C:CTable
R:CMoney
NOTE:
int cCurrency - Parserversion: 430
F:
N:GetSumMONEY
S:GetSumMONEY(int nCol, int cCurrency);
C:CTable
R:CMoney
NOTE:
int cCurrency - Parserversion: 430
F:
N:GetAverageMONEY
S:GetAverageMONEY(int nCol, int cCurrency);
C:CTable
R:CMoney
NOTE:
int cCurrency - Parserversion: 430
F:
N:GetMinTIME
S:GetMinTIME(int nCol, BOOL bAllowZero);
C:CTable
R:CDateTime
F:
N:GetMaxTIME
S:GetMaxTIME(int nCol);
C:CTable
R:CDateTime
F:
N:GetSumTIME
S:GetSumTIME(int nCol);
C:CTable
R:CDateTime
F:
N:GetAverageTIME
S:GetAverageTIME(int nCol);
C:CTable
R:CDateTime
F:
N:ImportStringWithFormat
S:ImportStringWithFormat(int nRow, CString strText, CString strFormat, CString strTrennzeichen);
C:CTable
R:void
F:
N:ImportStringWithFormatAllRows
S:ImportStringWithFormatAllRows(CString* pstrText1);
C:CTable
R:void
F:
N:InsertColumn
S:InsertColumn(int nPos, CString strName, int nType, int nColumnParameter);
C:CTable
R:int
F:
N:InsertRow
S:InsertRow(int nRow);
C:CTable
R:int
F:
N:IsSameRow
S:IsSameRow(int nThisRow, int nOtherRow, CTable* pOtherTable, CString strCompareCols);
C:CTable
R:BOOL
NOTE:
CString strCompareCols - Parserversion: 496
F:
N:IsSameTable
S:IsSameTable(CTable* pOtherTable);
C:CTable
V:475
R:BOOL
F:
N:LoadElementFromDisk
S:LoadElementFromDisk(int nCol, int nRow, CString strFileName);
C:CTable
R:void
F:
N:MoveColumn
S:MoveColumn(int nNewColumnNumber, int nOldColumnNumber);
C:CTable
R:void
F:
N:OpenDocumentReplaceText
S:OpenDocumentReplaceText(CString strFile);
C:CTable
R:void
F:
N:ParseAssignmentString
S:ParseAssignmentString(CString strParseString);
C:CTable
R:void
F:
N:ParseAssignmentStringRow
S:ParseAssignmentStringRow(CString strParseString, int nRow);
C:CTable
R:void
F:
N:ReadFromExcel
S:ReadFromExcel(int nStartCol, int nStartRow, int nEndCol, int nEndRow, CString strFileName, int nSheet);
C:CTable
R:void
F:
N:ReadFileAsTable
S:ReadFileAsTable(CString strFileName, BOOL bNoHeader, int nScanLines, BOOL bAlwaysUseVarstring, int nStartRow, int nEndRow);
C:CTable
R:void
F:
N:RenumberAllColumnIdentifier2
S:RenumberAllColumnIdentifier2();
C:CTable
V:434
R:void
F:
N:SaveTableToDisk
S:SaveTableToDisk(CString strFileName, int nCodePage);
C:CTable
R:void
NOTE:
int nCodePage - Parserversion: 2000
F:
N:SaveTableAsTextToDisk
S:SaveTableAsTextToDisk(CString strFileName, BOOL bWriteColumnNames, BOOL bSetQuotes, CString strSeperator, BOOL bAppend, BOOL bUTF8);
C:CTable
R:BOOL
NOTE:
BOOL bAppend - Parserversion: 488
BOOL bUTF8 - Parserversion: 504
F:
N:SaveElementToDisk
S:SaveElementToDisk(int nCol, int nRow, CString strFileName);
C:CTable
R:void
F:
N:SaveMailAttachmentsToDisk
S:SaveMailAttachmentsToDisk(int nRow, CString strPath);
C:CTable
R:CTable
F:
N:SearchLongestFit
S:SearchLongestFit(CString strSearchText, int nCol, BOOL bBinary);
C:CTable
R:int
F:
N:SetSameColumns
S:SetSameColumns(CTable* pTable1);
C:CTable
R:void
F:
N:SetColumnsForTable
S:SetColumnsForTable(int nTable);
C:CTable
R:void
F:
N:SetColumnType
S:SetColumnType(int nColumn, int nType);
C:CTable
R:void
F:
N:SetColumnName
S:SetColumnName(int nColumn, CString strName);
C:CTable
R:void
F:
N:SetColumnIdentifier1
S:SetColumnIdentifier1(int nColumn, int nIdentifier);
C:CTable
R:void
F:
N:SetColumnIdentifier2
S:SetColumnIdentifier2(int nColumn, int nIdentifier);
C:CTable
R:void
F:
N:SetColumnAlign
S:SetColumnAlign(int nColumn, int nAlign);
C:CTable
R:void
F:
N:SetColumnParameter
S:SetColumnParameter(int nColumn, int nParameter);
C:CTable
R:void
F:
N:SetColumnWidth
S:SetColumnWidth(int nColumn, int nWidth);
C:CTable
R:void
F:
N:SetColumnPrecisionPreComma
S:SetColumnPrecisionPreComma(int nColumn, int nWidth);
C:CTable
R:void
F:
N:SetColumnPrecisionPostComma
S:SetColumnPrecisionPostComma(int nColumn, int nWidth);
C:CTable
R:void
F:
N:SetColumnActive
S:SetColumnActive(int nColumn);
C:CTable
R:void
F:
N:SetColumnInActive
S:SetColumnInActive(int nColumn);
C:CTable
R:void
F:
N:SetAllColumnParameter
S:SetAllColumnParameter(int nParameter);
C:CTable
R:void
F:
N:SetAllColumnWidth
S:SetAllColumnWidth(int nWidth, int nCols);
C:CTable
R:void
F:
N:SetAllColumnPrecisionPreComma
S:SetAllColumnPrecisionPreComma(int nWidth, int nCols);
C:CTable
R:void
F:
N:SetAllColumnPrecisionPostComma
S:SetAllColumnPrecisionPostComma(int nWidth, int nCols);
C:CTable
R:void
F:
N:SetAllColumnActive
S:SetAllColumnActive(int nCols);
C:CTable
R:void
F:
N:SetAllColumnInActive
S:SetAllColumnInActive(int nCols);
C:CTable
R:void
F:
N:SetAllElementsINT
S:SetAllElementsINT(int nCol, int nValue);
C:CTable
R:void
F:
N:SetAllElementsSTRING
S:SetAllElementsSTRING(int nCol, CString strValue);
C:CTable
R:void
F:
N:SetFirstColumn
S:SetFirstColumn(int nColumn);
C:CTable
R:void
F:
N:SetLastColumn
S:SetLastColumn(int nColumn);
C:CTable
R:void
F:
N:SetRowContent
S:SetRowContent(int nRow, CString strContent);
C:CTable
R:void
F:
N:SetRowContentSelection
S:SetRowContentSelection(int nRow, CString strValues, CString strCols);
C:CTable
R:void
F:
N:SetElementDATA
S:SetElementDATA(int nColumn, int nRow, CString strContent);
C:CTable
R:void
F:
N:SetElementSTRING
S:SetElementSTRING(int nColumn, int nRow, CString strContent);
C:CTable
R:void
F:
N:SetElementTEXT
S:SetElementTEXT(int nColumn, int nRow, CString strContent);
C:CTable
R:void
F:
N:SetElementTABLE
S:SetElementTABLE(int nColumn, int nRow, CTable* pTable1);
C:CTable
R:void
F:
N:SetElementBOOL
S:SetElementBOOL(int nColumn, int nRow, BOOL bValue);
C:CTable
R:void
F:
N:SetElementint
S:SetElementint(int nColumn, int nRow, int nValue);
C:CTable
R:void
F:
N:SetElementINT
S:SetElementINT(int nColumn, int nRow, int nValue);
C:CTable
R:void
F:
N:SetElementDOUBLE
S:SetElementDOUBLE(int nColumn, int nRow, double nValue);
C:CTable
R:void
F:
N:SetElementMONEY
S:SetElementMONEY(int nColumn, int nRow, CMoney mValue);
C:CTable
R:void
F:
N:SetElementDATE
S:SetElementDATE(int nColumn, int nRow, CDateTime dtValue);
C:CTable
R:void
F:
N:SetElementFromBase64
S:SetElementFromBase64(int nColumn, int nRow, CString strBase64);
C:CTable
V:2115
R:void
F:
N:SortTable
S:SortTable(int nDir, int nCol1, int nCol2, int nCol3, int nCol4, BOOL bSortAsTextAlways);
C:CTable
R:void
NOTE:
BOOL bSortAsTextAlways - Parserversion: 422
F:
N:SortTableSpecial
S:SortTableSpecial(CString strOrder);
C:CTable
R:void
F:
N:SetActiveRow
S:SetActiveRow(int nRow);
C:CTable
R:void
F:
N:SetActiveRowFromItem
S:SetActiveRowFromItem(int nItem);
C:CTable
R:void
F:
N:SetActiveRowNone
S:SetActiveRowNone();
C:CTable
R:void
F:
N:SearchDate
S:SearchDate(CDateTime dtDate, int nCol, int nStartPos);
C:CTable
R:int
F:
N:SearchMoney
S:SearchMoney(CMoney mValue, int nCol, int nStartPos);
C:CTable
R:int
F:
N:SearchNumber
S:SearchNumber(int nNumber, int nCol, int nStartPos);
C:CTable
R:int
F:
N:SearchNumberLast
S:SearchNumberLast(int nNumber, int nCol, int nMaxRow);
C:CTable
R:int
F:
N:Search2Numbers
S:Search2Numbers(int nNumber1, int nCol1, int nNumber2, int nCol2, int nStartPos);
C:CTable
R:int
F:
N:Search2NumbersLast
S:Search2NumbersLast(int nNumber1, int nCol1, int nNumber2, int nCol2);
C:CTable
R:int
F:
N:Search3Numbers
S:Search3Numbers(int nNumber1, int nCol1, int nNumber2, int nCol2, int nNumber3, int nCol3, int nStartPos);
C:CTable
R:int
F:
N:Search3NumbersLast
S:Search3NumbersLast(int nNumber1, int nCol1, int nNumber2, int nCol2, int nNumber3, int nCol3);
C:CTable
R:int
F:
N:SearchText
S:SearchText(CString strText1, int nCol, int nStartPos, BOOL bBinary);
C:CTable
R:int
F:
N:SearchTextBeginning
S:SearchTextBeginning(CString strText1, int nCol, int nStartPos, BOOL bBinary);
C:CTable
R:int
F:
N:SearchTextBinary
S:SearchTextBinary(CString strText1, int nCol, BOOL bBeginning, int* pnLastPosition);
C:CTable
R:int
F:
N:SearchNumberBinary
S:SearchNumberBinary(int nNumber, int nCol, int* pnLastPosition);
C:CTable
V:405
R:int
F:
N:SearchTextInexact
S:SearchTextInexact(CString strText1, int nCol, int nStartPos, int* pnExactStatus, int* pnTruncateLength);
C:CTable
R:int
F:
N:SearchNumberAndMoney
S:SearchNumberAndMoney(int nNumber1, int nCol1, CMoney mMoney1, int nCol2, int nStartPos);
C:CTable
R:int
F:
N:SearchNumberAndText
S:SearchNumberAndText(int nNumber1, int nCol1, CString strText1, int nCol2, int nStartPos);
C:CTable
R:int
F:
N:Search2NumbersAndText
S:Search2NumbersAndText(int nNumber1, int nCol1, int nNumber2, int nCol2, CString strText1, int nCol3, int nStartPos);
C:CTable
R:int
F:
N:Search3NumbersAndText
S:Search3NumbersAndText(int nNumber1, int nCol1, int nNumber2, int nCol2, int nNumber3, int nCol3, CString strText1, int nCol4, int nStartPos);
C:CTable
R:int
F:
N:Search4NumbersAndText
S:Search4NumbersAndText(int nNumber1, int nCol1, int nNumber2, int nCol2, int nNumber3, int nCol3, int nNumber4, int nCol4, CString strText1, int nCol5, int nStartPos);
C:CTable
R:int
F:
N:Search5NumbersAndText
S:Search5NumbersAndText(int nNumber1, int nCol1, int nNumber2, int nCol2, int nNumber3, int nCol3, int nNumber4, int nCol4, int nNumber5, int nCol5, CString strText1, int nCol6, int nStartPos);
C:CTable
R:int
F:
N:SearchTextMultiple
S:SearchTextMultiple(CString strText1, CString strText2, CString strText3, CString strText4, CString strText5, int nCol1, int nCol2, int nCol3, int nCol4, int nCol5, int nStartPos);
C:CTable
R:int
F:
N:SetOutputCurrency
S:SetOutputCurrency(CString strCurrency, CMoney Money1, int nCurrency);
C:CTable
R:void
F:
N:SetOutputCurrencyNumber
S:SetOutputCurrencyNumber(int nCurrency);
C:CTable
R:void
F:
N:SetTableAsText
S:SetTableAsText(CString strText, BOOL bImportColumns);
C:CTable
R:void
F:
N:WordGetDocumentProperties
S:WordGetDocumentProperties(CString strFileName, CString* strError);
C:CTable
R:BOOL
F:
N:WordGetTextBetweenTagsAsRTF
S:WordGetTextBetweenTagsAsRTF(CString strFile, BOOL bAutoClose);
C:CTable
R:void
F:
N:WordReplaceTextBetweenTags
S:WordReplaceTextBetweenTags(CString strFile, BOOL bAutoClose, long nColTags, long nColReplacement, BOOL bFormat);
C:CTable
R:void
F:
N:WordReplaceTextBetweenTagsAsRTF
S:WordReplaceTextBetweenTagsAsRTF(CString strFile, BOOL bAutoClose, long nColTags, long nColReplacement, BOOL bFormat);
C:CTable
R:void
F:
N:WordReplaceTextAsRTF
S:WordReplaceTextAsRTF(CString strFile, BOOL bAutoClose, BOOL bFormat);
C:CTable
R:void
F:
N:WordReplacePlaceholders
S:WordReplacePlaceholders(CString strFile, BOOL bAutoClose, long nColPlaceholder, long nColReplacement, BOOL bFormat);
C:CTable
R:void
F:
N:WordReplacePlaceholdersInTextboxes
S:WordReplacePlaceholdersInTextboxes(CString strFile, BOOL bAutoClose, long nColPlaceholder, long nColReplacement, BOOL bFormat);
C:CTable
R:void
F:
N:WordReplacePlaceholdersInMaintext
S:WordReplacePlaceholdersInMaintext(CString strFile, BOOL bAutoClose, long nColPlaceholder, long nColReplacement, BOOL bFormat);
C:CTable
R:void
F:
N:WordReplacePlaceholdersInHeaders
S:WordReplacePlaceholdersInHeaders(CString strFile, BOOL bAutoClose, long nColPlaceholder, long nColReplacement, BOOL bFormat);
C:CTable
R:void
F:
N:WordReplaceFormFields
S:WordReplaceFormFields(CString strFilename);
C:CTable
R:void
F:
N:WordInsertPictures
S:WordInsertPictures(CString strFile);
C:CTable
R:void
F:
N:WordInsertTable
S:WordInsertTable(CString strFile, CString strPlaceholder, int nRowGroupSize, BOOL bBorderVisible);
C:CTable
R:void
NOTE:
BOOL bBorderVisible - Parserversion: 361
F:
N:WriteToExcel
S:WriteToExcel(int nStartCol, int nStartRow, CString strSaveAs, CTable* pFormatTable, CString strSheetname, CString strOpenOriginalFile, BOOL bOnlyReplaceValidContent, int nSheetNumber);
C:CTable
R:void