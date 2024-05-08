// Types
import { selectedTextType } from "@/classes";
import { commandFuncArgsType } from "./handleCommand";

/**
 * Converts text to striketrhough Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns selectedTextType object
 */
export function strikethrough ({ selection } : commandFuncArgsType) : selectedTextType {
    const newSelection : selectedTextType = {
        ...selection,
        text: `~~${selection?.text}~~`
    };
    return newSelection;
}