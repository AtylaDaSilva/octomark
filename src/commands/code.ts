// Types
import { EditorSelection } from "@/classes";
import { TCommandFuncArgs } from "@/types";

/**
 * Converts text to code Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns EditorSelection object
 */
export function code({ selection } : TCommandFuncArgs) : EditorSelection {
    return new EditorSelection(selection?.range, `<!--${selection?.text}-->`)
}