// Types
import { EditorSelection } from "@/classes";
import { TCommandFuncArgs } from "@/types";

/**
 * Converts text to 'bulleted list' Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns EditorSelection object
 */
export function bulletedList({ selection } : TCommandFuncArgs) : EditorSelection {
    return new EditorSelection(selection?.range, `* ${selection?.text.replaceAll(/\n/g, "\n* ")}`)
}