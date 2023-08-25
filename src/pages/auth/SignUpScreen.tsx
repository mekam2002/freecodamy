import React, { useState } from "react";
import useGetColors from "../../hook/useGetColors";
import { useNavigate } from "react-router";
import { Box, IconButton } from "@mui/material";
import AppInput from "../../components/AppInput";
import { isEmailValid, isPasswordValid } from "./utils";
import AppButton from "../../components/button/AppButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/firebase";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/features/authSlice";

export default function SignUpScreen() {
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
          type="email"
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
          title={"Sign in"}
          containerStyle={{ width: "100%", mt: 2 }}
          disabled={!isFormValid()}
          onClick={onSignIn}
          loading={loading}
        />
        <AppButton
          title={"don't have an account yet?  Sign up!"}
          containerStyle={{ width: "100%", backgroundColor: "transparent" }}
          disabledStyle={{
            background: "transparent",
          }}
          titleStyle={{ color: colors.black }}
          onClick={() => navigate("/auth/signin")}
          disabled={loading}
        />

        <AppButton
          title={"Forgot your Password?"}
          containerStyle={{
            color: colors.light_blue,
            backgroundColor: "transparent",
            width: "100%",
            mt: 2,
          }}
          disabledStyle={{
            background: "transparent",
          }}
          titleStyle={{
            color: colors.light_black,
          }}
          disabled={loading}
        />
      </Box>
    </Box>
  );
}
