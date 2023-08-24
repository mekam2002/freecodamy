/* eslint-disable react/display-name */
import { SnackbarContent, CustomContentProps } from "notistack";
import React from "react";
import "./AppSnackbar.css";
import { Avatar, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GppBadIcon from "@mui/icons-material/GppBad";
interface ReportCompleteProps extends CustomContentProps {
  allowDownload: boolean;
}

// eslint-disable-next-line react/display-name
export const SuccessSnackbar = React.forwardRef<
  HTMLDivElement,
  ReportCompleteProps
>((props, ref) => {
  const {
    // You have access to notistack props and options 👇🏼
    id,
    message,
    // as well as your own custom props 👇🏼
    allowDownload,
    ...other
  } = props;

  return (
    <SnackbarContent
      ref={ref}
      role="alert"
      {...other}
      className="app-snackbar success-snackbar"
    >
      
        <CheckCircleIcon sx={{color:"#5C8833",mr:2}} />
      
      <Typography color="#344054" className="text-16 font-600">
        {" "}
        {message}{" "}
      </Typography>
    </SnackbarContent>
  );
});

export const ErrorSnackbar = React.forwardRef<
  HTMLDivElement,
  ReportCompleteProps
>((props, ref) => {
  const {
    // You have access to notistack props and options 👇🏼
    id,
    message,
    // as well as your own custom props 👇🏼
    allowDownload,
    ...other
  } = props;

  return (
    <SnackbarContent
      ref={ref}
      role="alert"
      {...other}
      className="app-snackbar error-snackbar"
    >
      <Avatar className="app-snackbar-icon">
        <GppBadIcon />
      </Avatar>
      <Typography color="#344054" className="text-16 font-600">
        {" "}
        {message}{" "}
      </Typography>
    </SnackbarContent>
  );
});
