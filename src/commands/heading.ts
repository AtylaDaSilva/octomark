// Types
import { selectedTextType, commandFuncArgsType } from "@/types";

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