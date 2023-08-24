import * as React from "react";
import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";
import { InputBase, Typography } from "@mui/material";
import { SxProps, styled } from "@mui/material/styles";

import { capitalizeFirstLetter } from "../../utils/strings";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Input = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      borderRadius: 4,
      border: "1px solid #ced4da",
    },
  },
}));

type Item = Record<string, string | React.ReactNode>;
interface Props {
  label?: string | null;
  labelStyle?: React.CSSProperties | SxProps;
  list?: Item[] | string[];
  value?: string;
  keyValue?: string;
  onChange?: (value: string) => void;
  menuItemStyle?: SxProps;
  menuTextStyle?: SxProps;
  containerStyle?: SxProps;
  inputStyle?: SxProps;
  placeholder?: string;
  icon?: JSX.Element;
}

export default function Dropdown({
  label,
  list = [],
  value,
  keyValue = "id",
  menuItemStyle = {},
  menuTextStyle,
  containerStyle,
  onChange,
  labelStyle,
  inputStyle,
  placeholder,
  icon,
}: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange?.(event.target.value as string);
  };
  const generatedList: Item[] = React.useMemo(() => {
    return list.map((item: Item | string) => {
      if (typeof item === "string") {
        return { label: item, id: item } as Item;
      } else {
        return item;
      }
    });
  }, []);

  const renderValue = (selected: string): React.ReactNode => {
    const it = generatedList.find((it) => it[keyValue] === selected);
    return (
      <Box className="flex">
        {it?.icon}
        <Typography
          sx={{
            ml: it?.icon ? 1 : 0,
            fontSize: 16,
            color: "#333333",
            ...menuTextStyle,
          }}
          color=""
        >
          {capitalizeFirstLetter(it?.label as string)}
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ minWidth: "230px", ...containerStyle }}>
      <FormControl fullWidth size="small">
        {label ? (
          <Typography
            sx={{ mb: 1, fontSize: 14, fontWeight: 500, ...labelStyle }}
          >
            {label}{" "}
          </Typography>
        ) : null}
        <Select
          placeholder={placeholder}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          renderValue={renderValue}
          sx={{
            bgcolor: "#fff",
            "& .MuiInputBase-input": {
              position: "relative",
              fontSize: 16,
              padding: "10px 26px 10px 12px",
            },
            borderRadius: 2,
          }}
          IconComponent={() => <KeyboardArrowDownIcon />}
          onChange={handleChange}
        >
          {generatedList.map((item: Item, i: number) => (
            <MenuItem
              value={item?.[keyValue] as string}
              key={i}
              sx={{
                borderBottom: "1px solid #E6E6E6",
                py: "20px",
                gapX: 1,
                ...menuItemStyle,
              }}
            >
              {item?.icon}
              <Typography
                sx={{
                  ml: item?.icon ? 1 : 0,
                  fontSize: 16,
                  color: "#333333",
                  ...menuTextStyle,
                }}
              >
                {capitalizeFirstLetter(item?.label as string)}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
