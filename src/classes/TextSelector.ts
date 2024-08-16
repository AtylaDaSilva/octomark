import type { TEditorRef } from "@/types";
import { EditorSelection } from "./EditorSelection";

/** Extracts the selected text within a text editor
 * @param editorRef The reference of the text editor.
 */
export class TextSelector {
    readonly editorRef: TEditorRef;

    constructor(editorRef: TEditorRef) {
        this.editorRef = editorRef.current
    }

    getEditorRef(): void {
        return this.editorRef;
    }

    getSelection(): EditorSelection | null {
        if (this.editorRef) {
            const range = this.editorRef.getSelection()
            const text = this.editorRef.getModel().getValueInRange(range)
            return new EditorSelection(range, text)
        }

        return null;
    }
}