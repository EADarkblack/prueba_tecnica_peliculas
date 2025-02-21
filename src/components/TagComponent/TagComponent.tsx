import { Box, Chip, Typography } from "@mui/material";
import React from "react";

//Types
type TagComponentProps = {
  title: string;
  data: { name: string }[];
};

const TagComponent: React.FC<TagComponentProps> = ({ title, data }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" className="movie-info-title">
        {title}
      </Typography>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
        {data?.map((item: { name: string }, index: number) => (
          <Chip key={index} label={item?.name} color="success" />
        ))}
      </Box>
    </Box>
  );
};

export default TagComponent;
