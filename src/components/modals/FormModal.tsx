// MUI Components
import { Grid, Modal, Box, Typography, TextField, MenuItem, Button } from "@mui/material";

// Style
import { defaultStyle } from "./";

// Types
import {
    ModalPropsType,
    FormField,
    selectOption
} from "@/types";

// Utility functions
import { capitalize } from "@/functions/capitalize";

export default function FormModal({
    isOpen,
    modalTitle,
    formFields,
    handleSubmit,
    handleClose
}: ModalPropsType) {
    const fields = formFields.map((field: FormField, index) => {
        try {
            switch (field.type.toLowerCase()) {
                case "text":
                case "number":
                    return (
                        <Grid
                            item
                            xs={field.columns}
                            key={index}
                        >
                            <TextField
                                variant={field?.variant || "outlined"}
                                type={field.type}
                                color={field.color || "primary"}
                                label={capitalize(field.label)}
                                required={field.required}
                                value={field.value}
                                onChange={(event) => {
                                    if (field.handleChange) {
                                        field.handleChange(event.target.value);
                                    }
                                }}
                                fullWidth
                            />
                        </Grid>
                    )

                case "select":
                    return (
                        <Grid
                            item
                            xs={field.columns}
                            key={index}
                        >
                            <TextField
                                variant={field?.variant || "outlined"}
                                select
                                type={field.type}
                                label={capitalize(field.label)}
                                required={field.required}
                                value={field.value}
                                onChange={(event) => {
                                    if (field.handleChange) {
                                        field.handleChange(event.target.value);
                                    }
                                }}
                                fullWidth
                            >
                                {
                                    field.options?.map((option: selectOption) => {
                                        return (
                                            <MenuItem
                                                key={option.value}
                                                value={option.value}
                                            >
                                                { capitalize(option.label) }
                                            </MenuItem>
                                        );
                                    })
                                }
                            </TextField>
                        </Grid>
                    )

                default:
                    throw new Error("Invalid field type in formFields prop of FormModal component");
            }
        } catch (err) {
            console.error(err);
        }
    })
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
        >
            <Box sx={defaultStyle}>
                <form onSubmit={handleSubmit}>
                    <Grid
                        container
                        spacing={1}
                        textAlign="center"
                    >
                        {
                            modalTitle && (
                                <Grid item xs={12} textAlign="left">
                                    <Typography component="h6" >
                                        {modalTitle}
                                    </Typography>
                                </Grid>
                            )
                        }
                        {fields}
                        <Grid item xs={12} textAlign="right" sx={{ marginTop: "5px" }}>
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{ marginRight: "5px" }}
                            >
                                Save
                            </Button>
                            <Button variant="contained" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Modal>
    );
}