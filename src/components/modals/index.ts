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

export {
    defaultStyle,
    FormModal
}