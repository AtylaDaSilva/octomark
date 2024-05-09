// Types
import { selectedTextType } from "@/classes";
import { commandFuncArgsType } from "./handleCommand";

/**
 * Converts text to 'numbered list' Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns selectedTextType object
 */
export function numberedList({ selection } : commandFuncArgsType) : selectedTextType {
    var counter = 1;
    const replacer = () => {
        counter += 1;
        return `\n${counter}. `;
    }
    const newSelection : selectedTextType = {
        ...selection,
        text: `1. ${selection?.text.replaceAll(/\n/g, replacer)}`
    };
    return newSelection;
}