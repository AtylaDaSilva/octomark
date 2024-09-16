"use client"
// React
import { useState } from "react";

// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { Image } from "@mui/icons-material";

// Components
import { FormModal } from "../modals";

// Types
import { TState, TReference } from "@/types";

// Commands
import { handleCommand, image } from "@/commands";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

export default function ImageIcon({ state, reference }: { state: TState, reference: TReference }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uri, setUri] = useState("");

    return (
        <>
            <Tooltip title="Format selected text as Image">
                <IconButton
                    aria-label="Modal | Format selected text as Image"
                    color="info"
                    onClick={() => setIsModalOpen(true)}
                >
                    <Image sx={{ fontSize: DEFAULT_ICON_SIZE }} />
                </IconButton>
            </Tooltip>
            <FormModal
                isOpen={isModalOpen}
                handleSubmit={() => {
                    handleCommand(
                        image,
                        reference.editorRef,
                        state,
                        { imageProps: { uri } }
                    );
                    setIsModalOpen(false);
                }}
                handleClose={() => setIsModalOpen(false)}
                formFields={[
                    {
                        type: "text",
                        label: "Image URI",
                        required: true,
                        columns: 12,
                        handleChange: setUri,
                        value: uri,
                        variant: "outlined"
                    }
                ]}
            />
        </>
    );
}