"use client"
// React
import { useState } from "react";

// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { GridOn } from "@mui/icons-material";

// Components
import { FormModal } from "../modals";

// Types
import type { TTableProps } from "@/types";

// Commands
import { handleCommand, table } from "@/commands";
import { TState, TReference } from "@/types";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

export default function ImageIcon({ state, reference }: { state: TState, reference: TReference }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const defaultTableProps: TTableProps = {
        width: 2,
        length: 2,
        textAlign: "center"
    }
    const [tableProps, setTableProps] = useState<TTableProps>(defaultTableProps)

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
            <Tooltip title="Insert a Table where the cursor is positioned">
                <IconButton
                    aria-label="Modal | Insert a Table where the cursor is positioned"
                    color="info"
                    onClick={() => setIsModalOpen(true)}
                >
                    <GridOn sx={{ fontSize: DEFAULT_ICON_SIZE }} />
                </IconButton>
            </Tooltip>
            <FormModal
                isOpen={isModalOpen}
                handleSubmit={() => {
                    handleCommand(
                        table,
                        reference.editorRef,
                        state,
                        { tableProps },
                    );
                    setIsModalOpen(false);
                    setTableProps(defaultTableProps)
                }}
                handleClose={() => {
                    setIsModalOpen(false)
                    setTableProps(defaultTableProps)
                }}
                modalTitle="Insert Table"
                formFields={[
                    {
                        type: "number",
                        label: "Columns",
                        ariaLabel: "Table Form Field | Number of columns",
                        required: true,
                        columns: 6,
                        handleChange: (value: any) => handleStateChange("width", value),
                        value: tableProps.width
                    },
                    {
                        type: "number",
                        label: "Rows",
                        ariaLabel: "Table Form Field | Number of rows",
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
                        label: "Text Alignment",
                        ariaLabel: "Table Form Field | Text Alignment",
                        required: true,
                        columns: 12,
                        handleChange: (value: any) => handleStateChange("textAlign", value),
                        value: tableProps.textAlign
                    }
                ]}
            />
        </>
    );
}