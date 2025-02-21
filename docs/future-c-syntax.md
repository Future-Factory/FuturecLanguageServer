# Future-C Syntax

- Language syntax is largerly C-Like.

- A unit of code is called "Script". It can be executed as a whole or as a part of a larger script.

- Each file can contain multiple scripts.

- Script Definition:
```
	SCRIPT:int nNumber, String strName, int nModule1, int nModule2, int nModule3, String strVerzeichnis, String strBitmapFile, int nMinUsertype, int nInActive, String strBitmapFile2, String strDashboardDirectory
	<Code>
	ENDSCRIPT
```
Anything outside of the script definition is ignored.

Code:
```
	statement1; statement2; statement3; ...
```	

Statement:
```
	<Declaration> | <Assignment> | <FunctionCall> | <IfStatement> | <WhileStatement> | <ForEachRowStatement> | <CommentStatement> | <IncludeScriptStatement> | return
```	

Declaration:
```
	<type> <name> |
	<type> <name> = <expression>
```

Assignment:
```
	<name> = <expression>
```

Expression:
```
	constant | variable | FunctionCall | MathematicalExpression | StringConcatenation
```

MathematicalExpression:
```
	<expression> <mathematical_operator> <expression> |
	<integer_variable> ++ | <integer_variable> -- | <double_variable> ++ | <double_variable> --
```

mathematical_operator:
```
	+ | - | * | / | %
```

StringConcatenation:
```
	<string_variable> + <string_variable>
```

FunctionCall:
```
	<name>(<parameters>)
```

IfStatement:
```
	if (<condition>) {
		<statements>
	} |
	if (<condition>) {
		<statements>
	} else {
		<statements>
	}
```

WhileStatement:
```
	while (<condition>) {
		<statements>
	}
```

condition:
```
	<expression> |
	<expression> <comparison_operator> <expression> |
	<condition> AND <condition> |
	<condition> OR <condition>
```

comparison_operator:
```
	== | != | > | < | >= | <=
```

ForEachRowStatement:
```
	foreachrow(<table>;<row_variable>;bool bShowProgressbar) {
		<statements>
	} |
	foreachrowreverse(<table>;<row_variable>;bool bShowProgressbar) {
		<statements>
	}
```

CommentStatement:
```
	// Comment
	|
	/* Comment */
```

IncludeScriptStatement:
```
	#includescript <number>
```
### Types

simple types:
```
	int | double | BOOL
```

Object types (these types have methods that can be called):
```
	CString | CTable | CMoney | CDateTime
```

### Distinctive Language Features

- There is a semicolumn at the end of each statement. Even after curly braces.
	- Exceptions:
		- #includescript statement
		- comment statement
		- if statement if it followed by else statement
- Variable names are case-insensitive.
- The return statement ends the execution of the entire script. Even if it is called inside included scripts. It should be avoided in scripts that can be included.

### Coding Style

- Use Hungarian notation for variable names.
- Domain language is German. All variable names and function names should be in German. All comments should be in German.

### Script-defined functions

Function Definition:
```
	FUNCTION: <return_type> <name>(<parameters>);
		<code>
		[funcreturn <expression>;]
	ENDFUNCTION;
```
Return type can be any of the simple types or any of the object types or void.

Function Call:
```
	Call:<name>(<parameters>)
```


