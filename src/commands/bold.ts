import type { TCommandFuncArgs } from "@/types"
/**
 * Returns a new string with text wrapped in bold GFM markdown.
 * @param selectedText The currently selected text in the editor
 * @return string
 */
export function bold({ selectedText }: TCommandFuncArgs): string {
    if (selectedText != null && !isBold(selectedText)) {
        return `**${selectedText}**`;
    } else if (selectedText != null && isBold(selectedText)) {
        return undoBold(selectedText)
    }
    return "****"
}

export function isBold(selectedText: string): boolean {
    const l = selectedText?.length
    if (l >= 4) {
        const index = [0, 1, l - 1, l-2]
        return index.every((idx) => selectedText.charAt(idx) == "*") ? true : false;
    }
    return false;
}

export function undoBold(selectedText: string): string {
    // Replace leading and trailing ** in `selectedText` with empty string
    const l = selectedText.length
    if (isBold(selectedText)) {
        return selectedText.slice(2, l-2)
    }
    return selectedText
}