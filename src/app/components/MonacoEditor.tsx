'use client';
import React from "react";
import ControlledEditor, { Monaco, OnMount } from "@monaco-editor/react";
import theme from "@/themes/red-one-dark-pro-dark-color-theme.json";
import { 
    convertTokenColorsToMonacoRule, 
    allPythonSnippets, 
    cCompletions, 
    cppCompletions, 
    javaCompletions, 
    rustCompletions, 
    goCompletions, 
    // setupJavaSemanticHighlighting 
} from "@/lib/utils";

interface MonacoEditorProps {
  language: string;
  code: string;
  onChange: (newCode: string | undefined) => void;
}

export interface CompletionItem {
  label: string;
  insertText: string;
  detail?: string;
  documentation?: string;
  kind?: number;
  filterText?: string;
  sortText?: string;
}

const MonacoEditor: React.FC<MonacoEditorProps> = ({ language, code, onChange }) => {
    const semanticHighlightingRules = [
        { token: "type", foreground: "#e5c07b" },       // For `String`, `int`
        { token: "function", foreground: "#61afef" },   // For `main`
        { token: "parameter", foreground: "#56b6c2" },  // For `args`
        { token: "variable", foreground: "#d55fde" },   // For `name`, etc.
    ];
    const monacoEditorRules = [
        ...convertTokenColorsToMonacoRule(theme.tokenColors),
        ...semanticHighlightingRules,
    ];
    const colorMap = [
        "#0a0e14", // 0
        "#c678dd", // 1 - keyword
        "#e5c07b", // 2 - type
        "#d55fde", // 3 - class
        "#61afef", // 4 - function
        "#e06c75", // 5 - variable
        "#d19a66", // 6 - parameter
    ];
    
    const handleEditorDidMount: OnMount = (editor, monaco: Monaco) => {
        monaco.editor.defineTheme("one-dark-red", {
            base: "vs-dark",
            inherit: true,
            rules: monacoEditorRules,
            colors: theme.colors,
            colorMap,
        });
        const themeService = monaco.editor._themeService?._knownThemes.get("one-dark-red");
        if (themeService && !themeService.getTokenStyleMetadata) {
        themeService.getTokenStyleMetadata = (type: string) => {
                switch (type) {
                case "keyword":
                    return { foreground: 1, bold: true };
                case "class":
                    return { foreground: 2 };
                case "function":
                    return { foreground: 3 };
                case "variable":
                    return { foreground: 4 };
                case "parameter":
                    return { foreground: 5, italic: true };
                case "type":
                    return { foreground: 6 };
                default:
                    return undefined;
                }
            };
        }
        monaco.editor.setTheme("one-dark-red");

        monaco.languages.registerCompletionItemProvider("python", {
        provideCompletionItems: (model: Monaco, position: Monaco) => {
            const word = model.getWordUntilPosition(position);
            const range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
            };

            return {
            suggestions: allPythonSnippets.map((item: CompletionItem) => ({
                ...item,
                range: range,
                kind: item.kind || monaco.languages.CompletionItemKind.Snippet,
            }))
            };
        },
        triggerCharacters: ['.', ' ', '(', '[', '{']
        });

        monaco.languages.registerCompletionItemProvider("c", {
        provideCompletionItems: (model: Monaco, position: Monaco) => {
            const word = model.getWordUntilPosition(position);
            const range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
            };

            return {
            suggestions: cCompletions.map((item: CompletionItem) => ({
                ...item,
                range: range,
                kind: item.kind || monaco.languages.CompletionItemKind.Function,
            }))
            };
        },
        triggerCharacters: ['.', '->', ' ', '(', '[', '{']
        });

        monaco.languages.registerCompletionItemProvider("cpp", {
        provideCompletionItems: (model: Monaco, position: Monaco) => {
            const word = model.getWordUntilPosition(position);
            const range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
            };

            return {
            suggestions: cppCompletions.map((item: CompletionItem) => ({
                ...item,
                range: range,
                kind: item.kind || monaco.languages.CompletionItemKind.Function,
            }))
            };
        },
        triggerCharacters: ['.', '->', '::', ' ', '(', '[', '{']
        });

        monaco.languages.registerCompletionItemProvider("java", {
        provideCompletionItems: (model: Monaco, position: Monaco) => {
            const word = model.getWordUntilPosition(position);
            const range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
            };

            return {
            suggestions: javaCompletions.map((item: CompletionItem) => ({
                ...item,
                range: range,
                kind: item.kind || monaco.languages.CompletionItemKind.Method,
            }))
            };
        },
        triggerCharacters: ['.', ' ', '(', '[', '{']
        });

        monaco.languages.registerCompletionItemProvider("rust", {
        provideCompletionItems: (model: Monaco, position: Monaco) => {
            const word = model.getWordUntilPosition(position);
            const range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
            };

            return {
            suggestions: rustCompletions.map((item: CompletionItem) => ({
                ...item,
                range: range,
                kind: item.kind || monaco.languages.CompletionItemKind.Function,
            }))
            };
        },
        triggerCharacters: ['.', '::', ' ', '(', '[', '{']
        });

        monaco.languages.registerCompletionItemProvider("go", {
        provideCompletionItems: (model: Monaco, position: Monaco) => {
            const word = model.getWordUntilPosition(position);
            const range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
            };

            return {
            suggestions: goCompletions.map((item: CompletionItem) => ({
                ...item,
                range: range,
                kind: item.kind || monaco.languages.CompletionItemKind.Function,
            }))
            };
        },
        triggerCharacters: ['.', ' ', '(', '[', '{']
        });

        // setupJavaSemanticHighlighting(monaco);

        monaco.languages.registerDocumentSemanticTokensProvider("java", {
            getLegend: () => ({
                tokenTypes: ["keyword", "class", "function", "variable", "type", "parameter"],
                tokenModifiers: []
            }),
            provideDocumentSemanticTokens: () => {
                // Mock data: [lineDelta, charDelta, length, tokenTypeIdx, tokenModifier]
                return {
                data: [
                        0, 0, 6, 0, 0,   // public
                        0, 7, 5, 0, 0,   // class
                        0, 6, 4, 1, 0,   // Main
                        1, 2, 6, 0, 0,   // public
                        0, 7, 6, 0, 0,   // static
                        0, 7, 4, 4, 0,   // void
                        0, 5, 4, 2, 0,   // main
                        0, 5, 6, 4, 0,   // String
                        0, 9, 4, 5, 0,   // args
                        1, 4, 6, 4, 0,   // String
                        0, 7, 4, 3, 0,   // name
                    ]
                };
            },
            releaseDocumentSemanticTokens: () => {}
        });

        monaco.editor.setModelLanguage(editor.getModel()!, language);
    };

    return (
        <ControlledEditor
        height="100vh"
        language={language}
        defaultLanguage={language}
        defaultValue={code}
        onChange={onChange}
        onMount={handleEditorDidMount}
        theme="one-dark-red"
        options={{
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            fontSize: 14,
            lineNumbers: "on",
            wordWrap: "on",
            wrappingIndent: "indent",
            renderLineHighlight: "all",
            cursorStyle: "line",
            cursorBlinking: "smooth",
            tabSize: 4,
            formatOnType: true,
            // Enable autocomplete features
            suggestOnTriggerCharacters: true,
            acceptSuggestionOnEnter: "on",
            wordBasedSuggestions: "matchingDocuments",
            // Enable quick suggestions
            quickSuggestions: {
            other: true,
            comments: false,
            strings: false
            },
            suggestSelection: "first",
            tabCompletion: "on",
            'semanticHighlighting.enabled': true,
        }}
        />
    );
};

export default MonacoEditor;