import React, { useState } from "react";
import useGetColors from "../../hook/useGetColors";
import { Box, IconButton, Typography } from "@mui/material";
import AppInput from "../../components/AppInput";
import AppButton from "../../components/button/AppButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { isEmailValid, isPasswordValid } from "./utils";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/firebase";
import { useDispatch } from "react-redux";
import { setAuth, setUserData } from "../../store/features/authSlice";

export default function SignInScreen() {
  const colors = useGetColors();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const isFormValid = () => {
    return (
      form.email.length >= 6 &&
      form.userName.length >= 3 &&
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

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;
      dispatch(setAuth(true));
      dispatch(setUserData(form));
      navigate("/course");
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);

      // ... handle error
    }

    setLoading(false);
  };

  return (
    <Box
      sx={{
        bgcolor: colors.bg,
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AppInput
        value={form.userName}
        title={"User Name"}
        containerStyle={{ width: "100%", mb: 2 }}
        onChange={onChangeHandler("userName")}
      />
      <AppInput
        value={form.email}
        title={"Email"}
        containerStyle={{ width: "100%", mb: 2 }}
        onChange={onChangeHandler("email")}
        type="email"
      />
      <AppInput
        value={form.password}
        onChange={onChangeHandler("password")}
        title={"Password"}
        containerStyle={{ width: "100%", mb: 2 }}
        endIcon={
          <IconButton onClick={() => setShow((prev) => !prev)}>
            {!show ? <VisibilityIcon /> : <VisibilityOffIcon />}{" "}
          </IconButton>
        }
        type={!show ? "password" : ""}
      />

      <AppButton
        title="sign up"
        containerStyle={{ width: "100%", mt: 2 }}
        disabled={!isFormValid()}
        onClick={onSignIn}
        loading={loading}
      />
      <AppButton
        title="already have an account? Sign in!"
        containerStyle={{ width: "100%", backgroundColor: "transparent" }}
        titleStyle={{ color: colors.black }}
        onClick={() => navigate("/auth/signup")}
      />
    </Box>
  );
}
