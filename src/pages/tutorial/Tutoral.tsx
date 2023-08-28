import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import useGetColors from "../../hook/useGetColors";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";
import { courseList } from "./fakeTutorialData";
import { CourseType } from "../../store/features/courseSlice";
import { useStyle } from "./useStyle";
import TutorialCard from "./components/TutorialCard";
import AppInput from "../../components/AppInput";
import AppPopper from "../../components/popper/AppPopper";
import LoginModal from "../auth/LoginModal";

export default function Tutoral() {
  const navigate = useNavigate();
  const styles = useStyle();
  const { data, loading } = useSelector((state: any) => state.course);
  const { isAuth } = useSelector((state: any) => state.auth);

  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const modalHandler = () => {
    if (isAuth) {
      return;
    }
    setOpen((prev) => !prev);
  };

  const navigateHandler = (id?: string | number) => {
    navigate(id + "");
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, mt: 2 }}>
      <LoginModal open={open} onClose={modalHandler} />
      <Box className="flex">
        <AppInput
          inputStyle={{ backgroundColor: "white" }}
          containerStyle={{ width: "27%" }}
          value={value}
          onChange={(ev) => setValue(ev)}
          placeholder="Search"
        />
        <AppPopper buttonStyle={{ marginLeft: "20px" }} />
      </Box>
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
                  sx={styles.gridCont}
                  variant="rectangular"
                  width={"85%"}
                  height={250}
                />
              </Grid2>
            ))
          : data
              .filter((el: any) =>
                el.title.toLowerCase().includes(value?.toLowerCase())
              )
              .map((el: CourseType, index: number) => (
                <Grid2 xs={4} sm={4} md={4} key={index}>
                  <TutorialCard
                    title={el.title}
                    duration={el.duration}
                    description={el.description}
                    onClick={() => navigateHandler(el.courseId)}
                    rating={el?.rating}
                    onAdd={modalHandler}
                  />
                </Grid2>
              ))}
      </Grid2>
    </Box>
  );
}
