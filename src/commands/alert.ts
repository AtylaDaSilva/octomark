// Types
import { selectedTextType } from "@/classes";
import type { commandFuncArgsType } from "./handleCommand";

/**
 * Converts text to 'alert' Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns selectedTextType object
 */
export function alert(
    { selection, alertLevel } : commandFuncArgsType
) : selectedTextType {
    let alertMarkdown = `[!${alertLevel?.toUpperCase()}]`;
    const newSelection : selectedTextType = {
        ...selection,
        text: `> ${alertMarkdown}\n> ${selection?.text}`
    };
    return newSelection;
}

// Component types
export type alertLevelType = "note" | "tip" | "important" | "warning" | "caution";