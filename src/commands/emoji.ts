// Types
import { selectedTextType } from "@/classes";
import { commandFuncArgsType } from "./handleCommand";

/**
 * Inserts emoji code into selection.
 * @param selection Selection state.
 * @returns selectedTextType object
 */
export function emoji({ selection, emojiCode } : commandFuncArgsType) : selectedTextType {
    const newSelection : selectedTextType = {
        ...selection,
        text: `${emojiCode}`
    };
    return newSelection;
}