// Types
import { selectedTextType } from "@/classes";
import type { commandFuncArgsType } from "./handleCommand";

/**
 * Converts text to bold Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns selectedTextType object
 */
export function heading(
    { selection, headingLevel } : commandFuncArgsType
) : selectedTextType {
    const headingMarkdown = "#";
    const newSelection : selectedTextType = {
        ...selection,
        text: `${headingMarkdown.repeat(headingLevel || 1)} ${selection?.text}`
    };
    return newSelection;
}

// Component types
export type headingLevelType = 1 | 2 | 3 | 4 | 5 | 6;