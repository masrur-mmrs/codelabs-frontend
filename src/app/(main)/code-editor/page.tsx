'use client';
import React, { useState, useEffect, useMemo, useRef } from "react";
import { createSocket } from "@/lib/clientSocket";
import { useExecutionToggle } from "@/app/context/context";
import MonacoEditor from "@/app/components/MonacoEditor";
import TerminalComponent, { TerminalHandle } from "@/app/components/Terminal";
import ExecuteButton from "@/app/components/Buttons/ExecuteButton";
import SelectLanguage from "@/app/components/SelectLanguage";
import ClearButton from "@/app/components/Buttons/ClearButton";
import { getLanguages } from "@/lib/utils";

interface Language {
    id: string;
    name: string;
    version: string;
}

const CodeEditor = () => {
    const { isExecuting, toggleExecution } = useExecutionToggle();
    const [code, setCode] = useState<string>("");
    const [selectedLanguage, setSelectedLanguage] = useState<string>("Select Language");
    const [languages, setLanguages] = useState<Language[]>([]);
    const socket = useMemo(() => createSocket(), []);
    const terminalRef = useRef<TerminalHandle>(null);

    useEffect(() => {
    const fetchLanguages = async () => {
        const langs = await getLanguages();
        console.log("Available languages:", langs);
        setLanguages(langs.languages);
    };
    fetchLanguages();
    }, []);

    const runCode = () => {
        socket.send(JSON.stringify({
        type: "execute",
        language: selectedLanguage,
        code,
        }));
        toggleExecution(!isExecuting);
    };

    const stopCode = () => {
        socket.send(JSON.stringify({ type: "stop" }));
        toggleExecution(!isExecuting);
    };

    const clearCode = () => {
        terminalRef.current?.clear();
    };

    return (
        <div className="flex flex-row h-screen w-screen overflow-hidden">
        <div className="flex-1 relative">
            <MonacoEditor
            language={selectedLanguage}
            code={code}
            onChange={(newCode) => setCode(newCode || "")}
            />
        </div>
        <div className="border-l border-neutral-600 !overflow-hidden block w-[50vw]">
            <div className="p-2 bg-background flex justify-end items-center h-[10vh] border-b border-neutral-600">
            <div className="flex-1">
                <SelectLanguage
                languages={languages}
                setSelectedLanguage={setSelectedLanguage}
                />
            </div>
            <div className="flex-1 flex justify-end">
                <ExecuteButton execute={runCode} terminate={stopCode} />
                <ClearButton onClear={clearCode} />
            </div>
            </div>
            <TerminalComponent ref={terminalRef} socket={socket} language={selectedLanguage} />
        </div>
        </div>
    );
};

export default CodeEditor;