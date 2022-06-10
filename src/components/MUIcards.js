import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MediaCard({
  _id,
  title,
  description,
  image,
  maxHeight,
}) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          id={_id}
          component="img"
          image={"https://notregrandbleu.org/assets/img/posts/" + image}
          height="140"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ height: "100px" }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}