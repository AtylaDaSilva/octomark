//Classes
import { TextSelector } from "@/classes";

// Types
import { TCommandFunc, TCommandFuncArgs, TEditorRef, TState } from "@/types";

/**
 * Executes commandFunction on the selected text in the editor and updates markdown state.
 * @param commandFunction The command function to be executed (bold, italics, etc.).
 * @param editorRef A reference to the text editor.
 * @param state An object containing state
 */
export function handleCommand(
    commandFunction: TCommandFunc,
    editorRef: TEditorRef,
    state: TState,
    commandFuncArgs?: TCommandFuncArgs,
) {
    // Get selected text
    const selector = new TextSelector(editorRef);
    const selection = selector.getSelection();
    const newSelection = commandFunction({ ...commandFuncArgs, selection: selection });

    // Update markdown
    if (state.setMarkdown) {
        state.setMarkdown(oldMarkdown => {
            return [
                oldMarkdown.slice(0, selection?.getRange().startColumn - 1) + 
                newSelection.text + 
                oldMarkdown.slice(selection?.getRange().endColumn - 1)
            ].join("")
        })
    }
}