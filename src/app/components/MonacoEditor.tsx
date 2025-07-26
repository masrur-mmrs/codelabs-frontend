'use client';
import React from "react";
import ControlledEditor, { Monaco, OnMount } from "@monaco-editor/react";
import { monacoEditorRules, monacoEditorColors, allPythonSnippets, cCompletions, cppCompletions, javaCompletions, rustCompletions, goCompletions } from "@/lib/utils";

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
  const handleEditorDidMount: OnMount = (editor, monaco: Monaco) => {
    monaco.editor.defineTheme("one-dark-red", {
      base: "vs-dark",
      inherit: true,
      rules: monacoEditorRules,
      colors: monacoEditorColors,
    });
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
      }}
    />
  );
};

export default MonacoEditor;