// Types
import { TCommandFuncArgs } from "@/types";

/**
 * Converts text to 'task list' Github-Flavored Markdown.
 * @param selectedText The currently selected text in the editor
 * @returns string
 */
export function taskList({ selectedText } : TCommandFuncArgs) : string {
    return `- [ ] ${selectedText?.replaceAll(/\n/g, "\n- [ ] ")}`; // Replaces subsequent new line characters with '- [ ]'
}