import { Avatar, AvatarProps, Box } from "@mui/material"
import React, { ReactNode } from "react"
import { styled } from "@mui/material/styles"
import Badge from "@mui/material/Badge"

interface Props {
  url?: string
  rootStyle?: React.CSSProperties
  avatarStyle?: React.CSSProperties
  children?: ReactNode
  withBadge?: boolean
  avatarProps?:AvatarProps
}
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: ""
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}))

export default function CustomAvatar({
  url,
  rootStyle,
  avatarStyle,
  children,
  withBadge,
  avatarProps
}: Props) {
  if (withBadge) {
    return (
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar src={url} sx={{ ...avatarStyle }} {...avatarProps} >
          {children}
        </Avatar>
      </StyledBadge>
    )
  }

  return (
    <Box
      sx={{
        ...rootStyle
      }}
    >
      <Avatar src={url} sx={{ ...avatarStyle }} {...avatarProps}>
        {children}
      </Avatar>
    </Box>
  )
}
