// Types
import { EditorSelection } from "@/classes";
import { TCommandFuncArgs } from "@/types";

/**
 * Inserts emoji code into selection.
 * @param selection Selection state.
 * @returns EditorSelection object
 */
export function emoji({ selection, emojiCode } : TCommandFuncArgs) : EditorSelection {
    const newSelection : EditorSelection = {
        ...selection,
        text: `${emojiCode}`
    };
    return newSelection;
}