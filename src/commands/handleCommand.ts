// Types
import { TCommandFunc, TCommandFuncArgs, TState } from "@/types";

/**
 * Executes commandFunction on the selected text in the editor and updates markdown state.
 * @param commandFunction The command function to be executed (bold, italics, etc.).
 * @param editorRef A reference to the text editor.
 * @param state An object containing state
 */
export function handleCommand(
    commandFunction: TCommandFunc,
    editorRef: any,
    state: TState,
    commandFuncArgs?: TCommandFuncArgs,
) {
    // Get selectrion range and text
    const selection = editorRef.current.getSelection()
    const selectedText = editorRef.current.getModel().getValueInRange(selection)

    // Push the edit into the editor
    const edit = {
        identifier: "command",
        range: selection,
        text: commandFunction({ ...commandFuncArgs, selectedText: selectedText })
    }
    editorRef.current.getModel().pushEditOperations([selection], [edit])

    // Update state
    if (state.setMarkdown) {
        state.setMarkdown(editorRef.current.getModel().getValue())
    }

    // Focus on editor
    editorRef.current.focus()
}