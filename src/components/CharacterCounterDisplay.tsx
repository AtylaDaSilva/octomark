import { Typography } from "@mui/material";
import { TState } from "@/types";
import { DEFAULT_EDITOR_FONT } from "@/utils/constants";

export default function CharacterCounterDisplay({state}: { state: TState }) {
    return (
        <Typography align="center" fontFamily={DEFAULT_EDITOR_FONT} fontSize=".9rem">
            {`${state.charCount} character${(state.charCount !== 1) ? 's' : ''}`}
        </Typography>
    );
}