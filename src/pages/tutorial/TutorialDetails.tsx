import { useEffect, useMemo } from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router";
import useGetColors from "../../hook/useGetColors";
import useFsDoc from "../../hook/useFsDoc";
import { useSelector } from "react-redux";
import TextAnimation from "../../components/TextAnimation";

import Prism from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import CodeDisplay from "../../components/codeDisplay/CodeDisplay";

export default function TutorialDetails() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

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

  // if (!data) {
  //   return <p>No data available</p>;
  // }
  console.log(data);
  return (
    <Box
      sx={{
        pb: 7,
      }}
    >
      <Typography sx={styles.header}>{data?.title}</Typography>
      <Box sx={{ width: "100%" }}>
        {data?.course.map((el: any, index: number) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              flexDirection: "column",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography sx={styles.title}>{el.title}</Typography>
            <Typography sx={{ ...styles.paragraph, width: "100%" }}>
              {el.description}
            </Typography>
            {el.codeblock !== "" ? <CodeDisplay code={el.codeblock} /> : true}
            {el.imagePath !== "" ? (
              <Avatar
                src={el.imagePath}
                variant="square"
                sx={{ width: "50%", height: 500 }}
              />
            ) : (
              true
            )}
            <Stack spacing={3} mt={4}>
              {el.children.map((ev: any, index: number) => (
                <Box key={index}>
                  <Typography sx={styles.titl}>{ev.title}</Typography>
                  <Typography sx={styles.paragraph}>{ev.descrition}</Typography>
                  {ev.codeblock ? <CodeDisplay code={ev.codeblock} /> : null}
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
      fontSize: "20px",
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
