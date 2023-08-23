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

export default function Tutoral() {
  const colors = useGetColors();
  const navigate = useNavigate();
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
                <Box
                  sx={{
                    borderRadius: "15px",
                    height: 250,
                    width: "85%",
                    bgcolor: colors.white,
                    p: "19px 17px",
                    mt: "21px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={styles.title}>{el.title}</Typography>
                  <Typography
                    // noWrap={true}
                    paragraph={true}
                    sx={styles.description}
                  >
                    {el.description}
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
                      <QueryBuilderIcon />
                      <Typography sx={styles.duration}>
                        {el.duration + " mins"}
                      </Typography>
                    </Box>

                    <AppButton
                      title={"start"}
                      onClick={() => navigateHandler(el.id)}
                    />
                  </Box>
                </Box>
              </Grid2>
            ))}
      </Grid2>
    </Box>
  );
}

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: 600,
  },
  description: {
    fontSize: "18px",
    fontWeight: 500,
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
  },
  duration: {
    fontSize: "18px",
    fontWeight: 500,
    ml: 1,
  },
};
