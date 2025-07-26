'use client'
import { ExecutionToggleProvider } from "@/app/context/context";
import "./editor.module.css";

export default function CodeEditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ExecutionToggleProvider>
        <body>
          <main>
            {children}
          </main>
        </body>
      </ExecutionToggleProvider>
    </html>
  );
}