// Types
import { selectedTextType } from "@/classes";
import { commandFuncArgsType } from "./handleCommand";

/**
 * Converts text to comment Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns selectedTextType object
 */
export function comment({ selection } : commandFuncArgsType) : selectedTextType {
    const newSelection : selectedTextType = {
        ...selection,
        text: `<!--${selection?.text}-->`
    };
    return newSelection;
}