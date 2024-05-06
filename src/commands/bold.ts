import { TextSelector } from "@/classes";

export function bold () {
    console.log("function 'bold' invoked");
    const selector = new TextSelector();
    selector.getSelectedText();
}