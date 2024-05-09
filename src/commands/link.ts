// Types
import { selectedTextType } from "@/classes";
import { commandFuncArgsType } from "./handleCommand";

/**
 * Converts text to 'link' Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns selectedTextType object
 */
export function link({ selection, uri } : commandFuncArgsType) : selectedTextType {
    const newSelection : selectedTextType = {
        ...selection,
        text: `[${selection?.text}](${uri})`
    };
    return newSelection;
}