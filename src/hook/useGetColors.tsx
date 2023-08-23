import { useTheme } from "@mui/material";
import { AppColors,colors } from "../theme/theme";

export default function useGetColors(){
    // const theme = useSelector((state: RootState) => state.ui.theme);

    return {...useTheme().palette.primary,...colors} as AppColors

}