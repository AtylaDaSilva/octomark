import { Dispatch, SetStateAction } from "react"

export type selectedTextType = {
    text: string,
    startPosition?: number,
    endPosition?: number,
}

export type stateType = {
    markdown?: string, setMarkdown?: Dispatch<SetStateAction<string>>,
    selection?: selectedTextType, setSelection?: Dispatch<SetStateAction<selectedTextType>>,
    imageAltText?: string, setImageAltText?: Dispatch<SetStateAction<string>>,
    footnoteCount?: number, setFootnoteCount?: Dispatch<SetStateAction<number>>,
    showPreview?: boolean, setShowPreview?: Dispatch<SetStateAction<boolean>>
}

export type alertLevelType = "note" | "tip" | "important" | "warning" | "caution";

export type commandFuncArgsType = {
    selection?: selectedTextType,
    headingLevel?: headingLevelType,
    alertLevel?: alertLevelType,
    emojiCode?: string,
    linkProps?: linkProps,
    tableProps?: tablePropsType,
    imageProps?: imagePropsType
    state?: {
        value: any,
        updater: Dispatch<SetStateAction<any>>
    }
}

export type headingLevelType = 1 | 2 | 3 | 4 | 5 | 6;

export type imagePropsType = {
    uri: string,
    altText: string
}

export type linkProps = {
    uri: string
}

export type tablePropsType = {
    width: number,
    length: number,
    textAlign: "center" | "left" | "right"
}

export type CommandBarProps = {
    state: stateType
}

export type PreviewType = {
    markdown?: string,
}

export type ModalPropsType = {
    isOpen: boolean,
    handleSubmit: () => void
    handleClose: () => void,
    modalTitle?: string,
    formFields: FormFieldsType
}

export type FormField = {
    type: "text" | "number" | "select",
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    options?: selectOption[]
    value?: string | number,
    required?: boolean,
    label: string,
    handleChange?: Dispatch<SetStateAction<any>>
    variant?: "outlined" | "filled" | "standard",
    columns: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
}

export type selectOption = {
    value: string | number,
    label: string
}

export type FormFieldsType = FormField[];