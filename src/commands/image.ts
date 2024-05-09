// Types
import { selectedTextType } from "@/classes";
import { commandFuncArgsType } from "./handleCommand";

/**
 * Inserts 'image' Github-Flavored Markdown into text.
 * @param selection Selection state.
 * @returns selectedTextType object
 */
export function image({ selection, uri, altText } : commandFuncArgsType) {
    const newSelection : selectedTextType = {
        ...selection,
        text: `![${altText}](${uri})`
    };
    return newSelection;
}