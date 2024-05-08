// Types
import { selectedTextType } from "@/classes";
import type { commandFuncArgsType } from "./handleCommand";

/**
 * Converts text to italicized Github-Flavored Markdown.
 * @param selectionState Selection state.
 * @returns selectedTextType object
 */
export function italic({ selection } : commandFuncArgsType) : selectedTextType {
    const newSelection : selectedTextType = {
        ...selection,
        text: `_${selection?.text}_`
    };
    return newSelection;
}