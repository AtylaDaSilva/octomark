/** Extracts text selected with a mouse from an HTML textarea input.
 * @param eventTarget Textarea HTML element reference.
 * @param markdown Markdown state string.
 */
export class TextSelector {
    readonly eventTarget: any;
    readonly markdown: string;
    selectedText: selectedTextType | null

    constructor(eventTarget: any, markdown: string) {
        this.selectedText = null;
        this.eventTarget = eventTarget;
        this.markdown = markdown;
    }

    getCursorPosition() : number {
        return this.eventTarget.selectionStart
    }

    getSelectedText() : selectedTextType {
        const { selectionStart, selectionEnd } = this.eventTarget;
        this.selectedText = {
            text: this.markdown.slice(selectionStart, selectionEnd),
            startPosition: selectionStart,
            endPosition: selectionEnd,
        }

        return this.selectedText;
    }
}

// Types

export type selectedTextType = {
    text: string,
    startPosition?: number,
    endPosition?: number,
}
