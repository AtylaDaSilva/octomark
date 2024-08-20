// Types
import { TCommandFuncArgs } from "@/types";

/**
 * Converts text to 'link' Github-Flavored Markdown.
 * @param selectedText The currently selected text in the editor
 * @returns string
 */
export function link({ selectedText, linkProps } : TCommandFuncArgs) : string {
    return `[${selectedText}](${linkProps?.uri})`
}