// Types
import { EditorSelection } from "@/types";
import type { TCommandFuncArgs } from "./handleCommand";

/**
 * Converts text to 'alert' Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns EditorSelection object
 */
export function alert(
    { selection, alertLevel } : TCommandFuncArgs
) : EditorSelection {
    let alertMarkdown = `[!${alertLevel?.toUpperCase()}]`;
    const newSelection : EditorSelection = {
        ...selection,
        text: `> ${alertMarkdown}\n> ${selection?.text}`
    };
    return newSelection;
}