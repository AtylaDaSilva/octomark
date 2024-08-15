import { WindowHeader } from "@/components/styled/WindowHeader";
import CommandBar from "./CommandBar"
import { stateType } from "@/app/page"

export default function EditorHeader({ state }: { state: stateType }) {
    return (
        <WindowHeader>
            <CommandBar state={state} />
        </WindowHeader>
    )
}