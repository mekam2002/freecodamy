import React, { useState } from "react";
import { CustomDialog } from "../../components";
import AppInput from "../../components/AppInput";
import { Box, IconButton } from "@mui/material";
import AppButton from "../../components/button/AppButton";
import useGetColors from "../../hook/useGetColors";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
interface Props {
  open: boolean;
  onClose: () => void;
}
export default function LoginModal({ open, onClose }: Props) {
  const colors = useGetColors();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const isEmailValid = (email: string) => {
    // Use a regular expression to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password: string) => {
    // Check if the password is at least 8 characters and alphanumeric
    return password.length >= 8 && /^[a-zA-Z0-9]+$/.test(password);
  };

  const isFormValid = () => {
    return (
      form.email.length >= 6 &&
      isEmailValid(form.email) &&
      isPasswordValid(form.password) &&
      form.password !== ""
    );
  };

  const onChangeHandler = (key: string) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));
  return (
    <CustomDialog open={open} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          mb={3}
          sx={{
            width: "100%",
          }}
        >
          <AppInput
            value={form.email}
            onChange={onChangeHandler("email")}
            title={"Email"}
            containerStyle={{ width: "100%", mb: 2 }}
          />
          <AppInput
            value={form.password}
            onChange={onChangeHandler("password")}
            title={"Password"}
            containerStyle={{ width: "100%" }}
            endIcon={
              <IconButton onClick={() => setShow((prev) => !prev)}>
                {!show ? <VisibilityIcon /> : <VisibilityOffIcon />}{" "}
              </IconButton>
            }
            type={!show ? "password" : ""}
          />
        </Box>

        <Box sx={{ width: "100%" }}>
          <AppButton
            title={"Forgot your Password?"}
            containerStyle={{
              color: colors.light_blue,
              backgroundColor: "transparent",
              width: "100%",
              mb: 2,
            }}
            titleStyle={{
              color: colors.light_black,
            }}
          />

          <AppButton
            title={"Sign in"}
            containerStyle={{ width: "100%" }}
            disabled={!isFormValid()}
          />
          <AppButton
            title={"Sign up"}
            containerStyle={{ width: "100%", backgroundColor: "transparent" }}
            titleStyle={{ color: colors.black }}
          />
        </Box>
      </Box>
    </CustomDialog>
  );
}
