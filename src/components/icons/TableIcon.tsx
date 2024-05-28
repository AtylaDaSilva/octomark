"use client"
// React
import { useState } from "react";

// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { GridOn } from "@mui/icons-material";

// Components
import { FormModal } from "../modals";

// Types
import type { CommandBarProps } from "../CommandBar";
import type { tablePropsType } from "@/commands/table";

// Commands
import { handleCommand, table } from "@/commands";

export default function ImageIcon(props: CommandBarProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tableProps, setTableProps] = useState<tablePropsType>({
        width: 2,
        length: 2,
        textAlign: "center"
    })

    const handleStateChange = (
        field : "width" | "length" | "textAlign",
        value : any
    ) => {
        setTableProps(currentState => {
            return {
                ...currentState,
                [field]: value
            }
        })
    }

    return (
        <>
            <Tooltip title="Table">
                <IconButton
                    aria-label="Insert Table"
                    color="info"
                    onClick={() => setIsModalOpen(true)}
                >
                    <GridOn />
                </IconButton>
            </Tooltip>
            <FormModal
                isOpen={isModalOpen}
                handleSubmit={() => {
                    handleCommand(
                        table,
                        { selection: props.selection, tableProps },
                        props.setSelection,
                        props.markdown,
                        props.setMarkdown
                    );
                    setIsModalOpen(false);
                }}
                handleClose={() => setIsModalOpen(false)}
                modalTitle="Insert Table"
                formFields={[
                    {
                        type: "number",
                        label: "width",
                        required: true,
                        columns: 6,
                        handleChange: (value: any) => handleStateChange("width", value),
                        value: tableProps.width
                    },
                    {
                        type: "number",
                        label: "length",
                        required: true,
                        columns: 6,
                        handleChange: (value: any) => handleStateChange("length", value),
                        value: tableProps.length
                    },
                    {
                        type: "select",
                        options:[
                            { label: "center", value: "center" },
                            { label: "right", value: "right" },
                            { label: "left", value: "left" }
                        ],
                        label: "text align",
                        columns: 12,
                        handleChange: (value: any) => handleStateChange("textAlign", value),
                        value: tableProps.textAlign
                    }
                ]}
            />
        </>
    );
}