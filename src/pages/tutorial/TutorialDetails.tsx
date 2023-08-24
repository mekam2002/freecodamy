import React, { useEffect, useMemo, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router";
import useGetColors from "../../hook/useGetColors";
import { doc, getDoc, DocumentSnapshot, Firestore } from "firebase/firestore";
import { firestoreDb } from "../../service/firebase";
import useFsDoc from "../../hook/useFsDoc";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import TextAnimation from "../../components/TextAnimation";

export default function TutorialDetails() {
  const { id } = useParams();
  const selector = useSelector((state: any) => state.course);
  const styles = useStyle();

  const { data, loading, error } = useFsDoc({
    id: id + "",
    collection: "courseList",
  });

  const selected = useMemo(
    () => selector.data.find((el: any) => el.courseId === id),
    []
  );

  if (loading) {
    return <TextAnimation />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }
  return (
    <Box>
      <Typography sx={styles.header}>{selected?.title}</Typography>

      <Box sx={{ width: "100%" }}>
        {data?.course.map((el: any, index: number) => (
          <Box key={index} sx={{ width: "100%" }}>
            <Typography sx={styles.title}>{el.title}</Typography>
            <Typography sx={styles.paragraph}>{el.description}</Typography>
            <Stack spacing={3} mt={4}>
              {el.children.map((ev: any, index: number) => (
                <Box>
                  <Typography sx={styles.titl}>{ev.title}</Typography>
                  <Typography sx={styles.chi}>{ev.descrition}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const useStyle = () => {
  const colors = useGetColors();
  const styles = {
    header: {
      fontSize: "32px",
      fontWeight: 700,
      textAlign: "center",
      mb: 3,
    },
    title: {
      fontSize: "28px",
      fontWeight: 600,
      textAlign: "center",
    },
    paragraph: {
      mt: 2,
      fontSize: "25px",
      fontWeight: 500,
      lineHeight: "42px",
      color: colors.grey1,
    },
    duration: {
      fontSize: "18px",
      fontWeight: 500,
      ml: 1,
    },
    titl: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "42px",
      color: colors.grey1,
    },
    chi: {
      fontSize: "25px",
      fontWeight: 500,
      lineHeight: "42px",
      color: colors.grey1,
    },
  };

  return styles;
};
