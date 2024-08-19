// Types
import { EditorSelection } from "@/classes";
import { TCommandFuncArgs } from "@/types";

/**
 * Converts text to 'task list' Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns EditorSelection object
 */
export function taskList({ selection } : TCommandFuncArgs) : EditorSelection {
    const newSelection : EditorSelection = {
        ...selection,
        text: `- [ ] ${selection?.text.replaceAll(/\n/g, "\n- [ ] ")}`
    };
    return newSelection;
}