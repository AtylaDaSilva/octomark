// Types
import { EditorSelection } from "@/classes";
import { TCommandFuncArgs } from "@/types";

/**
 * Converts text to 'numbered list' Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns EditorSelection object
 */
export function numberedList({ selection } : TCommandFuncArgs) : EditorSelection {
    var counter = 1;
    const replacer = () => {
        counter += 1;
        return `\n${counter}. `;
    }
    const newSelection : EditorSelection = {
        ...selection,
        text: `1. ${selection?.text.replaceAll(/\n/g, replacer)}`
    };
    return newSelection;
}