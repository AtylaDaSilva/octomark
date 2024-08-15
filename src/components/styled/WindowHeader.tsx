import { Box, styled, BoxProps } from "@mui/material"

export const WindowHeader = styled(Box)<BoxProps>(({ theme }) => ({
    border: `1px solid ${theme.palette.grey[700]}`,
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    backgroundColor: theme.palette.background.default,
    height: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
}))