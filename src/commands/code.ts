// Types
import { TCommandFuncArgs } from "@/types";

/**
 * Converts text to 'code' Github-Flavored Markdown.
 * @param selectedText The currently selected text in the editor
 * @returns string
 */
export function code({ selectedText } : TCommandFuncArgs) : string {
    const oneLine = `\`\`\`${selectedText}\`\`\``;
    const multiLine = `\`\`\`\n${selectedText}\n\`\`\``
    return selectedText?.indexOf("\n") === -1 ? oneLine : multiLine
}