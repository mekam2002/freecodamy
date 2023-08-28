import useGetColors from "../../hook/useGetColors";

export const useStyle = () => {
  const colors = useGetColors();

  const styles = {
    gridCont: {
      borderRadius: "15px",
      bgcolor: colors.white,
      p: "19px 17px",
      mt: "21px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    tutTitle: {
      fontSize: "20px",
      fontWeight: 600,
      "&:hover": {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
    tutDesc: {
      fontSize: "14px",
      fontWeight: 500,
      mt: 2,
    },
    tutDur: {
      fontSize: "14px",
      fontWeight: 500,
      ml: 0.3,
    },
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

  return styles;
};
