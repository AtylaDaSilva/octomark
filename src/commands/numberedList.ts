// Types
import { TCommandFuncArgs } from "@/types";

/**
 * Converts text to 'numbered list' Github-Flavored Markdown.
 * @param selectedText The currently selected text in the editor
 * @returns string
 */
export function numberedList({ selectedText } : TCommandFuncArgs) : string {
    var counter = 1;
    const replacer = () => {
        counter += 1;
        return `\n${counter}. `;
    }
    return `1. ${selectedText?.replaceAll(/\n/g, replacer)}`;
}