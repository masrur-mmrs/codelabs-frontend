'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { useExecutionToggle } from "@/app/context/context";

interface ExecuteButtonProps {
    execute: () => void;
    terminate: () => void;
}


const ExecuteButton: React.FC<ExecuteButtonProps> = ({ execute, terminate }) => {
    const { isExecuting } = useExecutionToggle();

    return (
        <Button
            onClick={(isExecuting)?terminate:execute}
            variant={isExecuting ? "destructive" : "constructive"}
            size="lg"
            className="mx-5"
        >
            { isExecuting ? "Stop" : "Run"}
        </Button>
    );
};


export default ExecuteButton;