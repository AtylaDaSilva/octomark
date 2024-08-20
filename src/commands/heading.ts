// Types
import { TCommandFuncArgs } from "@/types";

/**
 * Converts text to "bold" Github-Flavored Markdown.
 * @param selectedText The currently selected text in the editor
 * @returns string
 */
export function heading({ selectedText, headingLevel } : TCommandFuncArgs): string {
    const headingMarkdown = "#";
    return `${headingMarkdown.repeat(headingLevel || 1)} ${selectedText}`
}