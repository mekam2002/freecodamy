import React, { ReactNode } from "react";
import { useState } from "react";
import {
  Stack,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
// import { Any } from "../../dataType";
import StyledTableRow from "./StyledTableRow";
import StyledTableCell from "./StyledTableCell";
import { capitalizeFirstLetter } from "../../utils/strings";
import useGetColors from "../../hook/useGetColors";

const style = {
  fontSize: 14,
  color: "#585572",
  fontWeight: 400,
};

interface columnProps {
  key: string;
  label?: string;
  renderHeader?: () => ReactNode;
  renderValue?: (row: any) => ReactNode;
}

interface Props {
  data: any;
  columns: columnProps[];
  headerStyle?: React.CSSProperties | SxProps;
  tableStyle?: React.CSSProperties | SxProps;
  headerCellStyle?: React.CSSProperties | SxProps;
}

function CustomTable({
  columns,
  data,
  headerStyle,
  tableStyle,
  headerCellStyle,
}: Props) {
  const [page] = useState(0);
  const [rowsPerPage] = useState(10);

  const colors = useGetColors();

  return (
    <Table
      sx={{
        ...tableStyle,
        borderCollapse: "collapse",
        border: `1px solid ${colors.light_grey_2}`,
        borderRadius: 2,
        bgcolor: colors.red,
        mt: 3,
      }}
    >
      <TableHead>
        <TableRow sx={{ bgcolor: colors.red, ...headerStyle }}>
          {columns?.map((col: columnProps) => (
            <TableCell
              key={col.key}
              sx={{ ...style, width: 100, ...headerCellStyle }}
            >
              {col?.renderHeader?.() || capitalizeFirstLetter(col?.label + "")}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {(rowsPerPage > 0
          ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : data
        ).map((item: any, index: any) => (
          <StyledTableRow
            key={index}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              backgroundColor: "white",
            }}
          >
            {columns?.map((col) => (
              <StyledTableCell key={col.key}>
                {col?.renderValue?.(item) ||
                  capitalizeFirstLetter(item?.[col?.key + ""])}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CustomTable;
