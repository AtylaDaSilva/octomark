"use client"
// React
import { useState } from "react";

// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { Image } from "@mui/icons-material";

// Components
import { FormModal } from "../modals";

// Types
import { CommandBarProps } from "../CommandBar";

// Commands
import { handleCommand, image } from "@/commands";

export default function ImageIcon(props: CommandBarProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uri, setUri] = useState("");

    return (
        <>
            <Tooltip title="Image">
                <IconButton
                    aria-label="Insert Image"
                    color="info"
                    onClick={() => setIsModalOpen(true)}
                >
                    <Image />
                </IconButton>
            </Tooltip>
            <FormModal
                isOpen={isModalOpen}
                handleSubmit={() => {
                    handleCommand(
                        image,
                        {
                            selection: props.selection,
                            imageProps: {
                                uri,
                                altText: props?.imageAltText
                            }
                        },
                        props.setSelection,
                        props.markdown,
                        props.setMarkdown
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
                    },
                    {
                        type: "text",
                        label: "Alt Text",
                        required: true,
                        columns: 12,
                        handleChange: props.setImageAltText,
                        value: props.imageAltText,
                        variant: "outlined"
                    }
                ]}
            />
        </>
    );
}