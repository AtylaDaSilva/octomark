// Types
import { selectedTextType, commandFuncArgsType } from "@/types";

/**
 * Converts text to 'link' Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns selectedTextType object
 */
export function link({ selection, linkProps } : commandFuncArgsType) : selectedTextType {
    const newSelection : selectedTextType = {
        ...selection,
        text: `[${selection?.text}](${linkProps?.uri})`
    };
    return newSelection;
}