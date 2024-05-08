// Types
import { Dispatch, SetStateAction } from "react";
import { selectedTextType } from "@/classes";

export function handleCommand(
    commandFunction : (selectionState : selectedTextType) => selectedTextType,
    selectionState : selectedTextType,
    setSelection: Dispatch<SetStateAction<selectedTextType>>,
    markdownState : string,
    setMarkdown : Dispatch<SetStateAction<string>>
) {
    console.log("function 'handleCommand' invoked");

    console.log("State BEFORE command = ");
    console.log(selectionState);

    const sel = commandFunction(selectionState);

    console.log("State After command = ");
    console.log(sel);

    console.log("Updating selection state...");
    setSelection(sel);

    console.log("Updating markdown state...");
    let newMarkdown = "";
    //console.log(markdownState.slice(0, selectionState.startPosition))
    //console.log(markdownState.slice(selectionState.endPosition))
    newMarkdown = newMarkdown.concat(
        markdownState.slice(0, selectionState.startPosition),
        sel.text,
        markdownState.slice(selectionState.endPosition)
    )
    console.log(newMarkdown);
    setMarkdown(newMarkdown);
}