import { Modal, Box, Typography, Grid } from "@mui/material";
import { IBasicModal } from "@/interfaces";

export default function BasicModal({ isOpen, modalTitle, handleClose, ariaLabel, content }: IBasicModal) {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 500,
        overflow: "auto",
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: "6px",
        p: 3,
    };
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-label={ariaLabel}
        >
            <Box sx={style}>
                <Grid container>
                    {
                        modalTitle && (
                            <Grid item xs={12} textAlign="left">
                                <Typography variant="h5">
                                    {modalTitle}
                                </Typography>
                            </Grid>
                        )
                    }
                    <Grid item xs={12}>
                        {content}
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}