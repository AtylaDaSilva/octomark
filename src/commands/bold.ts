// Types
import { selectedTextType } from "@/classes";

export function bold (selectionState : selectedTextType) {
    console.log("function 'bold' invoked");
    console.log(selectionState);
    const newSelection : selectedTextType = {
        ...selectionState,
        text: `**${selectionState.text}**`
    };
    console.log("New selection = ");
    console.log(newSelection);
    return newSelection;
}