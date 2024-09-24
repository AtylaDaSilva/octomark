import { Dispatch, SetStateAction } from "react"
import { TFormFields } from "@/types";

export interface IModal {
    isOpen: boolean,
    modalTitle?: string,
    handleClose: () => void,
    ariaLabel?: string
}

export interface IBasicModal extends IModal {
    content: any
}

export interface IFormModal extends IModal {
    handleSubmit: () => void
    modalTitle?: string,
    formFields: TFormFields
}

export interface IFormField {
    type: "text" | "number" | "select",
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    options?: ISelectOption[]
    value?: string | number,
    required?: boolean,
    label: string,
    capitalizeLabel?: boolean,
    ariaLabel?: string,
    handleChange?: Dispatch<SetStateAction<any>>
    variant?: "outlined" | "filled" | "standard",
    columns: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
}

export interface ISelectOption {
    value: string | number,
    label: string
}