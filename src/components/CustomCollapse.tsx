import React, { ReactNode } from "react";
import { useState } from "react";
import  Stack  from "@mui/material/Stack";
import Box from "@mui/material/Box";
import  Collapse  from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import IconButton  from "@mui/material/IconButton";
import { SxProps } from "@mui/material";

interface Props{
    titleComponent?:ReactNode
    children?:ReactNode
    containerStyle?:SxProps
}

export default function CustomCollapse({containerStyle ,titleComponent, children}:Props){
    const [expand, setExpand] = useState(false);
    const handleExpand = () => setExpand((prev) => !prev);
    return(
        <Stack spacing={1} sx={{...containerStyle}}>
            <Stack direction="row" justifyContent="space-between">
                <Box sx={{width:"100%",bgcolor:"red"}}>
                    {titleComponent}
                </Box>
                <IconButton onClick={handleExpand}>
                    {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
            </Stack>
            <Collapse in={expand}>
                {children}
            </Collapse>
        </Stack>
    )
}