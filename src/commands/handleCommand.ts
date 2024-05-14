// Types
import { Dispatch, SetStateAction } from "react";
import { selectedTextType } from "@/classes";
import type { alertLevelType } from "./alert";
import type { headingLevelType } from "./heading";
import type { imagePropsType } from "./image";
import type { tablePropsType } from "./table";

/**
 * Executes commandFunction, passing selection as argument, and updates selection and markdown states.
 * @param commandFunction The command function (bold, italics, etc.) to be executed
 * @param commandFuncArgs Array of arguments to be passed to commandFunction.
 * @param setSelection Selection state updater.
 * @param markdown Markdown state. Used to update contents of the TextFied component.
 * @param setMarkdown Markdown state updater.
 */
export function handleCommand(
    commandFunction : (commandFuncArgs : commandFuncArgsType) => selectedTextType,
    commandFuncArgs : commandFuncArgsType,
    setSelection: Dispatch<SetStateAction<selectedTextType>>,
    markdown : string,
    setMarkdown : Dispatch<SetStateAction<string>>
) {
    const sel = commandFunction(commandFuncArgs);
    setSelection(sel);

    let newMarkdown = "";
    newMarkdown = newMarkdown.concat(
        markdown.slice(0, commandFuncArgs?.selection?.startPosition),
        sel.text,
        markdown.slice(commandFuncArgs?.selection?.endPosition)
    )
    setMarkdown(newMarkdown);
}

export type commandFuncArgsType = {
    selection?: selectedTextType,
    headingLevel?: headingLevelType,
    alertLevel?: alertLevelType,
    tableProps?: tablePropsType,
    imageProps?: imagePropsType
    state?: {
        value: any,
        updater: Dispatch<SetStateAction<any>>
    }
}