"use client"
// React
import { useState } from "react";

// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "@mui/icons-material";

// Components
import { FormModal } from "../modals";

// Types
import { TState, TReference } from "@/types";

// Commands
import { handleCommand, link } from "@/commands";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

export default function LinkIcon({ state, reference }: { state: TState, reference: TReference }) {
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
                    <Link sx={{ fontSize: DEFAULT_ICON_SIZE }} />
                </IconButton>
            </Tooltip>
            <FormModal
                isOpen={isModalOpen}
                handleSubmit={() => {
                    handleCommand(
                        link,
                        reference.editorRef,
                        state,
                        { linkProps: { uri } },
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