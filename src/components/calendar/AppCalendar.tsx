import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { Box } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { capitalizeFirstLetter } from "../../utils/strings";

/**
 * The ServerDay component.
 *
 * @param {Object} props - The props object.
 * @param {Array<number>} [props.enableDays=[]] - An array of numbers representing the days that should be enabled.
 * @param {string} [props.enableDaysBg] - A string representing the background color for the enabled days.
 * @param {Dayjs} props.day - The day.
 * @param {boolean} props.outsideCurrentMonth - Whether the day is outside the current month.
 *
 * @returns {JSX.Element} - The ServerDay component.
 */

function ServerDay(
  props: PickersDayProps<Dayjs> & {
    enableDays?: number[];
    enableDaysBg?: string;
  },
) {
  const {
    enableDays = [],
    enableDaysBg,
    day,
    outsideCurrentMonth,
    ...other
  } = props;

  const dayIndex = enableDays.indexOf(props.day.date());

  const enabled =
    dayjs(day).month() === new Date().getMonth() &&
    enableDays.indexOf(props.day.date()) >= 0;

  return (
    <Box
      sx={{
        background: enabled ? enableDaysBg : "transparent",
        borderTopLeftRadius:
          dayIndex === 0 && !props.outsideCurrentMonth ? "8px" : 0,
        borderBottomLeftRadius:
          dayIndex === 0 && !props.outsideCurrentMonth ? "8px" : 0,
        borderTopRightRadius:
          dayIndex === enableDays.length - 1 && !props.outsideCurrentMonth
            ? "8px"
            : 0,
        borderBottomRightRadius:
          dayIndex === enableDays.length - 1 && !props.outsideCurrentMonth
            ? "8px"
            : 0,
        width: "14%",
        // background:"red"
      }}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
        sx={{
          borderRadius: "8px",
        }}
        //selected={new Date(dayjs(day).toDate()) === new Date()}
        // disabled={!enabled}
      />
    </Box>
  );
}

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

/**
 * The  AppCalendar  component is a customizable calendar using the Material-UI library and the Day.js date library.
 *
 * @param {Object} props - The props object.
 * @param {Array<number>} [props.enableDays=[4,5,6,7,8,9,10,11,12]] - An array of numbers representing the days that should be enabled.
 * @param {string} [props.enableDaysBg="#D1E5E2"] - A string representing the background color for the enabled days.
 *
 * @returns {JSX.Element} - The AppCalendar component.
 */

export default function AppCalendar({
  enableDays = [],
  enableDaysBg = "#D1E5E2",
  currentDate = new Date(),
  onChange,
  disabled=false
}: {
  enableDays?: number[];
  enableDaysBg?: string;
  currentDate?: Date;
  disabled?:boolean;
  onChange?: (ev:any) => void;
}) {
  /**
   * The month state.
   *
   * @type {number}
   */

  const [month, setMonth] = React.useState(dayjs(new Date()).month());
  const onMonthChange = (selected: any) => {
    setMonth(dayjs(selected).month());
  };
  const handleChange = (ev: any) => {
    onChange?.(ev);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        disabled={disabled}
        dayOfWeekFormatter={(day) => day + " "}
        slots={{
          day: ServerDay,
          rightArrowIcon: () => (
            <Box className="flex text-primary">
              <span className="text-18">
                {" "}
                {capitalizeFirstLetter(monthsList[month])}{" "}
              </span>
              <ArrowForwardIosIcon sx={{ ml: 1, height: "16px" }} />
            </Box>
          ),
        }}
        slotProps={{
          day: {
            enableDays,
            enableDaysBg,
          } as any,
        }}
        sx={{ width: "100%" }}
        defaultValue={dayjs(currentDate)}
        onMonthChange={onMonthChange}
        onChange={handleChange}
      />
    </LocalizationProvider>
  );
}
