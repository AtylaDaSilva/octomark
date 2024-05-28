import { createTheme } from "@mui/material/styles";

const GitHubDark = createTheme({
    palette: {
        primary: {
            main: "#3178c6",
            contrastText: "#e6edf3",
        },
        secondary: {
            main: "#238636",
        },
        info: {
            main: "#e6edf3"
        },
        grey: {
            "700": "#2f353c"
        },
        background: {
            paper: "#010409",
            default: "#0d1117",
            // default: "#010409"
        },
        text: {
            primary: "#e6edf3"
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
        }
    }
});

export default GitHubDark;