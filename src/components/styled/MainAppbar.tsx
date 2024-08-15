import { AppBar, AppBarProps, styled } from "@mui/material";

export const MainAppbar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.grey[700]}`,
    backgroundColor: theme.palette.background.paper,
    padding: "0px",
}));