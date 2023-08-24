import styled from "@emotion/styled";
import { TableCell, tableCellClasses } from "@mui/material";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "white",
    color: "#121212",
    // border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 400
    // border: 0,
  },
}));

export default StyledTableCell;
