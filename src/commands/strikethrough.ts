// Types
import { TCommandFuncArgs } from "@/types";

/**
 * Converts text to "striketrhough" Github-Flavored Markdown.
 * @param selectedText The currently selected text in the editor
 * @returns string
 */
export function strikethrough ({ selectedText } : TCommandFuncArgs) : string {
    return `~${selectedText}~`
}