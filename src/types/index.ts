import { Dispatch, SetStateAction } from "react"
import { IFormField } from "@/interfaces"

export type TState = {
    markdown?: string, setMarkdown?: Dispatch<SetStateAction<string>>,
    imageAltText?: string, setImageAltText?: Dispatch<SetStateAction<string>>,
    footnoteCount?: number, setFootnoteCount?: Dispatch<SetStateAction<number>>,
    showPreview?: boolean, setShowPreview?: Dispatch<SetStateAction<boolean>>,
    charCount?: number, setCharCount?: Dispatch<SetStateAction<number>>
}

export type TReference = {
    editorRef: any,
    monacoRef: any,
    previewRef: any
}

export type TAlertLevel = "note" | "tip" | "important" | "warning" | "caution";

export type TCommandFunc = (commandFuncArgs: TCommandFuncArgs) => string;

export type TCommandFuncArgs = {
    selectedText?: string | null,
    headingLevel?: headingLevelType,
    alertLevel?: TAlertLevel,
    emojiCode?: string,
    linkProps?: linkProps,
    tableProps?: TTableProps,
    imageProps?: imagePropsType
    state?: {
        value: any,
        updater: Dispatch<SetStateAction<any>>
    }
}

export type headingLevelType = 1 | 2 | 3 | 4 | 5 | 6;

export type imagePropsType = {
    uri: string
}

export type linkProps = {
    uri: string
}

export type TTableProps = {
    width: number,
    length: number,
    textAlign: "center" | "left" | "right"
}

export type TPreviewProps = {
    reference: TReference,
    markdown?: string,
    handleScroll: (event:any) => void
}

export type TFormFields = IFormField[];