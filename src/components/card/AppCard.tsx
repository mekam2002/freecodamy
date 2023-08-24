import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { SxProps, Typography } from "@mui/material";
import styles from "./AppCard.styles";
import BadgeAvatar from "../BadeAvatar";

interface Props {
  topChildren?: JSX.Element;
  title1?: string | JSX.Element;
  value1?: string | JSX.Element | null;
  title1Style?: SxProps;
  value1Style?: React.CSSProperties | SxProps;
  listItemStyle?: React.CSSProperties | SxProps;
  title2?: string | JSX.Element;
  value2?: string | JSX.Element;
  title2Style?: React.CSSProperties | SxProps;
  value2Style?: React.CSSProperties | SxProps;
  defaultAvatar?: JSX.Element;
  rightComponent?: JSX.Element;
  bottomElement?: JSX.Element;
  avatarUrl?: string;
  variant?: "circular" | "square";
  containerStyle?: React.CSSProperties | SxProps;
  avatarStyle?: React.CSSProperties | SxProps;
  leftComponent?: JSX.Element;
  alignItems?: "center" | "flex-start";
  withBadge?: boolean;
  onClick?: (ev: any) => void;
}

/**
 * This is a TypeScript React component used to create a card-like UI element that displays information such as a title, value, avatar, and other components.
 * @param {JSX.Element} topChildren - The JSX element to display at the top of the card.
 * @param {string | JSX.Element} title1 - The title of the card.
 * @param {string} value1 - The value associated with the title.
 * @param {React.CSSProperties} title1Style - The CSS styles to apply to the title element.
 * @param {React.CSSProperties} value1Style - The CSS styles to apply to the value element.
 * @param {React.CSSProperties} listItemStyle - The CSS styles to apply to the list item element.
 * @param {string | JSX.Element} title2 - The secondary title of the card.
 * @param {string} value2 - The value associated with the secondary title.
 * @param {React.CSSProperties} title2Style - The CSS styles to apply to the secondary title element.
 * @param {React.CSSProperties} value2Style - The CSS styles to apply to the secondary value element.
 * @param {JSX.Element} bottomElement - The JSX element to display at the bottom of the card.
 * @param {React.CSSProperties} containerStyle - The CSS styles to apply to the container element.
 * @param {React.CSSProperties} avatarStyle - The CSS styles to apply to the avatar element.
 * @param {JSX.Element} defaultAvatar - The default avatar to display if no avatar is provided.
 * @param {JSX.Element} rightComponent - The JSX element to display on the right side of the card.
 * @param {JSX.Element} leftComponent - The JSX element to display on the left side of the card.
 * @param {string} avatarUrl - The URL of the avatar to display.
 * @param {"center" | "flex-start"} alignItems - The alignment of the items in the card.
 * @param {boolean} withBadge - Whether to display a badge on the avatar.
 * @param {(ev: any) => void} onClick - The function to call when the card is clicked.
 * @returns {JSX.Element} The AppCard component.
 */

export default function AppCard({
  title1,
  title1Style,
  listItemStyle,
  title2,
  title2Style,
  bottomElement,
  containerStyle,
  avatarStyle,
  avatarUrl,
  rightComponent,
  defaultAvatar,
  leftComponent,
  value1,
  alignItems = "center",
  withBadge,
  onClick,
  topChildren,
  variant,
  value2,
}: Props) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: "hidden",
        ...containerStyle,
      }}
      onClick={onClick}
    >
      {topChildren ? topChildren : null}
      <ListItem
        secondaryAction={value1}
        alignItems={alignItems}
        sx={{
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          ...listItemStyle,
        }}
      >
        {leftComponent ? leftComponent : null}
        {avatarUrl ? (
          <ListItemAvatar>
            {withBadge ? (
              <BadgeAvatar url={avatarUrl} avatarStyle={{ ...avatarStyle }}>
                {defaultAvatar}
              </BadgeAvatar>
            ) : (
              <Avatar
                variant={variant ? variant : "circular"}
                src={avatarUrl}
                sx={{ ...avatarStyle }}
              >
                {defaultAvatar}
              </Avatar>
            )}
          </ListItemAvatar>
        ) : null}
        {defaultAvatar ? defaultAvatar : null}
        <ListItemText
          primary={
            <Typography
              noWrap
              sx={{ ...styles.app_card_title1, ...title1Style }}
            >
              {" "}
              {title1}{" "}
            </Typography>
          }
          secondary={
            title2 ? (
              <Typography sx={{ ...styles.app_card_title2, ...title2Style }}>
                {title2}
              </Typography>
            ) : null
          }
        />
        <Box sx={{ marginTop: "6px" }}>{rightComponent}</Box>
        {value2}
      </ListItem>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {bottomElement}
      </Box>
    </Box>
  );
}
