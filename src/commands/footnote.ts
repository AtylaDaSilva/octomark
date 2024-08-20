// Types
import { TCommandFuncArgs } from "@/types";
import { match } from "assert";

/**
 * Converts text to 'footnote' Github-Flavored Markdown.
 * @param selectedText The currently selected text in the editor
 * @returns string
 */
export function footnote({ selectedText, state } : TCommandFuncArgs) : string {
    var counter = state?.value + 1;
    var append = `[^${counter}]: Footnote ${counter}\n`;

    const replacer = () => {
        const res = `[^${counter}]  \n`;
        counter += 1;
        append += `[^${counter}]: Footnote ${counter}\n`;
        return res;
    }

    return `${selectedText?.replaceAll(/\n/g, replacer)}[^${counter}]\n\n${append}`;
}