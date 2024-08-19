import { EditorSelection } from "@/classes";

// Types
import type { TCommandFuncArgs } from "@/types";

/**
 * Converts text to italicized Github-Flavored Markdown.
 * @param selectionState Selection state.
 * @returns EditorSelection object
 */
export function italic({ selection } : TCommandFuncArgs) : EditorSelection {
    return new EditorSelection(selection?.range, `_${selection?.text}_`)
}