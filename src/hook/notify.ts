import { enqueueSnackbar } from "notistack";


export const notifyError = ({
    message,
    vertical = "bottom",
    horizontal = "center"
}: {
    message: string,
    vertical?: "bottom" | "top",
    horizontal?: "left" | "center" | "right"
}) => {
    enqueueSnackbar(message, {
        variant: "error",
        anchorOrigin: {
            horizontal: horizontal,
            vertical: vertical
        }
    });
};

export const notifySuccess = ({
    message,
    vertical = "bottom",
    horizontal = "center"
}: {
    message: string,
    vertical?: "bottom" | "top",
    horizontal?: "left" | "center" | "right"
}) => {
    enqueueSnackbar(message, {
        variant: "success",
        anchorOrigin: {
            horizontal: horizontal,
            vertical: vertical
        }
    });
};
