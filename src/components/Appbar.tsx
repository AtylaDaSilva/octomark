// MUI Components
import { Toolbar, AppBar, Typography, Container, Box } from "@mui/material";
import type { AppbarType } from "@/utils/types";

export default function Appbar({ title }: AppbarType) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Container
                    maxWidth={false}
                    sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Box position="absolute" left={0}>
                        <Typography
                            variant="h2"
                            fontSize="2rem"
                        >
                            App Title
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
        </AppBar>
    );
}