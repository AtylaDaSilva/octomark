// Types
import { TCommandFuncArgs } from "@/types";

/**
 * Converts text to 'bulleted list' Github-Flavored Markdown.
 * @param selectedText The currently selected text in the editor
 * @returns string
 */
export function bulletedList({ selectedText } : TCommandFuncArgs) : string {
    return `* ${selectedText?.replaceAll(/\n/g, "\n* ")}` // Replaces subsequent \n characters with *
}