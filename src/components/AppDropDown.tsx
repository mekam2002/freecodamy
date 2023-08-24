import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Select, SelectChangeEvent, Typography } from "@mui/material";

interface Props {
  items: any[];
  onSelect?: (ev: any) => void;
  placeholder?: string;
  containerStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  value?: string;
  selectStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  title?: string | null;
  icon?: () => React.ReactElement;
}
export default function AppDropdown({
  items,
  onSelect,
  placeholder,
  containerStyle,
  value,
  selectStyle,
  titleStyle,
  title,
  icon,
}: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    onSelect?.(event.target.value as string);
    //console.log(event);
  };

  return (
    <Box sx={{ ...containerStyle }}>
      {/* <FormControl fullWidth> */}

      {title ? (
        <Typography
          sx={{ mb: 1, fontSize: 16, fontWeight: 500, ...titleStyle }}
        >
          {title}
        </Typography>
      ) : null}

      <Select
        labelId="demo-simple-select-label"
        className="app-select"
        placeholder={placeholder}
        size="small"
        value={value}
        displayEmpty
        IconComponent={icon ? icon : KeyboardArrowDownIcon}
        onChange={handleChange}
        sx={{
          height: 45,
          borderRadius: "8px",
          color: !value ? "#c2c2c2" : "black",
          ...selectStyle,
        }}
      >
        {placeholder ? <MenuItem disabled>{placeholder}</MenuItem> : null}
        {items.map((el, index) => (
          <MenuItem key={index} value={el}>
            {el}
          </MenuItem>
        ))}
      </Select>
      {/* </FormControl> */}
    </Box>
  );
}
