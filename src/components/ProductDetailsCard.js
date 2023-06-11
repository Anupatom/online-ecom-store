import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { shortenText } from "../utils/utils";
import Tooltip from "@mui/material/Tooltip";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProductDetailsCard = (props) => {
  const { title, price, description, category, image, rating } = props.product;
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={title}
        subheader={category}
        titleTypographyProps={{ variant: "subtitle1", lineHeight: "1.1rem" }}
        sx={{ height: "75px" }}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
        sx={{
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography> {price}</Typography>
          <Rating name="read-only" value={rating.rate} readOnly />
        </Box>
        <Tooltip title={description} placement="top">
          <Typography variant="body2" color="text.secondary" mt={2}>
            {shortenText(description, 70)}
          </Typography>
        </Tooltip>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductDetailsCard;
