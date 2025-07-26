import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getLanguages = async () => {
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";
  try {
    const response = await fetch(`${backendURL}/api/languages`);
    if (!response.ok) {
      throw new Error("Failed to fetch languages");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching languages:", error);
    return [];
  }
};

export const monacoEditorRules = [
    //Text
    { token: "", background: "212121" },
    { token: "comment", foreground: "7f848e", fontStyle: "italic" },
    { token: "string", foreground: "e06c75" },
    { token: "number", foreground: "d19a66" },
    { token: "keyword", foreground: "c678dd" },
    { token: "type", foreground: "e5c07b" },
    { token: "function", foreground: "61afef" },
    { token: "variable", foreground: "d55fde" },
    { token: "identifier", foreground: "d55fde" },

    // C/C++
    { token: "keyword.c", foreground: "c678dd" },
    { token: "type.c", foreground: "e5c07b" },
    { token: "function.c", foreground: "61afef" },
    { token: "variable.c", foreground: "d55fde" },
    { token: "preprocessor.c", foreground: "e06c75" },

    // Java
    { token: "keyword.java", foreground: "c678dd" },
    { token: "type.java", foreground: "e5c07b" },
    { token: "function.java", foreground: "61afef" },
    { token: "variable.java", foreground: "d55fde" },
    { token: "annotation.java", foreground: "56b6c2" },

    // Python
    { token: "keyword.python", foreground: "c678dd" },
    { token: "type.python", foreground: "e5c07b" },
    { token: "function.python", foreground: "61afef" },
    { token: "variable.python", foreground: "d55fde" },
    { token: "string.python", foreground: "e06c75" },
    { token: "number.python", foreground: "d19a66" },
    { token: "decorator.python", foreground: "56b6c2" },

    // Go
    { token: "keyword.go", foreground: "c678dd" },
    { token: "type.go", foreground: "e5c07b" },
    { token: "function.go", foreground: "61afef" },
    { token: "variable.go", foreground: "d55fde" },
    { token: "string.go", foreground: "e06c75" },
    { token: "number.go", foreground: "d19a66" },

    // Rust
    { token: "keyword.rust", foreground: "c678dd" },
    { token: "type.rust", foreground: "e5c07b" },
    { token: "function.rust", foreground: "61afef" },
    { token: "variable.rust", foreground: "d55fde" },
    { token: "macro.rust", foreground: "56b6c2" },

    // JavaScript/TypeScript
    { token: "keyword.js", foreground: "c678dd" },
    { token: "type.js", foreground: "e5c07b" },
    { token: "function.js", foreground: "61afef" },
    { token: "variable.js", foreground: "d55fde" },
    { token: "string.js", foreground: "e06c75" },
    { token: "number.js", foreground: "d19a66" },
    { token: "keyword.ts", foreground: "c678dd" },
    { token: "type.ts", foreground: "e5c07b" },
    { token: "function.ts", foreground: "61afef" },
    { token: "variable.ts", foreground: "d55fde" },
    { token: "string.ts", foreground: "e06c75" },
    { token: "number.ts", foreground: "d19a66" },
]

export const monacoEditorColors = {
    "focusBorder": "#292d36",
    "foreground": "#3d424d",
    "widget.shadow": "#00010a",
    "selection.background": "#161f2afd",
    "textBlockQuote.background": "#0d1016",
    "textLink.foreground": "#e65050",
    "textLink.activeForeground": "#e65050",
    "textPreformat.foreground": "#b3b1ad",
    "button.background": "#e65050",
    "button.foreground": "#0a0e14",
    "button.hoverBackground": "#e14b4b",
    "dropdown.background": "#0d1016",
    "dropdown.foreground": "#3d424d",
    "dropdown.border": "#191e25",
    "input.background": "#0d1016",
    "input.border": "#191e25",
    "input.foreground": "#b3b1ad",
    "input.placeholderForeground": "#2e323c",
    "inputOption.activeBorder": "#e65050",
    "inputValidation.errorBackground": "#0a0e14",
    "inputValidation.errorBorder": "#ff3333",
    "inputValidation.infoBackground": "#0a0e14",
    "inputValidation.infoBorder": "#39bae6",
    "inputValidation.warningBackground": "#0a0e14",
    "inputValidation.warningBorder": "#ffb454",
    "scrollbar.shadow": "#01060e",
    "scrollbarSlider.background": "#3d424d66",
    "scrollbarSlider.hoverBackground": "#3d424d99",
    "scrollbarSlider.activeBackground": "#3d424db3",
    "badge.background": "#e65050",
    "badge.foreground": "#0a0e14",
    "progressBar.background": "#e65050",
    "list.activeSelectionBackground": "#01060e",
    "list.activeSelectionForeground": "#3d424d",
    "list.focusBackground": "#01060e",
    "list.focusForeground": "#3d424d",
    "list.highlightForeground": "#e65050",
    "list.hoverBackground": "#01060e",
    "list.hoverForeground": "#3d424d",
    "list.inactiveSelectionBackground": "#01060e",
    "list.inactiveSelectionForeground": "#3d424d",
    "list.invalidItemForeground": "#2e323c",
    "activityBar.background": "#0a0e14",
    "activityBar.foreground": "#3d424dcc",
    "activityBar.border": "#0a0e14",
    "activityBarBadge.background": "#e65050",
    "activityBarBadge.foreground": "#0a0e14",
    "sideBar.background": "#0a0e14",
    "sideBar.border": "#0a0e14",
    "sideBarTitle.foreground": "#3d424d",
    "sideBarSectionHeader.background": "#0a0e14",
    "sideBarSectionHeader.foreground": "#3d424d",
    "editorGroup.border": "#01060e",
    "editorGroupHeader.noTabsBackground": "#0a0e14",
    "editorGroupHeader.tabsBackground": "#0a0e14",
    "editorGroupHeader.tabsBorder": "#0a0e14",
    "tab.activeBackground": "#0a0e14",
    "tab.activeForeground": "#b3b1ad",
    "tab.border": "#0a0e14",
    "tab.activeBorder": "#e65050",
    "tab.unfocusedActiveBorder": "#3d424d",
    "tab.inactiveBackground": "#0a0e14",
    "tab.inactiveForeground": "#3d424d",
    "tab.unfocusedActiveForeground": "#3d424d",
    "tab.unfocusedInactiveForeground": "#3d424d",
    "editor.background": "#0a0e14",
    "editor.foreground": "#b3b1ad",
    "editorLineNumber.foreground": "#3d424d99",
    "editorLineNumber.activeForeground": "#3d424de6",
    "editorCursor.foreground": "#e65050",
    "editor.selectionBackground": "#161f2a",
    "editor.inactiveSelectionBackground": "#121922",
    "editor.selectionHighlightBackground": "#121922",
    "editor.selectionHighlightBorder": "#1d2936",
    "editor.wordHighlightBackground": "#121922",
    "editor.wordHighlightStrongBackground": "#e6505033",
    "editor.findMatchBackground": "#e650500d",
    "editor.findMatchBorder": "#e65050",
    "editor.findMatchHighlightBackground": "#e650500d",
    "editor.findMatchHighlightBorder": "#e6505059",
    "editor.findRangeHighlightBackground": "#121922",
    "editor.findRangeHighlightBorder": "#0a0e1400",
    "editor.lineHighlightBackground": "#01060e",
    "editorLink.activeForeground": "#e65050",
    "editor.rangeHighlightBackground": "#01060e",
    "editorWhitespace.foreground": "#3d424d99",
    "editorIndentGuide.background": "#3d424d66",
    "editorIndentGuide.activeBackground": "#3d424db3",
    "editorRuler.foreground": "#3d424d66",
    "editorCodeLens.foreground": "#626a73",
    "editorBracketMatch.background": "#3d424d4d",
    "editorBracketMatch.border": "#3d424d99",
    "editorOverviewRuler.border": "#01060e",
    "editorOverviewRuler.modifiedForeground": "#6994bf99",
    "editorOverviewRuler.addedForeground": "#91b36299",
    "editorOverviewRuler.deletedForeground": "#d96c7599",
    "editorOverviewRuler.errorForeground": "#ff3333",
    "editorOverviewRuler.warningForeground": "#e65050",
    "editorError.foreground": "#ff3333",
    "editorWarning.foreground": "#e65050",
    "editorGutter.modifiedBackground": "#6994bf99",
    "editorGutter.addedBackground": "#91b36299",
    "editorGutter.deletedBackground": "#d96c7599",
    "diffEditor.insertedTextBackground": "#c2d94c26",
    "diffEditor.removedTextBackground": "#f2966826",
    "editorWidget.background": "#0d1016",
    "editorSuggestWidget.background": "#0d1016",
    "editorSuggestWidget.border": "#000000",
    "editorSuggestWidget.highlightForeground": "#e65050",
    "editorSuggestWidget.selectedBackground": "#01060e",
    "editorHoverWidget.background": "#0d1016",
    "editorHoverWidget.border": "#000000",
    "debugExceptionWidget.border": "#01060e",
    "debugExceptionWidget.background": "#0d1016",
    "editorMarkerNavigation.background": "#0d1016",
    "peekView.border": "#01060e",
    "peekViewEditor.background": "#0d1016",
    "peekViewEditor.matchHighlightBackground": "#e6505033",
    "peekViewResult.background": "#0d1016",
    "peekViewResult.fileForeground": "#3d424d",
    "peekViewResult.matchHighlightBackground": "#e6505033",
    "peekViewTitle.background": "#0d1016",
    "peekViewTitleDescription.foreground": "#3d424d",
    "peekViewTitleLabel.foreground": "#3d424d",
    "panel.background": "#0a0e14",
    "panel.border": "#01060e",
    "panelTitle.activeBorder": "#e65050",
    "panelTitle.activeForeground": "#b3b1ad",
    "panelTitle.inactiveForeground": "#3d424d",
    "statusBar.background": "#0a0e14",
    "statusBar.foreground": "#3d424d",
    "statusBar.border": "#0a0e14",
    "statusBar.debuggingBackground": "#f29668",
    "statusBar.debuggingForeground": "#0a0e14",
    "statusBar.noFolderBackground": "#0d1016",
    "statusBarItem.activeBackground": "#00000050",
    "statusBarItem.hoverBackground": "#00000030",
    "statusBarItem.prominentBackground": "#01060e",
    "statusBarItem.prominentHoverBackground": "#00000030",
    "titleBar.activeBackground": "#0a0e14",
    "titleBar.activeForeground": "#b3b1ad",
    "titleBar.inactiveBackground": "#0a0e14",
    "titleBar.inactiveForeground": "#3d424d",
    "titleBar.border": "#0a0e14",
    "extensionButton.prominentForeground": "#0a0e14",
    "extensionButton.prominentBackground": "#e65050",
    "extensionButton.prominentHoverBackground": "#e14b4b",
    "pickerGroup.border": "#01060e",
    "pickerGroup.foreground": "#242831",
    "debugToolBar.background": "#0d1016",
    "walkThrough.embeddedEditorBackground": "#0d1016",
    "gitDecoration.modifiedResourceForeground": "#6994bfb3",
    "gitDecoration.deletedResourceForeground": "#d96c75b3",
    "gitDecoration.untrackedResourceForeground": "#91b362b3",
    "gitDecoration.ignoredResourceForeground": "#242831",
    "gitDecoration.conflictingResourceForeground": "#d96c75b3",
    "gitDecoration.submoduleResourceForeground": "#ffee99b3",
    "settings.headerForeground": "#b3b1ad",
    "settings.modifiedItemIndicator": "#6994bf",
    "terminal.background": "#0a0e14",
    "terminal.foreground": "#b3b1ad",
    "terminal.ansiBlack": "#01060e",
    "terminal.ansiRed": "#ea6c73",
    "terminal.ansiGreen": "#91b362",
    "terminal.ansiYellow": "#f9af4f",
    "terminal.ansiBlue": "#53bdfa",
    "terminal.ansiMagenta": "#fae994",
    "terminal.ansiCyan": "#90e1c6",
    "terminal.ansiWhite": "#c7c7c7",
    "terminal.ansiBrightBlack": "#686868",
    "terminal.ansiBrightRed": "#f07178",
    "terminal.ansiBrightGreen": "#c2d94c",
    "terminal.ansiBrightYellow": "#ffb454",
    "terminal.ansiBrightBlue": "#59c2ff",
    "terminal.ansiBrightMagenta": "#ffee99",
    "terminal.ansiBrightCyan": "#95e6cb",
    "terminal.ansiBrightWhite": "#ffffff",
    "editorGroup.emptyBackground": "#0d1016"
}

const pythonBuiltins = [
  { label: "abs", insertText: "abs(${1:x})", documentation: "Return the absolute value of a number" },
  { label: "all", insertText: "all(${1:iterable})", documentation: "Return True if all elements of the iterable are true" },
  { label: "any", insertText: "any(${1:iterable})", documentation: "Return True if any element of the iterable is true" },
  { label: "ascii", insertText: "ascii(${1:object})", documentation: "Return a string with only ASCII characters" },
  { label: "bin", insertText: "bin(${1:number})", documentation: "Convert an integer to a binary string" },
  { label: "bool", insertText: "bool(${1:x})", documentation: "Convert a value to a Boolean" },
  { label: "breakpoint", insertText: "breakpoint()", documentation: "Drop into the debugger at the call site" },
  { label: "bytearray", insertText: "bytearray(${1:source})", documentation: "Return a new array of bytes" },
  { label: "bytes", insertText: "bytes(${1:source})", documentation: "Return a new 'bytes' object" },
  { label: "callable", insertText: "callable(${1:object})", documentation: "Return whether the object is callable" },
  { label: "chr", insertText: "chr(${1:i})", documentation: "Return the string representing a character" },
  { label: "classmethod", insertText: "classmethod(${1:function})", documentation: "Convert a method to a class method" },
  { label: "compile", insertText: "compile(${1:source}, ${2:filename}, ${3:mode})", documentation: "Compile source into a code object" },
  { label: "complex", insertText: "complex(${1:real}, ${2:imag})", documentation: "Create a complex number" },
  { label: "delattr", insertText: "delattr(${1:object}, ${2:name})", documentation: "Deletes an attribute" },
  { label: "dict", insertText: "dict(${1:kwargs})", documentation: "Creates a dictionary" },
  { label: "dir", insertText: "dir(${1:object})", documentation: "Return a list of attributes" },
  { label: "divmod", insertText: "divmod(${1:a}, ${2:b})", documentation: "Return the quotient and the remainder" },
  { label: "enumerate", insertText: "enumerate(${1:iterable}, ${2:start=0})", documentation: "Return an enumerate object" },
  { label: "eval", insertText: "eval(${1:expression})", documentation: "Evaluate the expression" },
  { label: "exec", insertText: "exec(${1:object})", documentation: "Execute Python code dynamically" },
  { label: "filter", insertText: "filter(${1:function}, ${2:iterable})", documentation: "Construct an iterator with items that pass the function" },
  { label: "float", insertText: "float(${1:x})", documentation: "Convert a string or number to a floating point number" },
  { label: "format", insertText: "format(${1:value}, ${2:format_spec})", documentation: "Return value formatted as per format_spec" },
  { label: "frozenset", insertText: "frozenset(${1:iterable})", documentation: "Return a frozenset object" },
  { label: "getattr", insertText: "getattr(${1:object}, ${2:name})", documentation: "Return the value of a named attribute" },
  { label: "globals", insertText: "globals()", documentation: "Return the global symbol dictionary" },
  { label: "hasattr", insertText: "hasattr(${1:object}, ${2:name})", documentation: "Check if object has attribute" },
  { label: "hash", insertText: "hash(${1:object})", documentation: "Return the hash value of the object" },
  { label: "help", insertText: "help(${1:object})", documentation: "Invoke the help system" },
  { label: "hex", insertText: "hex(${1:number})", documentation: "Convert an integer to a hexadecimal string" },
  { label: "id", insertText: "id(${1:object})", documentation: "Return the identity of an object" },
  { label: "input", insertText: "input(${1:prompt})", documentation: "Read a line from input" },
  { label: "int", insertText: "int(${1:x})", documentation: "Convert a string or number to an integer" },
  { label: "isinstance", insertText: "isinstance(${1:object}, ${2:type})", documentation: "Check if object is an instance of a class" },
  { label: "issubclass", insertText: "issubclass(${1:cls}, ${2:class_or_tuple})", documentation: "Check class inheritance" },
  { label: "iter", insertText: "iter(${1:object})", documentation: "Return an iterator object" },
  { label: "len", insertText: "len(${1:object})", documentation: "Return the length" },
  { label: "list", insertText: "list(${1:iterable})", documentation: "Create a list" },
  { label: "locals", insertText: "locals()", documentation: "Return a dictionary of local symbol table" },
  { label: "map", insertText: "map(${1:function}, ${2:iterable})", documentation: "Apply a function to all items" },
  { label: "max", insertText: "max(${1:iterable})", documentation: "Return the largest item" },
  { label: "memoryview", insertText: "memoryview(${1:object})", documentation: "Create a memory view object" },
  { label: "min", insertText: "min(${1:iterable})", documentation: "Return the smallest item" },
  { label: "next", insertText: "next(${1:iterator})", documentation: "Retrieve next item from the iterator" },
  { label: "object", insertText: "object()", documentation: "Return a new featureless object" },
  { label: "oct", insertText: "oct(${1:number})", documentation: "Convert integer to octal string" },
  { label: "open", insertText: "open(${1:file}, ${2:mode='r'})", documentation: "Open a file and return a stream" },
  { label: "ord", insertText: "ord(${1:char})", documentation: "Return the Unicode code point" },
  { label: "pow", insertText: "pow(${1:x}, ${2:y})", documentation: "Return x raised to the power y" },
  { label: "print", insertText: "print(${1:message})", documentation: "Prints a message to the console" },
  { label: "property", insertText: "property(${1:fget})", documentation: "Return a property attribute" },
  { label: "range", insertText: "range(${1:stop})", documentation: "Create a range object" },
  { label: "repr", insertText: "repr(${1:object})", documentation: "Return a string representation" },
  { label: "reversed", insertText: "reversed(${1:seq})", documentation: "Return a reversed iterator" },
  { label: "round", insertText: "round(${1:number}, ${2:ndigits})", documentation: "Round a number" },
  { label: "set", insertText: "set(${1:iterable})", documentation: "Return a new set object" },
  { label: "setattr", insertText: "setattr(${1:object}, ${2:name}, ${3:value})", documentation: "Set an attribute on object" },
  { label: "slice", insertText: "slice(${1:start}, ${2:stop}, ${3:step})", documentation: "Create a slice object" },
  { label: "sorted", insertText: "sorted(${1:iterable})", documentation: "Return a sorted list" },
  { label: "staticmethod", insertText: "staticmethod(${1:function})", documentation: "Convert method to static method" },
  { label: "str", insertText: "str(${1:object})", documentation: "Return string version of object" },
  { label: "sum", insertText: "sum(${1:iterable})", documentation: "Return the sum of a 'start' value and an iterable" },
  { label: "super", insertText: "super()", documentation: "Return a proxy object that delegates method calls" },
  { label: "tuple", insertText: "tuple(${1:iterable})", documentation: "Create a tuple" },
  { label: "type", insertText: "type(${1:object})", documentation: "Return the type of object" },
  { label: "vars", insertText: "vars(${1:object})", documentation: "Return __dict__ attribute" },
  { label: "zip", insertText: "zip(${1:*iterables})", documentation: "Aggregate elements from iterables" },
  { label: "__import__", insertText: "__import__(${1:name})", documentation: "Import a module" }
].map(fn => ({
  ...fn,
  kind: 25,
  insertTextRules: 4
}));

const pythonKeywords = [
  {
    label: "if",
    insertText: "if ${1:condition}:\n\t${2:pass}",
    documentation: "Conditional execution: if the condition is true, execute the block"
  },
  {
    label: "elif",
    insertText: "elif ${1:condition}:\n\t${2:pass}",
    documentation: "Else if condition for an if statement"
  },
  {
    label: "else",
    insertText: "else:\n\t${1:pass}",
    documentation: "Else block after if or elif"
  },
  {
    label: "for",
    insertText: "for ${1:item} in ${2:iterable}:\n\t${3:pass}",
    documentation: "For loop to iterate over a sequence"
  },
  {
    label: "while",
    insertText: "while ${1:condition}:\n\t${2:pass}",
    documentation: "While loop that runs as long as the condition is true"
  },
  {
    label: "def",
    insertText: "def ${1:function_name}(${2:params}):\n\t${3:pass}",
    documentation: "Function definition"
  },
  {
    label: "class",
    insertText: "class ${1:ClassName}(${2:object}):\n\tdef __init__(self, ${3:args}):\n\t\t${4:pass}",
    documentation: "Class definition with constructor"
  },
  {
    label: "with",
    insertText: "with ${1:expression} as ${2:variable}:\n\t${3:pass}",
    documentation: "Context manager block (e.g., open file safely)"
  },
  {
    label: "try",
    insertText: "try:\n\t${1:pass}\nexcept ${2:Exception} as ${3:e}:\n\t${4:pass}",
    documentation: "Try block for catching exceptions"
  },
  {
    label: "except",
    insertText: "except ${1:Exception} as ${2:e}:\n\t${3:pass}",
    documentation: "Catch a specific exception"
  },
  {
    label: "finally",
    insertText: "finally:\n\t${1:pass}",
    documentation: "Block that always executes after try/except"
  },
  {
    label: "raise",
    insertText: "raise ${1:Exception}(${2:'message'})",
    documentation: "Raise an exception"
  },
  {
    label: "assert",
    insertText: "assert ${1:condition}, ${2:'error message'}",
    documentation: "Debugging check that throws AssertionError"
  },
  {
    label: "import",
    insertText: "import ${1:module}",
    documentation: "Import a module"
  },
  {
    label: "from-import",
    insertText: "from ${1:module} import ${2:object}",
    documentation: "Import specific object(s) from a module"
  },
  {
    label: "return",
    insertText: "return ${1:value}",
    documentation: "Return a value from a function"
  },
  {
    label: "yield",
    insertText: "yield ${1:value}",
    documentation: "Yield a value from a generator"
  },
  {
    label: "lambda",
    insertText: "lambda ${1:args}: ${2:expression}",
    documentation: "Anonymous function definition"
  },
  {
    label: "pass",
    insertText: "pass",
    documentation: "Do nothing — placeholder block"
  },
  {
    label: "break",
    insertText: "break",
    documentation: "Exit the nearest enclosing loop"
  },
  {
    label: "continue",
    insertText: "continue",
    documentation: "Skip the rest of the loop and continue with next iteration"
  },
  {
    label: "global",
    insertText: "global ${1:variable}",
    documentation: "Declare a global variable inside a function"
  },
  {
    label: "nonlocal",
    insertText: "nonlocal ${1:variable}",
    documentation: "Declare a nonlocal (enclosing scope) variable"
  },
  {
    label: "match",
    insertText: "match ${1:subject}:\n\tcase ${2:pattern}:\n\t\t${3:pass}",
    documentation: "Structural pattern matching introduced in Python 3.10"
  },
  {
    label: "case",
    insertText: "case ${1:pattern}:\n\t${2:pass}",
    documentation: "Pattern matching case block"
  },
  {
    label: "async",
    insertText: "async def ${1:func}(${2:params}):\n\t${3:pass}",
    documentation: "Define an asynchronous function"
  },
  {
    label: "await",
    insertText: "await ${1:async_func}()",
    documentation: "Pause execution until async function completes"
  },
  {
    label: "del",
    insertText: "del ${1:variable}",
    documentation: "Delete a variable or object property"
  },
  {
    label: "is",
    insertText: "${1:a} is ${2:b}",
    documentation: "Identity comparison"
  },
  {
    label: "in",
    insertText: "${1:element} in ${2:container}",
    documentation: "Membership test"
  },
  {
    label: "not",
    insertText: "not ${1:condition}",
    documentation: "Logical negation"
  },
  {
    label: "and",
    insertText: "${1:condition1} and ${2:condition2}",
    documentation: "Logical AND"
  },
  {
    label: "or",
    insertText: "${1:condition1} or ${2:condition2}",
    documentation: "Logical OR"
  }
].map(keyword => ({
  ...keyword,
  kind: 25,
  insertTextRules: 4
}));

export const allPythonSnippets = [...pythonBuiltins, ...pythonKeywords];

const cKeywords = [
  "auto", "break", "case", "char", "const", "continue", "default",
  "do", "double", "else", "enum", "extern", "float", "for", "goto",
  "if", "inline", "int", "long", "register", "restrict", "return",
  "short", "signed", "sizeof", "static", "struct", "switch", "typedef",
  "union", "unsigned", "void", "volatile", "while", "_Alignas", "_Alignof",
  "_Atomic", "_Bool", "_Complex", "_Generic", "_Imaginary", "_Noreturn",
  "_Static_assert", "_Thread_local"
].map(kw => ({
  label: kw,
  kind: 25,
  insertText: kw,
  insertTextRules: 4,
  documentation: `C keyword: ${kw}`
}));

const cSnippets = [
  {
    label: "if",
    insertText: "if (${1:condition}) {\n\t${2:// code}\n}",
    documentation: "Conditional statement"
  },
  {
    label: "else",
    insertText: "else {\n\t${1:// code}\n}",
    documentation: "Else block"
  },
  {
    label: "for",
    insertText: "for (${1:int i = 0}; ${2:i < n}; ${3:i++}) {\n\t${4:// code}\n}",
    documentation: "For loop"
  },
  {
    label: "while",
    insertText: "while (${1:condition}) {\n\t${2:// code}\n}",
    documentation: "While loop"
  },
  {
    label: "do-while",
    insertText: "do {\n\t${1:// code}\n} while (${2:condition});",
    documentation: "Do-while loop"
  },
  {
    label: "switch",
    insertText: "switch (${1:expression}) {\n\tcase ${2:value}:\n\t\t${3:// code}\n\t\tbreak;\n\tdefault:\n\t\t${4:// default code}\n}",
    documentation: "Switch-case block"
  },
  {
    label: "function",
    insertText: "${1:void} ${2:function_name}(${3:void}) {\n\t${4:// code}\n}",
    documentation: "Function definition"
  },
  {
    label: "main",
    insertText: "int main(int argc, char *argv[]) {\n\t${1:return 0;}\n}",
    documentation: "Main entry point"
  }
].map(sn => ({
  ...sn,
  kind: 25,
  insertTextRules: 4
}));

const cBuiltins = [
  { label: "printf", insertText: "printf(\"${1:format}\\n\", ${2:args});", documentation: "Print formatted output to stdout" },
  { label: "scanf", insertText: "scanf(\"${1:format}\", &${2:var});", documentation: "Read formatted input from stdin" },
  { label: "puts", insertText: "puts(${1:string});", documentation: "Print a string followed by a newline" },
  { label: "gets", insertText: "gets(${1:buffer});", documentation: "Read a string (unsafe, use fgets)" },
  { label: "fgets", insertText: "fgets(${1:buffer}, ${2:size}, ${3:stdin});", documentation: "Read a line from a stream" },
  { label: "fputs", insertText: "fputs(${1:string}, ${2:stdout});", documentation: "Write a string to a stream" },
  { label: "malloc", insertText: "malloc(${1:size})", documentation: "Allocate memory" },
  { label: "calloc", insertText: "calloc(${1:nitems}, ${2:size})", documentation: "Allocate zero-initialized memory" },
  { label: "free", insertText: "free(${1:pointer});", documentation: "Deallocate memory" },
  { label: "exit", insertText: "exit(${1:status});", documentation: "Exit the program" },
  { label: "atoi", insertText: "atoi(${1:str});", documentation: "Convert string to int" },
  { label: "atof", insertText: "atof(${1:str});", documentation: "Convert string to float" },
  { label: "strlen", insertText: "strlen(${1:str})", documentation: "Get length of string" },
  { label: "strcpy", insertText: "strcpy(${1:dest}, ${2:src});", documentation: "Copy a string" },
  { label: "strcat", insertText: "strcat(${1:dest}, ${2:src});", documentation: "Concatenate strings" },
  { label: "strcmp", insertText: "strcmp(${1:str1}, ${2:str2})", documentation: "Compare two strings" },
  { label: "memcpy", insertText: "memcpy(${1:dest}, ${2:src}, ${3:size});", documentation: "Copy memory blocks" },
  { label: "memset", insertText: "memset(${1:ptr}, ${2:value}, ${3:size});", documentation: "Fill memory with a constant byte" }
].map(fn => ({
  ...fn,
  kind: 25,
  insertTextRules: 4
}));

export const cCompletions = [...cKeywords, ...cSnippets, ...cBuiltins];

const cppKeywords = [
  "alignas", "alignof", "and", "and_eq", "asm", "atomic_cancel", "atomic_commit", "atomic_noexcept",
  "auto", "bitand", "bitor", "bool", "break", "case", "catch", "char", "char8_t", "char16_t", "char32_t",
  "class", "co_await", "co_return", "co_yield", "compl", "concept", "const", "consteval", "constexpr", "constinit",
  "const_cast", "continue", "decltype", "default", "delete", "do", "double", "dynamic_cast", "else",
  "enum", "explicit", "export", "extern", "false", "float", "for", "friend", "goto", "if", "inline", "int",
  "long", "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or", "or_eq",
  "private", "protected", "public", "register", "reinterpret_cast", "requires", "return", "short", "signed",
  "sizeof", "static", "static_assert", "static_cast", "struct", "switch", "template", "this", "thread_local",
  "throw", "true", "try", "typedef", "typeid", "typename", "union", "unsigned", "using", "virtual", "void",
  "volatile", "wchar_t", "while", "xor", "xor_eq"
].map(kw => ({
  label: kw,
  kind: 25,
  insertText: kw,
  insertTextRules: 4,
  documentation: `C++20 keyword: ${kw}`
}));

const cppSnippets = [
  {
    label: "main",
    insertText: "int main() {\n\t${1:return 0;}\n}",
    documentation: "Main entry point of the program"
  },
  {
    label: "if",
    insertText: "if (${1:condition}) {\n\t${2:// code}\n}",
    documentation: "If condition"
  },
  {
    label: "else",
    insertText: "else {\n\t${1:// code}\n}",
    documentation: "Else block"
  },
  {
    label: "for",
    insertText: "for (${1:int i = 0}; ${2:i < n}; ${3:++i}) {\n\t${4:// code}\n}",
    documentation: "For loop"
  },
  {
    label: "range-based for",
    insertText: "for (auto& ${1:item} : ${2:container}) {\n\t${3:// code}\n}",
    documentation: "Range-based for loop"
  },
  {
    label: "while",
    insertText: "while (${1:condition}) {\n\t${2:// code}\n}",
    documentation: "While loop"
  },
  {
    label: "do-while",
    insertText: "do {\n\t${1:// code}\n} while (${2:condition});",
    documentation: "Do-while loop"
  },
  {
    label: "class",
    insertText: "class ${1:ClassName} {\npublic:\n\t${1:ClassName}();\n\t~${1:ClassName}();\nprivate:\n\t${2:/* members */}\n};",
    documentation: "Class definition"
  },
  {
    label: "struct",
    insertText: "struct ${1:StructName} {\n\t${2:/* members */}\n};",
    documentation: "Struct definition"
  },
  {
    label: "lambda",
    insertText: "auto ${1:func} = [${2:captures}](${3:args}) -> ${4:return_type} {\n\t${5:// code}\n};",
    documentation: "Lambda expression"
  },
  {
    label: "template",
    insertText: "template<typename ${1:T}>\n${2:void} ${3:function}(${1:T} ${4:param}) {\n\t${5:// code}\n}",
    documentation: "Function template"
  },
  {
    label: "try-catch",
    insertText: "try {\n\t${1:// code}\n} catch (${2:const std::exception& e}) {\n\t${3:std::cerr << e.what();}\n}",
    documentation: "Exception handling"
  }
].map(sn => ({
  ...sn,
  kind: 25,
  insertTextRules: 4
}));

const cppBuiltins = [
  { label: "std::cout", insertText: "std::cout << ${1:msg} << std::endl;", documentation: "Output to standard console" },
  { label: "std::cin", insertText: "std::cin >> ${1:var};", documentation: "Read from standard input" },
  { label: "std::string", insertText: "std::string ${1:name} = \"${2:text}\";", documentation: "String class from <string>" },
  { label: "std::vector", insertText: "std::vector<${1:type}> ${2:name};", documentation: "Dynamic array from <vector>" },
  { label: "std::array", insertText: "std::array<${1:type}, ${2:N}> ${3:name};", documentation: "Fixed-size array from <array>" },
  { label: "std::map", insertText: "std::map<${1:key}, ${2:value}> ${3:name};", documentation: "Sorted associative map from <map>" },
  { label: "std::unordered_map", insertText: "std::unordered_map<${1:key}, ${2:value}> ${3:name};", documentation: "Unordered map from <unordered_map>" },
  { label: "std::optional", insertText: "std::optional<${1:T}> ${2:opt};", documentation: "Optional value holder from <optional>" },
  { label: "std::variant", insertText: "std::variant<${1:T1}, ${2:T2}> ${3:var};", documentation: "Type-safe union from <variant>" },
  { label: "std::visit", insertText: "std::visit(${1:visitor}, ${2:variant});", documentation: "Visit a std::variant's held value" },
  { label: "std::ranges::views::filter", insertText: "std::ranges::views::filter(${1:range}, ${2:predicate})", documentation: "Filter view for ranges (C++20)" },
  { label: "std::ranges::views::transform", insertText: "std::ranges::views::transform(${1:range}, ${2:func})", documentation: "Transform view for ranges (C++20)" },
  { label: "std::format", insertText: "std::format(\"${1:text} {}\", ${2:value});", documentation: "Formatted string output (C++20)" },
  { label: "std::span", insertText: "std::span<${1:T}> ${2:view}(${3:array});", documentation: "View over a contiguous range (C++20)" }
].map(fn => ({
  ...fn,
  kind: 25,
  insertTextRules: 4
}));

const cppIncludes = [
  "iostream", "vector", "string", "map", "unordered_map", "set", "algorithm",
  "iterator", "utility", "memory", "functional", "numeric", "cmath", "cassert",
  "limits", "fstream", "sstream", "iomanip", "thread", "mutex", "future", "condition_variable",
  "chrono", "filesystem", "optional", "variant", "any", "array", "bitset", "queue", "stack",
  "list", "deque", "type_traits", "tuple", "regex", "complex", "stdexcept", "random"
].map(h => ({
  label: `#include <${h}>`,
  kind: 25,
  insertText: `#include <${h}>`,
  documentation: `Include header <${h}>`,
  insertTextRules: 4
}));

const cppAdvancedSnippets = [
  {
    label: "constexpr function",
    insertText: "constexpr ${1:ReturnType} ${2:functionName}(${3:args}) {\n\t${4:return ...;}\n}",
    documentation: "Constexpr function declaration"
  },
  {
    label: "concept",
    insertText: "template<typename ${1:T}>\nconcept ${2:ConceptName} = ${3:constraint};",
    documentation: "C++20 Concept definition"
  },
  {
    label: "requires clause",
    insertText: "template<typename ${1:T}>\nrequires ${2:ConceptName}<${1:T}>\n${3:void} ${4:function}(${1:T} ${5:arg}) {\n\t${6:// code}\n}",
    documentation: "Function template with requires clause"
  },
  {
    label: "requires expression",
    insertText: "requires (${1:expression}) {\n\t${2:// code}\n}",
    documentation: "Requires expression block"
  }
].map(sn => ({
  ...sn,
  kind: 25,
  insertTextRules: 4
}));

const cppFilesystem = [
  {
    label: "std::filesystem::path",
    insertText: "std::filesystem::path ${1:p} = \"${2:path/to/file}\";",
    documentation: "Represents a file system path"
  },
  {
    label: "std::filesystem::exists",
    insertText: "std::filesystem::exists(${1:path})",
    documentation: "Check if a path exists"
  },
  {
    label: "std::filesystem::create_directory",
    insertText: "std::filesystem::create_directory(${1:path});",
    documentation: "Create a directory at the given path"
  },
  {
    label: "std::filesystem::remove_all",
    insertText: "std::filesystem::remove_all(${1:path});",
    documentation: "Remove a directory and its contents"
  }
].map(fn => ({
  ...fn,
  kind: 25,
  insertTextRules: 4
}));

const cppChrono = [
  {
    label: "std::chrono::system_clock::now",
    insertText: "auto now = std::chrono::system_clock::now();",
    documentation: "Get current time"
  },
  {
    label: "std::chrono::duration",
    insertText: "std::chrono::duration<${1:double}> ${2:duration};",
    documentation: "Generic duration type"
  },
  {
    label: "std::this_thread::sleep_for",
    insertText: "std::this_thread::sleep_for(std::chrono::milliseconds(${1:ms}));",
    documentation: "Pause thread for specified duration"
  },
  {
    label: "std::chrono::milliseconds",
    insertText: "std::chrono::milliseconds(${1:time})",
    documentation: "Represents a duration in milliseconds"
  }
].map(fn => ({
  ...fn,
  kind: 25,
  insertTextRules: 4
}));

const cppCoroutines = [
  {
    label: "co_await",
    insertText: "co_await ${1:expr};",
    documentation: "Suspend execution until result is ready"
  },
  {
    label: "co_yield",
    insertText: "co_yield ${1:value};",
    documentation: "Yield a value from a coroutine"
  },
  {
    label: "co_return",
    insertText: "co_return ${1:value};",
    documentation: "Return a value from a coroutine"
  }
].map(sn => ({
  ...sn,
  kind: 25,
  insertTextRules: 4
}));

export const cppCompletions = [
  ...cppKeywords,
  ...cppSnippets,
  ...cppBuiltins,
  ...cppIncludes,
  ...cppAdvancedSnippets,
  ...cppFilesystem,
  ...cppChrono,
  ...cppCoroutines
];

const javaKeywords = [
  "abstract", "assert", "boolean", "break", "byte", "case", "catch", "char",
  "class", "const", "continue", "default", "do", "double", "else", "enum",
  "exports", "extends", "final", "finally", "float", "for", "goto", "if",
  "implements", "import", "instanceof", "int", "interface", "long", "module",
  "native", "new", "null", "open", "opens", "package", "private", "protected",
  "public", "record", "requires", "return", "sealed", "short", "static",
  "strictfp", "super", "switch", "synchronized", "this", "throw", "throws",
  "to", "transient", "transitive", "try", "uses", "var", "void", "volatile",
  "while", "with", "yield", "permits"
].map(kw => ({
  label: kw,
  kind: 25,
  insertText: kw,
  insertTextRules: 4,
  documentation: `Java keyword: ${kw}`
}));

const javaSnippets = [
  {
    label: "main",
    insertText: "public static void main(String[] args) {\n\t${1:// code}\n}",
    documentation: "Main entry point"
  },
  {
    label: "class",
    insertText: "public class ${1:ClassName} {\n\t${2:// fields and methods}\n}",
    documentation: "Class definition"
  },
  {
    label: "if",
    insertText: "if (${1:condition}) {\n\t${2:// code}\n}",
    documentation: "If statement"
  },
  {
    label: "else",
    insertText: "else {\n\t${1:// code}\n}",
    documentation: "Else block"
  },
  {
    label: "for",
    insertText: "for (int ${1:i} = 0; ${1:i} < ${2:n}; ${1:i}++) {\n\t${3:// code}\n}",
    documentation: "Traditional for loop"
  },
  {
    label: "foreach",
    insertText: "for (${1:Type} ${2:item} : ${3:collection}) {\n\t${4:// code}\n}",
    documentation: "Enhanced for loop"
  },
  {
    label: "while",
    insertText: "while (${1:condition}) {\n\t${2:// code}\n}",
    documentation: "While loop"
  },
  {
    label: "switch",
    insertText: "switch (${1:expression}) {\n\tcase ${2:value} -> {\n\t\t${3:// code}\n\t}\n\tdefault -> {\n\t\t${4:// code}\n\t}\n}",
    documentation: "Switch expression with arrow syntax (Java 14+)"
  },
  {
    label: "try-catch",
    insertText: "try {\n\t${1:// code}\n} catch (${2:Exception e}) {\n\t${3:e.printStackTrace();}\n}",
    documentation: "Try-catch block"
  },
  {
    label: "record",
    insertText: "public record ${1:RecordName}(${2:Type field}) {}",
    documentation: "Record type (Java 14+)"
  },
  {
    label: "sealed",
    insertText: "public sealed class ${1:Base} permits ${2:Subclass} {\n\t${3:// code}\n}",
    documentation: "Sealed class (Java 17+)"
  },
  {
    label: "virtual thread",
    insertText: "Thread.startVirtualThread(() -> {\n\t${1:// code}\n});",
    documentation: "Start a virtual thread (Java 21)"
  },
  {
    label: "pattern instanceof",
    insertText: "if (${1:obj} instanceof ${2:Type} ${3:var}) {\n\t${4:// code using ${3:var}}\n}",
    documentation: "Pattern matching with instanceof (Java 16+)"
  }
].map(sn => ({
  ...sn,
  kind: 25,
  insertTextRules: 4
}));

const javaExtras = [
  {
    label: "System.out.println",
    insertText: "System.out.println(${1:\"message\"});",
    documentation: "Prints a message to standard output",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "Scanner input",
    insertText: "Scanner ${1:scanner} = new Scanner(System.in);\n${2:String input} = ${1:scanner}.nextLine();",
    documentation: "Read input using Scanner",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "List<String> example",
    insertText: "List<String> ${1:list} = new ArrayList<>();\n${1:list}.add(\"${2:item}\");",
    documentation: "Create and add to a List of Strings",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "List.add",
    insertText: "${1:list}.add(${2:element});",
    documentation: "Appends the specified element to the end of this list.\nReturns true if this collection changed as a result.",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "Map.put",
    insertText: "${1:map}.put(${2:key}, ${3:value});",
    documentation: "Associates the specified value with the specified key in this map.\nReturns the previous value or null.",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "Optional.orElse",
    insertText: "${1:optional}.orElse(${2:defaultValue});",
    documentation: "Returns the value if present, otherwise returns defaultValue.",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "import static Collectors.toList",
    insertText: "import static java.util.stream.Collectors.toList;",
    documentation: "Static import for Collectors.toList()",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "import static Math.*",
    insertText: "import static java.lang.Math.*;",
    documentation: "Static import for all java.lang.Math functions",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "import java.util.*",
    insertText: "import java.util.*;",
    documentation: "Imports all classes from java.util",
    kind: 25,
    insertTextRules: 4
  },
].map(extra => ({
  ...extra,
  kind: 25,
  insertTextRules: 4
}));

export const javaCompletions = [
  ...javaKeywords,
  ...javaSnippets,
  ...javaExtras
]

const rustKeywords = [
  "as", "break", "const", "continue", "crate", "else", "enum", "extern",
  "false", "fn", "for", "if", "impl", "in", "let", "loop", "match", "mod",
  "move", "mut", "pub", "ref", "return", "self", "Self", "static", "struct",
  "super", "trait", "true", "type", "unsafe", "use", "where", "while",
  "async", "await", "dyn", "abstract", "final", "override", "try", "macro"
].map(kw => ({
  label: kw,
  kind: 25,
  insertText: kw,
  insertTextRules: 4,
  documentation: `Rust keyword: ${kw}`
}));

const rustBuiltins = [
  "println!", "eprintln!", "format!", "panic!", "vec!", "dbg!",
  "Some", "None", "Ok", "Err", "Result", "Option", "String", "Vec"
].map(fn => ({
  label: fn,
  kind: 25,
  insertText: fn,
  insertTextRules: 4,
  documentation: `Rust built-in: ${fn}`
}));

const rustSnippets = [
  {
    label: "main",
    insertText: "fn main() {\n\t${1:// code here}\n}",
    documentation: "Main function",
    kind: 25,
    insertTextRules:4
  },
  {
    label: "fn",
    insertText: "fn ${1:name}(${2:args}) -> ${3:ReturnType} {\n\t${4:// body}\n}",
    documentation: "Function definition",
    kind: 25,
    insertTextRules:4
  },
  {
    label: "if",
    insertText: "if ${1:condition} {\n\t${2:// body}\n}",
    documentation: "If condition",
    kind: 25,
    insertTextRules:4
  },
  {
    label: "if else",
    insertText: "if ${1:condition} {\n\t${2:// if block}\n} else {\n\t${3:// else block}\n}",
    documentation: "If-else block",
    kind: 25,
    insertTextRules:4
  },
    {
    label: "match",
    insertText: "match ${1:expression} {\n\t${2:pattern} => ${3:result},\n}",
    documentation: "Match expression",
    kind: 25,
    insertTextRules:4
  },
  {
    label: "struct",
    insertText: "struct ${1:Name} {\n\t${2:field}: ${3:Type},\n}",
    documentation: "Struct definition",
    kind: 25,
    insertTextRules:4
  },
  {
    label: "enum",
    insertText: "enum ${1:Name} {\n\t${2:Variant},\n}",
    documentation: "Enum definition",
    kind: 25,
    insertTextRules:4
  },
  {
    label: "impl",
    insertText: "impl ${1:Type} {\n\tpub fn ${2:new}() -> Self {\n\t\t${3:// code}\n\t}\n}",
    documentation: "Implementation block",
    kind: 25,
    insertTextRules:4
  },
  {
    label: "loop",
    insertText: "loop {\n\t${1:// code}\n}",
    documentation: "Infinite loop",
    kind: 25,
    insertTextRules:4
  },
  {
    label: "result ?",
    insertText: "${1:func}()?;",
    documentation: "Propagate error with ? operator",
    kind: 25,
    insertTextRules:4
  },
  {
    label: "vec!",
    insertText: "vec![${1:elements}];",
    documentation: "Create a new Vec",
    kind: 25,
    insertTextRules:4
  }
].map(sn => ({
  ...sn,
  kind: 25,
  insertTextRules: 4
}));

export const rustCompletions = [...rustKeywords, ...rustBuiltins, ...rustSnippets];

const goKeywords = [
  "break", "case", "chan", "const", "continue", "default", "defer",
  "else", "fallthrough", "for", "func", "go", "goto", "if", "import",
  "interface", "map", "package", "range", "return", "select", "struct",
  "switch", "type", "var"
].map(kw => ({
  label: kw,
  kind: 25,
  insertText: kw,
  insertTextRules: 4,
  documentation: `Go keyword: \`${kw}\``
}));

const goBuiltins = [
  "append", "cap", "close", "complex", "copy", "delete", "imag",
  "len", "make", "new", "panic", "print", "println", "real", "recover"
].map(fn => ({
  label: fn,
  kind: 25,
  insertText: fn,
  insertTextRules: 4,
  documentation: `Built-in function: \`${fn}()\``
}));

const goSnippets = [
  {
    label: "main",
    insertText: "func main() {\n\t${1:// code here}\n}",
    documentation: "Main function entry point",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "func",
    insertText: "func ${1:Name}(${2:params}) ${3:returnType} {\n\t${4:// body}\n}",
    documentation: "Function definition",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "if",
    insertText: "if ${1:condition} {\n\t${2:// code}\n}",
    documentation: "If block",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "for",
    insertText: "for ${1:i} := 0; ${1:i} < ${2:10}; ${1:i}++ {\n\t${3:// code}\n}",
    documentation: "For loop with counter",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "goroutine",
    insertText: "go func() {\n\t${1:// code}\n}()",
    documentation: "Anonymous goroutine",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "struct",
    insertText: "type ${1:StructName} struct {\n\t${2:Field} ${3:Type}\n}",
    documentation: "Struct definition",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "http server",
    insertText:
      "http.HandleFunc(\"/\", func(w http.ResponseWriter, r *http.Request) {\n\tfmt.Fprintf(w, \"Hello, World!\")\n})\nlog.Fatal(http.ListenAndServe(\":8080\", nil))",
    documentation: "Basic HTTP server using net/http",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "err check",
    insertText: "if err != nil {\n\tlog.Fatal(err)\n}",
    documentation: "Standard error check",
    kind: 25,
    insertTextRules: 4
  },
  {
    label: "slice init",
    insertText: "${1:nums} := []${2:int}{${3:1, 2, 3}}",
    documentation: "Initialize a slice",
    kind: 25,
    insertTextRules: 4
  }
].map(sn => ({
  ...sn,
  kind: 25,
  insertTextRules: 4
}));

export const goCompletions = [
  ...goKeywords,
  ...goBuiltins,
  ...goSnippets
];