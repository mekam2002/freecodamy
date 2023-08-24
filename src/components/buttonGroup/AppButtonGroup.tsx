import React, { ReactNode } from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import "./AppButtonGroup.css";
import useGetColors from "../../hook/useGetColors";

type KeyVal = {
  key: string;
  label: string;
  icon?: ReactNode;
};
interface Props {
  tabLabel: KeyVal[];
  value: string;
  onChange: (val: string) => void;
  containerStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
}

/** Represents an AppButtonGroup component that renders a toggle button group using Material UI.
 *
 * @typedef {Object} KeyVal
 * @property {string} key - The key of the tab.
 * @property {string} label - The label of the tab.
 *
 * @typedef {Object} Props
 * @property {KeyVal[]} tabLabel - An array of objects containing the key and label of each tab.
 * @property {string} value - The key of the currently selected tab.
 * @property {(val: string) => void} onChange - A callback function that is called when a tab is selected.
 *
 * @param {Props} props - The props for the AppButtonGroup component.
 * @returns {JSX.Element} - The AppButtonGroup component.
 */

const AppButtonGroup: React.FC<Props> = ({
  tabLabel,
  value,
  onChange,
  containerStyle,
  buttonStyle,
}) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment) {
      onChange(newAlignment);
    }
  };
  const colors = useGetColors();
  return (
    <ToggleButtonGroup
      color="secondary"
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      className="app-button-group"
      sx={{
        ...containerStyle,
      }}
    >
      {tabLabel.map(({ key, label, icon }, i) => (
        <ToggleButton
          key={i}
          sx={{
            // width: tabLabel?.length > 0 ? `${100 / tabLabel?.length}%` : "100%",
            "&.Mui-selected": {
              backgroundColor: colors.primary,
              color: "#ffffff",
              "&:hover": {
                backgroundColor: colors.primary,
              },
            },
            ...buttonStyle,
          }}
          value={key}
        >
          {icon ? (
            <Box
              className="flex-col-center"
              sx={{
                bgcolor: value === key ? "#292D32" : "#ffffff",
                opacity: 0.4,
                mr: 1,
              }}
            >
              {icon}
            </Box>
          ) : null}
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
export default AppButtonGroup;
