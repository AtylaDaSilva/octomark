// Types
import { selectedTextType } from "@/classes";
import { commandFuncArgsType } from "./handleCommand";

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

export type linkProps = {
    uri: string
}