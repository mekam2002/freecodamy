import React from "react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import useGetColors from "../../hook/useGetColors";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import AppButton from "../../components/button/AppButton";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";
import { courseList } from "./fakeTutorialData";
import { CourseType } from "../../store/features/courseSlice";
import { useStyle } from "./useStyle";
import TutorialCard from "./components/TutorialCard";

export default function Tutoral() {
  const colors = useGetColors();
  const navigate = useNavigate();
  const styles = useStyle();
  const { data, loading } = useSelector((state: any) => state.course);

  const navigateHandler = (id?: string | number) => {
    navigate(id + "");
  };

  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Grid2
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.lenght === 0 || loading
          ? courseList.slice(0, 9).map((el, index) => (
              <Grid2 xs={4} sm={4} md={4} key={index}>
                <Skeleton
                  key={index}
                  sx={{
                    borderRadius: "15px",
                    bgcolor: colors.white,
                    p: "19px 17px",
                    mt: "21px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  variant="rectangular"
                  width={"85%"}
                  height={250}
                />
              </Grid2>
            ))
          : data.map((el: CourseType, index: number) => (
              <Grid2 xs={4} sm={4} md={4} key={index}>
                <TutorialCard
                  title={el.title}
                  duration={el.duration}
                  description={el.description}
                  onClick={() => navigateHandler(el.courseId)}
                  rating={el?.rating}
                />
              </Grid2>
            ))}
      </Grid2>
    </Box>
  );
}
