// Types
import { selectedTextType, commandFuncArgsType } from "@/types";

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