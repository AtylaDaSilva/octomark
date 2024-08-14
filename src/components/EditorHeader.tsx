import { Container, Box, styled, ContainerProps } from "@mui/material"

export default function EditorHeader() {
    const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
        border: `1px solid ${theme.palette.grey[700]}`,
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
        height: "45px"
    }))
    return (
        <CustomContainer maxWidth={false}>
            <Box>Editor Header</Box>
        </CustomContainer>
    )
}