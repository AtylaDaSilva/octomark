import { TSelectionRange, } from "@/types";

/**
 * Defines a selection of text within a text editor
 * @param range Range of the selection.
 * @param text  The selected text.
 */
export class EditorSelection {
    readonly range: TSelectionRange;
    readonly text: string;

    constructor(range: TSelectionRange, text: string) {
        this.range = range;
        this.text = text;
    }

    getRange(): TSelectionRange {
        return this.range
    }

    getText(): string {
        return this.text
    }
}