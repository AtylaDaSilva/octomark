import { Container, styled, ContainerProps } from "@mui/material"
import CommandBar from "./CommandBar"
import { stateType } from "@/app/page"

export default function EditorHeader({ state }: { state: stateType }) {
    const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
        border: `1px solid ${theme.palette.grey[700]}`,
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
        height: "3.2rem",
        display: "flex",
        alignItems: "center"
    }))
    return (
        <CustomContainer maxWidth={false}>
            <CommandBar state={state} />
        </CustomContainer>
    )
}