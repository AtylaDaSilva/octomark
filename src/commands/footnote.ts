// Types
import { EditorSelection } from "@/classes";
import { TCommandFuncArgs } from "@/types";
import { match } from "assert";

/**
 * Converts text to 'footnote' Github-Flavored Markdown.
 * @param selection Selection state.
 * @returns EditorSelection object
 */
export function footnote({ selection, state } : TCommandFuncArgs) : EditorSelection {
    var counter = state?.value + 1;
    var append = `[^${counter}]: Footnote ${counter}\n`;

    const replacer = () => {
        const res = `[^${counter}]  \n`;
        counter += 1;
        append += `[^${counter}]: Footnote ${counter}\n`;
        return res;
    }

    let newSelection : EditorSelection = {
        ...selection,
        text: `${selection?.text.replaceAll(/\n/g, replacer)}[^${counter}]\n\n${append}`
    };

    state?.updater(counter);

    return newSelection;
}