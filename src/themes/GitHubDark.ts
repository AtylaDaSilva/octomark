import { createTheme } from "@mui/material/styles";

const GitHubDark = createTheme({
    palette: {
        primary: {
            main: "#e6edf3"
        },
        background: {
            paper: "#010409",
            default: "#0d1117",
        },
        text: {
            primary: "#e6edf3",
            secondary: "#e6edf3"
        }
    },
    shape: {
        borderRadius: 5
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    border: "1px solid #2f353c",
                    borderRadius: "5px"
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    borderRadius: "5px",
                    margin: "5px",
                    ":hover": {
                        backgroundColor: "#f0f6fc1a",
                    }
                },
            }
        }
    }
});

export default GitHubDark;