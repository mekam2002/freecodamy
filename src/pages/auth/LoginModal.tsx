import React, { useState } from "react";
import { CustomDialog } from "../../components";
import AppInput from "../../components/AppInput";
import { Box, IconButton } from "@mui/material";
import AppButton from "../../components/button/AppButton";
import useGetColors from "../../hook/useGetColors";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../../service/firebase";
import { isEmailValid, isPasswordValid } from "./utils";
import { setAuth } from "../../store/features/authSlice";
import { notifySuccess } from "../../hook/notify";
import { useNavigate } from "react-router";

interface Props {
  open: boolean;
  onClose: () => void;
}
export default function LoginModal({ open, onClose }: Props) {
  const colors = useGetColors();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

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

  const onSignIn = async () => {
    try {
      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;
      dispatch(setAuth(true));
      notifySuccess({
        message: "Successfully signed in",
        vertical: "top",
        horizontal: "right",
      });
      onClose();

      // ... handle successful sign-in
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);

      // ... handle error
    }

    setLoading(false);
  };

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
        <form
          // mb={3}
          style={{
            width: "100%",
            marginBottom: "18PX",
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
        </form>

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
            onClick={onSignIn}
            loading={loading}
          />
          <AppButton
            title={"Sign up"}
            containerStyle={{ width: "100%", backgroundColor: "transparent" }}
            titleStyle={{ color: colors.black }}
            onClick={() => navigate("/auth/signin")}
          />
        </Box>
      </Box>
    </CustomDialog>
  );
}
