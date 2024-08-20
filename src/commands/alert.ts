// Types
import type { TCommandFuncArgs } from "@/types";

/**
 * Converts text to 'alert' Github-Flavored Markdown.
 * @param selectedText The currently selected text in the editor
 * @returns string
 */
export function alert({ selectedText, alertLevel } : TCommandFuncArgs) : string {
    return `> [!${alertLevel?.toUpperCase()}]\n> ${selectedText}`;
}