import { SwipeableDrawer } from "@mui/material";
import React from "react"


interface Props {
    open: boolean;
    toggleDrawer: (el: boolean) => void;
    children?: JSX.Element;
}


export default function AppSideDrawer({ open, toggleDrawer, children }: Props) {
    return (
        <SwipeableDrawer
            anchor="right"
            open={open}
            onClose={() => toggleDrawer(false)}
            onOpen={() => toggleDrawer(true)}
        >
            {children}
        </SwipeableDrawer >)
}
