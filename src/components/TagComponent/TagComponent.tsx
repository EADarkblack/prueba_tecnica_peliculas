import { Box, Chip, Typography } from "@mui/material";
import React from "react";

//Types
type TagComponentProps = {
  title: string;
};

const TagComponent: React.FC<TagComponentProps> = ({ title }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" className="movie-info-title">
        {title}
      </Typography>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
        <Chip label="Acción" color="success" />
        <Chip label="Aventura" color="success" />
        <Chip label="Ciencia Ficción" color="success" />
      </Box>
    </Box>
  );
};

export default TagComponent;
