"use client";
import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { useTerminal } from "@/hooks/useTerminal";
import "xterm/css/xterm.css";

interface TerminalProps {
  socket: WebSocket;
  language: string;
}

export interface TerminalHandle {
  clear: () => void;
}

const TerminalComponent = forwardRef<TerminalHandle, TerminalProps>(
  ({ socket, language }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
    const { clear } = useTerminal(containerRef, socket, language);

    useImperativeHandle(ref, () => ({
      clear,
    }));

    return (
      <>
        <style jsx global>{`
          .xterm-overflow-fix .xterm-rows,
          .xterm-overflow-fix .xterm-row,
          .xterm-overflow-fix .xterm-viewport,
          .xterm-overflow-fix .xterm-screen {
            overflow: hidden !important;
            max-width: 100% !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }

          .xterm-overflow-fix .xterm-row {
            white-space: nowrap !important;
            text-overflow: ellipsis !important;
          }

          .xterm-overflow-fix {
            overflow: hidden !important;
            max-width: 100% !important;
            width: 100% !important;
          }
        `}</style>

        <div
          ref={containerRef}
          className="w-full h-[90vh] xterm-no-overflow"
          style={{
            overflow: "hidden",
            display: "block",
            maxWidth: "100%",
            width: "100%",
            position: "relative",
            boxSizing: "border-box",
          }}
        />
      </>
    );
  }
);

TerminalComponent.displayName = "TerminalComponent";
export default TerminalComponent;
