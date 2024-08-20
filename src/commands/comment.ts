// Types
import { TCommandFuncArgs } from "@/types";

/**
 * Converts text to "comment" Github-Flavored Markdown.
 * @param selectedText The currently selected text in the editor
 * @returns string
 */
export function comment({ selectedText } : TCommandFuncArgs) : string {
    return `<!--${selectedText}-->`;
}