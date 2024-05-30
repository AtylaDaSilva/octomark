// Next Components
import Link from "next/link";

// MUI Components
import { Toolbar, AppBar, AppBarProps, Typography, TextField, TextFieldProps, Container, Box, styled } from "@mui/material";

// App Components
import { GitHubLink, LinkedInLink } from "./links";

// Types
import { Dispatch, SetStateAction } from "react";

// Component types
export type AppbarType = {
    markdownTitle: {
        state: string,
        updater: Dispatch<SetStateAction<string>>
    }
}

// Utils
import { capitalize } from "@/functions/capitalize";

// Styled Components
const CustomAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.grey[700]}`,
    backgroundColor: theme.palette.background.paper,
    padding: "5px 0px",
}));

const MarkdownTitleField = styled(TextField)<TextFieldProps>(({ theme }) => ({
    border: "none"
}));

export default function Appbar({ markdownTitle }: AppbarType) {

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
                            <Link href="/" className="no-text-decor">OctoMark</Link>
                        </Typography>
                    </Box>
                    <Box flexGrow={1} margin="0px 250px">
                        <MarkdownTitleField
                            inputProps={{
                                readOnly: true,
                                style: {
                                    textAlign: "center",
                                    fontSize: "1.2rem"
                                },
                            }}
                            fullWidth
                            onChange={({target}) => markdownTitle.updater(target.value)}
                            value={capitalize(markdownTitle.state)}
                        />
                    </Box>
                    <Box>
                            <GitHubLink />
                            <LinkedInLink />
                    </Box>
                </Container>
            </Toolbar>
        </CustomAppBar>
    );
}