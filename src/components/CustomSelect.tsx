import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Select,
  SelectChangeEvent,
  SelectProps,
  SxProps,
  Typography,
} from "@mui/material";
import { capitalizeFirstLetter } from "../utils/strings";
import useGetColors from "../hook/useGetColors";

interface Props {
  items?: any[];
  onSelect?: (ev: any) => void;
  placeholder?: string;
  containerStyle?: SxProps;
  buttonStyle?: React.CSSProperties;
  value?: string;
  selectStyle?: React.CSSProperties;
  label?: string;
  labelStyle?: React.CSSProperties | SxProps;
  showIndication?: boolean;
  children?: React.ReactNode;
  boxItemStyle?: SxProps;
  selectProps?: Partial<SelectProps>;
}
export default function CustomSelect({
  items,
  onSelect,
  placeholder,
  containerStyle,
  value,
  selectStyle,
  label,
  showIndication = false,
  children,
  boxItemStyle,
  labelStyle,
  selectProps,
}: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    onSelect?.(event.target.value as string);
    // console.log(event.target);
  };

  const colors = useGetColors();

  const { disabled, ...rest } = selectProps ?? {};

  return (
    <Box pb={2} sx={{ width: 0.5, ...containerStyle }}>
      {label ? (
        <Typography
          sx={{
            color: "#344051",
            mb: 0.75,
            fontSize: 14,
            ...labelStyle,
          }}
        >
          {capitalizeFirstLetter(label)}
          {showIndication ? <span style={{ color: colors.red }}>*</span> : null}
        </Typography>
      ) : null}

      <Select
        labelId="demo-simple-select-label"
        className="app-select"
        placeholder={placeholder}
        size="small"
        value={value}
        IconComponent={KeyboardArrowDownIcon}
        onChange={handleChange}
        sx={{
          height: 40,
          bgcolor: "#fff",
          borderRadius: 2,
          ...selectStyle,
        }}
        disabled={disabled}
      >
        {children ??
          items?.map((el, index) => (
            <MenuItem key={index} value={el}>
              {el?.label ?? el}
            </MenuItem>
          ))}
      </Select>
    </Box>
  );
}
