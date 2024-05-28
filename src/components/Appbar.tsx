// MUI Components
import { Toolbar, AppBar, AppBarProps, Typography, Container, Box, styled } from "@mui/material";

// Component types
export type AppbarType = {
    title: string
}

const CustomAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.grey[700]}`,
    backgroundColor: theme.palette.background.default
}));

export default function Appbar({ title }: AppbarType) {

    return (
        <CustomAppBar position="static">
            <Toolbar>
                <Container
                    maxWidth={false}
                    sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Box position="absolute" left={0}>
                        <Typography
                            variant="h2"
                            fontSize="2rem"
                        >
                            OctoMark
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="h1"
                            fontSize="1.5rem"
                        >
                            {title}
                        </Typography>
                    </Box>
                </Container>
            </Toolbar>
        </CustomAppBar>
    );
}