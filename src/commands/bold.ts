import { EditorSelection } from "@/classes"
import type { TCommandFuncArgs } from "@/types"
/**
 * Returns a new string with text wrapped in bold GFM markdown.
 * @param selection Selection state.
 * @return string
 */
export function bold({ selection }: TCommandFuncArgs): EditorSelection {
    return new EditorSelection(selection?.range, `**${selection?.text}**`)
}