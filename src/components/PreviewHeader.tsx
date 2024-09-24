import { WindowHeader } from "@/components/styled/WindowHeader";
import CharacterCounterDisplay from "./CharacterCounterDisplay";
import { TState } from "@/types";

export default function PreviewHeader({ state }: { state: TState }) {
    return (
        <WindowHeader padding="0px 15px" display="flex" alignItems="center" sx={{ height: "2.5rem" }}>
            <CharacterCounterDisplay state={state} />
        </WindowHeader>
    )
}