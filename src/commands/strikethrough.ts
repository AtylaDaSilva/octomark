// Types
import { EditorSelection } from "@/classes";
import { TCommandFuncArgs } from "@/types";

/**
 * Converts text to striketrhough Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns EditorSelection object
 */
export function strikethrough ({ selection } : TCommandFuncArgs) : EditorSelection {
    return new EditorSelection(selection?.range, `~${selection?.text}~`)
}