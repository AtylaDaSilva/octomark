// Types
import { EditorSelection } from "@/classes";
import { TCommandFuncArgs, TSelection } from "@/types";

/**
 * Converts text to bold Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns selectedTextType object
 */
export function heading(
    { selection, headingLevel } : TCommandFuncArgs
): TSelection {
    const headingMarkdown = "#";
    return new EditorSelection(selection?.range, `${headingMarkdown.repeat(headingLevel || 1)} ${selection?.text}`)
}