// Types
import type { TCommandFuncArgs } from "@/types";

/**
 * Converts text to italicized Github-Flavored Markdown.
 * @param selectionState Selection state.
 * @returns string
 */
export function italic({ selectedText } : TCommandFuncArgs) : string {
    return `_${selectedText}_`
}