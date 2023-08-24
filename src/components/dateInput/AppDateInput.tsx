import * as React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, SxProps, TextField, Typography, Stack } from "@mui/material";
import "./AppDateInput.css";
import { capitalizeFirstLetter } from "../../utils/strings";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import dayjs from "dayjs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useGetColors from "../../hook/useGetColors";

const monthsList = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
interface Props {
  title?: string | null;
  placeholder?: string | null;
  titleStyle?: React.CSSProperties | SxProps;
  inputStyle?: React.CSSProperties | SxProps;
  startIcon?: JSX.Element;
  endIcon?: React.ElementType;
  containerStyle?: React.CSSProperties | SxProps;
  onChange?: (value: number | string) => void;
  component?: React.ReactNode;
  value?: any;
}
export default function AppDateInput({
  title,
  onChange,
  titleStyle,
  containerStyle,
  component,
  inputStyle,
  endIcon,
  value,
  placeholder,
}: Props) {
  const [month, setMonth] = React.useState(dayjs(new Date()).month());
  const colors = useGetColors();
  const onMonthChange = (selected: any) => {
    setMonth(dayjs(selected).month());
  };
  return (
    <Stack
      sx={{
        ...containerStyle,
      }}
      spacing={1}
    >
      {title ? (
        <Typography
          className="text-14 font-500"
          sx={{
            color: "#344051",
            ...titleStyle,
          }}
        >
          {title}
        </Typography>
      ) : null}

      {!component ? (
        // <DemoContainer components={["DatePicker"]}>
        <DatePicker
          slots={{
            textField: (props: any) => (
              <TextField {...props} placeholder={placeholder} size="small" />
            ),
            openPickerIcon: endIcon ? endIcon : ExpandMoreIcon,
            rightArrowIcon: () => (
              <Box className="flex text-primary">
                <span className="text-18">
                  {capitalizeFirstLetter(monthsList[month])}
                </span>
                <ArrowForwardIosIcon sx={{ ml: 1, height: "16px" }} />
              </Box>
            ),
          }}
          format="DD-MM-YYYY"
          onChange={(ev: any) => onChange?.(new Date(ev).getTime())}
          className="datePicker w-100"
          sx={{ "&:hover": { border: "none" }, bgcolor: "#fff", ...inputStyle }}
          onMonthChange={onMonthChange}
          // label={<Box><Typography>test</Typography></Box>}
          // defaultValue={dayjs(new Date())}
          value={value}
        />
      ) : (
        // </DemoContainer>
        component
      )}
    </Stack>
  );
}
