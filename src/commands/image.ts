// Types
import { selectedTextType } from "@/classes";
import { commandFuncArgsType } from "./handleCommand";

/**
 * Inserts 'image' Github-Flavored Markdown into text.
 * @param selection Selection state.
 * @returns selectedTextType object
 */
export function image({ selection, imageProps } : commandFuncArgsType) {
    const newSelection : selectedTextType = {
        ...selection,
        text: `![${imageProps?.altText}](${imageProps?.uri})`
    };
    return newSelection;
}

// Component types
export type imagePropsType = {
    uri: string,
    altText: string
}