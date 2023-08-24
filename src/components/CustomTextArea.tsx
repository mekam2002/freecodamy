import {
  Stack,
  StackProps,
  TextareaAutosize,
  TextareaAutosizeProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import React, { useState } from "react";

interface Props {
  title?: string;
  onChange?: (args: any) => void;
  value?: string;
  titleTypographyProps?: TypographyProps;
  textAreaProps?: TextareaAutosizeProps;
  stackProps?: StackProps;
}

export default function CustomTextArea({
  title,
  onChange,
  value,
  titleTypographyProps,
  textAreaProps,
  stackProps,
}: Props) {
  const [borderColor, setBorderColor] = useState("#CED2DA");

  const onFocus = () => {
    setBorderColor("#8392A2");
  };
  const onBlur = () => {
    setBorderColor("#CED2DA");
  };
  return (
    <Stack {...stackProps}>
      <Typography
        sx={{
          fontSize: 14,
          mt: 2,
          mb: 0.75,
          textTransform: "capitalize",
        }}
        {...titleTypographyProps}
      >
        {title}
      </Typography>
      <TextareaAutosize
        onFocus={onFocus}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        style={{
          color: "#292D32",
          borderColor,
        }}
        minRows={7}
        placeholder="Type here"
        {...textAreaProps}
      />
    </Stack>
  );
}
