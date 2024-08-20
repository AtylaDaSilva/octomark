// Types
import { TCommandFuncArgs } from "@/types";

/**
 * Inserts 'image' Github-Flavored Markdown into text.
 * @param selectedText The currently selected text in the editor
 * @returns string
 */
export function image({ selectedText, imageProps } : TCommandFuncArgs) {
    return `![${selectedText}](${imageProps?.uri})`
}