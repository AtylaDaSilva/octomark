// Types
import { selectedTextType } from "@/classes";
import { commandFuncArgsType } from "./handleCommand";
import { match } from "assert";

/**
 * Converts text to 'footnote' Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns selectedTextType object
 */
export function footnote({ selection, state } : commandFuncArgsType) : selectedTextType {
    var counter = state?.value + 1;
    var append = `[^${counter}]: Footnote ${counter}\n`;

    const replacer = () => {
        const res = `[^${counter}]  \n`;
        counter += 1;
        append += `[^${counter}]: Footnote ${counter}\n`;
        return res;
    }

    let newSelection : selectedTextType = {
        ...selection,
        text: `${selection?.text.replaceAll(/\n/g, replacer)}[^${counter}]\n\n${append}`
    };

    state?.updater(counter);

    return newSelection;
}