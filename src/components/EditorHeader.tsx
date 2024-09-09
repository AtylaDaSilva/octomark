import { WindowHeader } from "@/components/styled/WindowHeader";
import CommandBar from "./CommandBar"
import { TReference, TState } from "@/types"
import { Height } from "@mui/icons-material";

export default function EditorHeader(
    { state, reference }: { state: TState, reference: TReference }
) {
    return (
        <WindowHeader display="flex" alignItems="center" sx={{ height: "2.5rem" }}>
            <CommandBar state={state} reference={reference} />
        </WindowHeader>
    )
}