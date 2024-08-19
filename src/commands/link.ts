// Types
import { TCommandFuncArgs } from "@/types";

/**
 * Converts text to 'link' Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns EditorSelection object
 */
export function link({ selection, linkProps } : TCommandFuncArgs) : EditorSelection {
    const newSelection : EditorSelection = {
        ...selection,
        text: `[${selection?.text}](${linkProps?.uri})`
    };
    return newSelection;
}