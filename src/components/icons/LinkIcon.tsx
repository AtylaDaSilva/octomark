"use client"
// React
import { useState } from "react";

// MUI Components
import { IconButton } from "@mui/material";
import { Link } from "@mui/icons-material";

// Components
import { FormModal } from "../modals";

// Types
import { CommandBarProps } from "../CommandBar";

// Commands
import { handleCommand, link } from "@/commands";

export default function LinkIcon(props: CommandBarProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uri, setUri] = useState("");
    return (
        <>
            <IconButton
                aria-label="Insert Link"
                onClick={() => setIsModalOpen(true)}
            >
                <Link />
            </IconButton>
            <FormModal
                isOpen={isModalOpen}
                handleSubmit={() => {
                    handleCommand(
                        link,
                        { selection: props.selection, uri: uri},
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
                        label: "Link",
                        required: true,
                        columns: 12,
                        handleChange: setUri,
                        value: uri
                    }
                ]}
            />
        </>
    );
}