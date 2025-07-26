'use client'

import React, { createContext, useContext } from "react"

type ExecutionToggleContextType = {
    isExecuting: boolean;
    toggleExecution: (state: boolean) => void;
}

const ExecutionToggleContext = createContext<ExecutionToggleContextType | undefined>(undefined);

export const ExecutionToggleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isExecuting, setIsExecuting] = React.useState<boolean>(false);

    const toggleExecution = (state: boolean) => {
        setIsExecuting(state);
    };

    return (
        <ExecutionToggleContext.Provider value={{ isExecuting, toggleExecution }}>
            {children}
        </ExecutionToggleContext.Provider>
    );
}

export const useExecutionToggle = (): ExecutionToggleContextType => {
    const context = useContext(ExecutionToggleContext);
    if (!context) {
        throw new Error("useExecutionToggle must be used within an ExecutionToggleProvider");
    }
    return context;
};