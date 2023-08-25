import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarHalfIcon from "@mui/icons-material/StarHalf";

interface StarRatingProps {
  rating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating = 4 }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const starIcons = Array.from({ length: fullStars }, (_, index) => (
    <StarIcon
      key={index}
      sx={{ marginRight: "4px", color: "gold", height: 15, width: 15 }}
    />
  ));

  let lastStar: React.ReactNode = null;
  if (hasHalfStar) {
    lastStar = (
      <StarHalfIcon
        sx={{ marginRight: "4px", color: "gold", height: 15, width: 15 }}
      />
    );
  } else if (fullStars < totalStars) {
    lastStar = (
      <StarOutlineIcon
        sx={{ marginRight: "4px", color: "gold", height: 15, width: 15 }}
      />
    );
  }

  const emptyStars = Array.from(
    {
      length:
        totalStars - fullStars - (hasHalfStar ? 1 : 0) - (lastStar ? 1 : 0),
    },
    (_, index) => (
      <StarOutlineIcon
        key={fullStars + (hasHalfStar ? 1 : 0) + (lastStar ? 1 : 0) + index}
        style={{ marginRight: "4px" }}
      />
    )
  );

  return (
    <div style={{ display: "flex" }}>
      {starIcons}
      {lastStar}
      {emptyStars}
    </div>
  );
};

export default StarRating;
