// Types
import { TCommandFuncArgs } from "@/types";

/**
 * Inserts emoji code into selection.
 * @returns string
 */
export function emoji({ emojiCode } : TCommandFuncArgs) : string {
    return `${emojiCode}`;
}