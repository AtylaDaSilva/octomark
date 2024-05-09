// Types
import { selectedTextType } from "@/classes";
import { commandFuncArgsType } from "./handleCommand";

/**
 * Converts text to 'bulleted list' Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns selectedTextType object
 */
export function bulletedList({ selection } : commandFuncArgsType) : selectedTextType {
    const newSelection : selectedTextType = {
        ...selection,
        text: `* ${selection?.text.replaceAll(/\n/g, "\n* ")}`
    };
    return newSelection;
}