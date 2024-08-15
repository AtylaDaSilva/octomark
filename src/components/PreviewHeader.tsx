import { Container, styled, ContainerProps } from "@mui/material"

export default function PreviewHeader() {
    const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
        border: `1px solid ${theme.palette.grey[700]}`,
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
        height: "3.2rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
        // boxSizing: "border-box"
    }))
    return (
        <CustomContainer maxWidth={false}>
            Preview Header
        </CustomContainer>
    )
}