import React from "react";
import useGetColors from "../../hook/useGetColors";
interface Props {
  size?: string | number;
  number?: number;
  labelColor?: string;
  bgColor?: string;
  style?: React.CSSProperties;
}

/**
 *This component is to use to make all badge of the app
 * @param {string | number} size - use to open close modal
 * @param {number } number - the content number of the badge
 * @param {string } labelColor - the color of the label
 * @param {string } bgColor - background color of the badge
 * @param {React.CSSProperties} style - custom style applied to the container element
 */

export default function AppBadge({
  size,
  number,
  labelColor,
  bgColor,
  style,
}: Props) {
  const colors = useGetColors();
  return (
    <span
      className="flex-col-center text-12"
      style={{
        backgroundColor: bgColor || colors.main,
        borderRadius: "100%",
        height: size || 24,
        width: size || 24,
        color: labelColor || "#fff",
        marginLeft: "12px",
        ...style,
      }}
    >
      {number}
    </span>
  );
}
