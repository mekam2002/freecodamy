import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { CopyBlock, dracula } from "react-code-blocks";
import useGetColors from "../../hook/useGetColors";

export default function TutorialDetails() {
  const { id } = useParams();
  const { data } = useSelector((state: any) => state.course);

  const styles = useStyle();

  const selected = React.useMemo(
    () => data.find((el: any) => el.id === id),
    []
  );

  return (
    <Box>
      <Typography sx={styles.title}>{selected?.title}</Typography>

      {selected?.course.map((el: any, index: number) => (
        <Box key={index}>
          <Typography
            paragraph={true}
            sx={styles.paragraph}
            variant="body1"
            gutterBottom
          >
            {el.description}
          </Typography>

          {el.part?.map((ev: any, index: number) => (
            <Box key={index}>
              <Typography
                paragraph={true}
                sx={styles.paragraph}
                variant="body1"
                gutterBottom
              >
                {ev.title}
              </Typography>

              <Typography
                paragraph={true}
                sx={styles.paragraph}
                variant="body1"
                gutterBottom
              >
                {ev.description}
              </Typography>
            </Box>
          ))}

          <Typography
            paragraph={true}
            sx={styles.paragraph}
            variant="body1"
            gutterBottom
          >
            {el.conclusion}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

const useStyle = () => {
  const colors = useGetColors();
  const styles = {
    title: {
      fontSize: "28px",
      fontWeight: 600,
      textAlign: "center",
    },
    paragraph: {
      mt: 4,
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
  };

  return styles;
};
