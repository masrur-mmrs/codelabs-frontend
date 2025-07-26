import { useEffect, useRef } from "react";

export const useTerminal = (
  containerRef: React.RefObject<HTMLDivElement>,
  socket: WebSocket,
  language: string
): { clear: () => void } => {
  const termRef = useRef<import("xterm").Terminal | null>(null);

  useEffect(() => {
    let term: import("xterm").Terminal;
    let fitAddon: import("xterm-addon-fit").FitAddon;
    let resizeObserver: ResizeObserver;

    const setupTerminal = async () => {
      const { Terminal } = await import("xterm");
      const { FitAddon } = await import("xterm-addon-fit");

      term = new Terminal({
        fontSize: 14,
        cursorBlink: true,
        scrollback: 1000,
        theme: {
          background: "#0a0e14",
          foreground: "#b3b1ad",
        },
      });

      termRef.current = term;

      fitAddon = new FitAddon();
      term.loadAddon(fitAddon);
      term.open(containerRef.current!);

      const applyDOMFixes = () => {
        const container = containerRef.current;
        if (!container) return;

        container.classList.add("xterm-overflow-fix");

        const elements = [
          ".xterm-rows",
          ".xterm-row",
          ".xterm-viewport",
          ".xterm-screen",
          ".xterm-text-layer",
          ".xterm-cursor-layer",
        ];

        elements.forEach((selector) => {
          const els = container.querySelectorAll(selector);
          els.forEach((el) => {
            const element = el as HTMLElement;
            element.style.overflow = "hidden";
            element.style.maxWidth = "100%";
            element.style.width = "100%";
            element.style.boxSizing = "border-box";

            if (selector === ".xterm-row") {
              element.style.whiteSpace = "nowrap";
              element.style.textOverflow = "ellipsis";
            }
          });
        });
      };

      requestAnimationFrame(() => {
        fitAddon.fit();
        applyDOMFixes();

        setTimeout(() => {
          applyDOMFixes();
        }, 100);
      });

      const observer = new MutationObserver(() => {
        applyDOMFixes();
      });

      observer.observe(containerRef.current!, {
        childList: true,
        subtree: true,
      });

      resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(() => {
          fitAddon.fit();
          applyDOMFixes();
        });
      });

      resizeObserver.observe(containerRef.current!);

      term.onData((data: string) => {
        socket.send(JSON.stringify({ type: "input", message: data }));
      });

      socket.onmessage = (event: MessageEvent) => {
        try {
          const { type, message } = JSON.parse(event.data);
          if (["stdout", "stderr", "system"].includes(type)) {
            if (message.includes("Acquired") || message === "Code execution started") {
              console.log(message);
            } else if (message === "Execution completed") {
              term.write("\r\nExecution complete\r\n");
            } else if (message === "Stopping execution...") {
              term.clear();
            } else {
              term.write(message);
            }
          }
        } catch (err) {
          term.write(`\r\n[err] ${String(err)}`);
        }
      };

      return () => {
        observer.disconnect();
      };
    };

    const cleanup = setupTerminal();

    return () => {
      cleanup?.then((cleanupFn) => cleanupFn?.());
      term?.dispose?.();
      resizeObserver?.disconnect?.();
      termRef.current = null;
    };
  }, [containerRef, socket]);

  useEffect(() => {
    termRef.current?.clear();
  }, [language]);

  return {
    clear: () => {
      termRef.current?.clear();
    },
  };
};
