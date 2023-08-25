import React from "react";
import useGetColors from "../../../hook/useGetColors";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useStyle } from "../useStyle";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import AppButton from "../../../components/button/AppButton";
import StarIcon from "@mui/icons-material/Star";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarRating from "./StarRating";

interface Props {
  title?: string;
  description?: string;
  duration?: string | number;
  onClick?: () => void;
  onAdd?: () => void;
  rating?: number;
}
export default function TutorialCard({
  title,
  description,
  duration,
  onClick,
  onAdd,
  rating,
}: Props) {
  const colors = useGetColors();
  const styles = useStyle();

  return (
    <Box
      sx={{
        borderRadius: "15px",
        // height: 250,
        // width: "85%",
        bgcolor: colors.white,
        p: "19px 17px",
        mt: "21px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography onClick={onClick} sx={styles.tutTitle}>
        {title}
      </Typography>
      <Typography
        // noWrap={true}
        paragraph={true}
        sx={styles.tutDesc}
      >
        {description}
      </Typography>

      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <QueryBuilderIcon sx={{ width: 18, height: 18 }} />
          <Typography sx={styles.tutDur}>{duration}</Typography>
        </Box>

        <Stack spacing={0.5} direction={"row"}>
          <StarRating rating={rating} />
          <Typography sx={styles.tutDur}>{rating}</Typography>
        </Stack>
      </Box>

      <Divider sx={{ mt: 1 }} />
      <AppButton
        title={"add"}
        onClick={onAdd}
        icon={<AddCircleOutlineIcon />}
        containerStyle={{ mt: 2 }}
      />
    </Box>
  );
}
