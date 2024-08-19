// Types
import { EditorSelection } from "@/classes";
import { TCommandFuncArgs } from "@/types";

/**
 * Inserts 'image' Github-Flavored Markdown into text.
 * @param selection Selection state.
 * @returns EditorSelection object
 */
export function image({ selection, imageProps } : TCommandFuncArgs) {
    return new EditorSelection(selection?.range, `![Image](${imageProps?.uri})`)
}