import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentProps,
  DialogContentText,
  DialogProps,
  DialogTitle,
  IconButton,
  SxProps,
  Typography,
} from "@mui/material";
import React, { ReactElement, ReactNode } from "react";
import { capitalizeFirstLetter } from "../utils/strings";
import Stack from "@mui/material/Stack";
import { Close } from "@mui/icons-material";
interface Props {
  open: boolean;
  showCloseButton?: boolean;
  onClose?: () => void;
  title?: string;
  subtitle?: ReactNode;
  titleStyle?: SxProps;
  message?: string;
  children?: ReactNode;
  renderAction?: () => ReactElement | null;
  dividers?: boolean;
  dialogProps?: Partial<DialogProps>;
  dialogActionsProps?: SxProps;
  contentContainerStyle?: React.CSSProperties;
  dialogContentProps?: DialogContentProps;
  subHeader?: ReactNode;
}

export default function ConfirmDialog({
  open,
  onClose,
  showCloseButton = true,
  title,
  subtitle,
  titleStyle,
  message,
  children,
  renderAction,
  dividers = false,
  dialogProps,
  dialogActionsProps,
  contentContainerStyle,
  dialogContentProps,
  subHeader,
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        background: "#fff15",
        backdropFilter: "blur(1.5px)",
        "& .MuiPaper-root": {
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
          background: "#fff",
          borderRadius: "12px",
          ...contentContainerStyle,
        },
      }}
      fullWidth
      maxWidth="sm"
      {...dialogProps}
    >
      {title ? (
        <DialogTitle>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: 24,
                  ...titleStyle,
                }}
              >
                {capitalizeFirstLetter(title)}
              </Typography>
              {subtitle}
            </Stack>
            <IconButton
              sx={{
                borderRadius: 1,
                background: "#8392A115",
                "&:hover": { background: "#8392A115" },
              }}
              onClick={onClose}
            >
              <Close />
            </IconButton>
          </Stack>
          {subHeader}
        </DialogTitle>
      ) : null}
      <Box sx={{ justifyContent: "end", display: "flex", p: 1 }}>
        <IconButton
          sx={{
            borderRadius: 1,
            background: "#8392A115",
            "&:hover": { background: "#8392A115" },
          }}
          onClick={onClose}
        >
          <Close />
        </IconButton>
      </Box>

      <DialogContent dividers={dividers} {...dialogContentProps}>
        {message ? (
          <DialogContentText>
            {capitalizeFirstLetter(message)}
          </DialogContentText>
        ) : null}
        {children}
      </DialogContent>
      {renderAction ? (
        <DialogActions sx={dialogActionsProps}>
          {renderAction?.()}
        </DialogActions>
      ) : null}
    </Dialog>
  );
}
