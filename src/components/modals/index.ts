import FormModal from "./FormModal";
import { Dispatch, SetStateAction } from "react";

const defaultStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
};

export type ModalPropsType = {
    isOpen: boolean,
    handleSubmit: () => void
    handleClose: () => void,
    modalTitle?: string,
    formFields: FormFieldsType
}

export type FormField = {
    type: string,
    value?: string,
    required?: boolean,
    label: string,
    handleChange?: Dispatch<SetStateAction<any>>
    variant?: "outlined" | "filled" | "standard",
    columns: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
}

export type FormFieldsType = FormField[];

export {
    defaultStyle,
    FormModal
}