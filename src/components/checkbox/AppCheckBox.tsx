import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  SxProps,
  Typography,
} from "@mui/material";
import React, { ReactNode } from "react";
import CheckIcon from "@mui/icons-material/Check";
import useGetColors from "../../hook/useGetColors";
interface Props {
  label?: string | null;
  checked?: boolean;
  onSelect?: (value: boolean) => void;
  labelStyle?: React.CSSProperties;
  checkBoxStyle?: React.CSSProperties;
  checkedStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  renderCheckedIcon?: () => ReactNode;
}
export default function AppCheckBox({
  label,
  checked,
  onSelect,
  labelStyle,
  checkBoxStyle,
  checkedStyle,
  containerStyle,
  renderCheckedIcon = () => (
    <CheckIcon sx={{ color: "#000", height: "10px" }} />
  ),
}: Props) {
  const colors = useGetColors();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelect?.(event.target.checked);
  };
  if (!label) {
    return (
      <Checkbox
        checkedIcon={renderCheckedIcon?.()}
        size="small"
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        sx={{
          color: "#D0D5DD",
          bgcolor: "white",
          borderRadius: " 4px",
          ...checkBoxStyle,
          ...containerStyle,
          "&.Mui-checked": {
            color: colors.light_green3,
            backgroundColor: colors.light_green3,
            ...checkedStyle,
          },
        }}
      />
    );
  }

  return (
    <FormGroup sx={{ ...containerStyle }}>
      <FormControlLabel
        control={
          <Checkbox
            checkedIcon={renderCheckedIcon?.()}
            size="small"
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            sx={{
              color: "#D0D5DD",
              bgcolor: "white",
              borderRadius: " 4px",
              ...checkBoxStyle,
              "&.Mui-checked": {
                color: colors.light_green3,
                backgroundColor: colors.light_green3,
                ...checkedStyle,
              },
            }}
          />
        }
        label={
          <Typography
            className="text-14 font-500"
            sx={{
              color: colors.primary,
              ...labelStyle,
            }}
          >
            {label}
          </Typography>
        }
      />
    </FormGroup>
  );
}
