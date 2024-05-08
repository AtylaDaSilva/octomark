// Types
import { selectedTextType } from "@/classes";
import { commandFuncArgsType } from "./handleCommand";

/**
 * Converts text to code quote Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns selectedTextType object
 */
export function code({ selection } : commandFuncArgsType) : selectedTextType {
    const newSelection : selectedTextType = {
        ...selection,
        text: "`" + selection?.text + "`"
    };
    return newSelection;
}