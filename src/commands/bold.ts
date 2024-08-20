import type { TCommandFuncArgs } from "@/types"
/**
 * Returns a new string with text wrapped in bold GFM markdown.
 * @param selectedText The currently selected text in the editor
 * @return string
 */
export function bold({ selectedText }: TCommandFuncArgs): string {
    return `**${selectedText}**`;
}