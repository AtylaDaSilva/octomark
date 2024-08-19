// Types
import { EditorSelection } from "@/classes";
import { TCommandFuncArgs } from "@/types";

/**
 * Converts text to comment Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns EditorSelection object
 */
export function comment({ selection } : TCommandFuncArgs) : EditorSelection {
    const newSelection : EditorSelection = {
        ...selection,
        text: `<!--${selection?.text}-->`
    };
    return newSelection;
}