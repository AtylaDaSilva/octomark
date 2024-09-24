// MUI Components
import { Grid, Modal, Box, Typography, TextField, MenuItem, Button } from "@mui/material";

// Types
import {
    IFormModal,
    IFormField,
    ISelectOption
} from "@/interfaces";

// Utility functions
import { capitalize } from "@/functions/capitalize";

export default function FormModal({
    isOpen,
    modalTitle,
    formFields,
    handleSubmit,
    handleClose
}: IFormModal) {
    const defaultStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: "6px",
        p: 3,
    };
    const fields = formFields.map((field: IFormField, index) => {
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
                                label={(field.capitalizeLabel) ? capitalize(field.label) : field.label}
                                aria-label={field.ariaLabel}
                                required={field.required}
                                value={field.value}
                                size="small"
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
                                size="small"
                                value={field.value}
                                onChange={(event) => {
                                    if (field.handleChange) {
                                        field.handleChange(event.target.value);
                                    }
                                }}
                                fullWidth
                            >
                                {
                                    field.options?.map((option: ISelectOption) => {
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
                                size="small"
                                sx={{ marginRight: "5px" }}
                            >
                                Save
                            </Button>
                            <Button variant="contained" onClick={handleClose} size="small">
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Modal>
    );
}