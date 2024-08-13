"use client"
// React
import { useState } from "react";

// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "@mui/icons-material";

// Components
import { FormModal } from "../modals";

// Types
import { stateType } from "@/app/page";

// Commands
import { handleCommand, link } from "@/commands";

export default function LinkIcon({ selection, setSelection, markdown, setMarkdown }: stateType) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uri, setUri] = useState("");
    return (
        <>
            <Tooltip title="Link">
                <IconButton
                    aria-label="Insert Link"
                    color="info"
                    onClick={() => setIsModalOpen(true)}
                >
                    <Link />
                </IconButton>
            </Tooltip>
            <FormModal
                isOpen={isModalOpen}
                handleSubmit={() => {
                    if (selection && setSelection && markdown && setMarkdown) {
                        handleCommand(
                            link,
                            { selection: selection, linkProps: { uri } },
                            setSelection,
                            markdown,
                            setMarkdown
                        );
                    }
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