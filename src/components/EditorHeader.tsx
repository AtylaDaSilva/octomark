import { WindowHeader } from "@/components/styled/WindowHeader";
import CommandBar from "./CommandBar"
import { TReference, TState } from "@/types"

export default function EditorHeader(
    { state, reference }: { state: TState, reference: TReference }
) {
    return (
        <WindowHeader>
            <CommandBar state={state} reference={reference} />
        </WindowHeader>
    )
}