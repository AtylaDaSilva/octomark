// MUI Components
import { Container, Box } from "@mui/material";

// Command Icons
import {
    BoldIcon,
    ItalicIcon,
    TitleIcon,
    StrikethroughIcon,
    CodeIcon,
    LinkIcon,
    ImageIcon,
    BulletedListIcon,
    NumberedListIcon,
    TaskListIcon,
    FootnoteIcon,
    CommentIcon,
    AlertIcon,
    TableIcon,
    EmojiIcon,
    HideShowPreviewIcon,
    CopyEditorContentsIcon,
    UploadFileIcon,
    DownloadFileIcon
} from "./icons";

// Types
import { TReference, TState } from "@/types";

export default function CommandBar(
    { state, reference }: { state: TState, reference: TReference }
) {
    return (
        <Container maxWidth={false}>
            <ul className="no-padding no-list-style flex justify-contents-center">
                <li>
                    <TitleIcon
                        state={state}
                        reference={reference}
                    />
                </li>
                <li>
                    <BoldIcon
                        state={state}
                        reference={reference}
                    />
                </li>
                <li>
                    <ItalicIcon
                        state={state}
                        reference={reference}
                    />
                </li>
                <li>
                    <StrikethroughIcon
                        state={state}
                        reference={reference}
                    />
                </li>
                <li>
                    <CodeIcon
                        state={state}
                        reference={reference}
                    />
                </li>
                <li>
                    <LinkIcon
                        state={state}
                        reference={reference}
                    />
                </li>
                <li>
                    <ImageIcon
                        state={state}
                        reference={reference}
                    />
                </li>
                <li>
                    <BulletedListIcon
                        state={state}
                        reference={reference}
                    />
                </li>
                <li>
                    <NumberedListIcon
                        state={state}
                        reference={reference}
                    />
                </li>
                <li>
                    <TaskListIcon
                        state={state}
                        reference={reference}
                    />
                </li>
                <li>
                    <FootnoteIcon
                        state={state}
                        reference={reference}
                    />
                </li>
                <li>
                    <CommentIcon
                        state={state}
                        reference={reference}
                    />
                </li>
                <li>
                    <AlertIcon
                        state={state}
                        reference={reference}
                    />
                </li>
                <li>
                    <TableIcon
                        state={state}
                        reference={reference}
                    />
                </li>
                <li>
                    <EmojiIcon
                        state={state}
                        reference={reference}
                    />
                </li>
                <Box marginLeft="auto" display="flex">
                    <li>
                        <HideShowPreviewIcon
                            showPreview={state.showPreview}
                            setShowPreview={state.setShowPreview}
                        />
                    </li>
                    <li>
                        <CopyEditorContentsIcon
                            reference={reference}
                        />
                    </li>
                    <li>
                        <UploadFileIcon state={state} />
                    </li>
                    <li>
                        <DownloadFileIcon state={state} />
                    </li>
                </Box>
            </ul>
        </Container>
    );
}