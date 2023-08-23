import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { capitalizeFirstLetter } from "../../utils/strings";
import { Typography, SxProps } from "@mui/material";
import useGetColors from "../../hook/useGetColors";

interface Props {
  title?: string | null | React.ReactNode;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  titleStyle?: React.CSSProperties;
  containerStyle?: SxProps;
  hoverStyle?: React.CSSProperties;
  loading?: boolean;
  disabled?: boolean;
  variant?: "contained" | "outlined" | "text";
  onClick?: (e?: any) => void;
}

/** A reusable button component with customizable properties.
 * @param {Object} props - The component props.
 * @param {string | null | JSX.Element} [props.title] - The title of the button.
 * @param {JSX.Element} [props.icon] - The icon to display on the button.
 * @param {React.CSSProperties} [props.titleStyle] - The style for the button title.
 * @param {React.CSSProperties} [props.containerStyle] - The style for the button container.
 * @param {React.CSSProperties} [props.hoverStyle] - The style for the button when hovered.
 * @param {boolean} [props.loading] - Whether the button is in a loading state.
 * @param {boolean} [props.disabled] - Whether the button is disabled.
 * @param {"contained" | "outlined" | "text"} [props.variant] - The variant of the button.
 * @param {Function} [props.onClick] - The function to call when the button is clicked.
 * @returns {JSX.Element} - The rendered button component.
 */

const AppButton: React.FC<Props> = ({
  containerStyle,
  icon,
  title,
  disabled,
  titleStyle,
  loading,
  variant,
  hoverStyle,
  endIcon,
  onClick,
}) => {
  const bgColor = useGetColors().main;
  const disabledColor = "#BDBDBD";

  const bgStyle: React.CSSProperties = containerStyle as any;
  const bg = bgStyle?.backgroundColor || bgStyle?.background || bgColor;

  return (
    <LoadingButton
      onClick={onClick}
      sx={{
        borderColor: bgColor,
        textTransform: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        height: 44,
        color: "#fff",
        ...containerStyle,
        background: disabled || loading ? disabledColor : bg,
        "&:hover": {
          ...hoverStyle,
          background: disabled || loading ? disabledColor : bg || "",
          opacity: 0.7,
        },
      }}
      loading={loading}
      variant={variant}
      startIcon={icon}
      endIcon={endIcon}
      disabled={loading || disabled}
    >
      <Typography noWrap style={{ color: "#ffffff", ...titleStyle }}>
        {typeof title === "string" ? capitalizeFirstLetter(title || "") : title}
      </Typography>
    </LoadingButton>
  );
};

export default AppButton;
