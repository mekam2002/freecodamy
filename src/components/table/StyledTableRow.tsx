import styled from "@emotion/styled";
import { TableRow } from "@mui/material";


const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F9FAFB",
    alignItems: "center",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
    alignItems: "center",
  },
}));

export default StyledTableRow;
