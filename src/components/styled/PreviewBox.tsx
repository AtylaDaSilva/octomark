import { Box, BoxProps, styled } from "@mui/material";

export const PreviewBox = styled(Box)<BoxProps>(({ theme }) => {
    const borderColor = `1px solid ${theme.palette.grey[700]}`;
    return ({
        borderRight: borderColor,
        borderBottom: borderColor,
        borderLeft: borderColor
    })
});