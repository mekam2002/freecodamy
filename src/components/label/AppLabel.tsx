import React from "react";
import { capitalizeFirstLetter } from "../../utils/strings";

export default function AppLabel({
    label,
    bgcolor,
    labelColor,
    containerStyle,
    onClick
}:{
    label:string,
    bgcolor?:string,
    labelColor?:string,
    containerStyle?:React.CSSProperties
    onClick?: ()=> void
}){
    return(
        <div 
            className=" font-400 text-12 flex-col-center"
            style={{
                borderRadius:"20px",
                backgroundColor:bgcolor || "",
                // textalign:"center",
                color:labelColor || "#4A545E",
                paddingInline:"10px",
                paddingTop:"5px",
                paddingBottom:"5px",
                ...containerStyle
            }}
            onClick={onClick}
        >
           {capitalizeFirstLetter(label?.toLowerCase())}
        </div>
    )
}