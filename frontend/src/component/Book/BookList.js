import { CardContent } from "@mui/joy";
import {
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
} from "@mui/material";
import React from "react";

export default function BookList() {
  return (
    <div>
      <Card variant="outlined">
        <CardActionArea>
          <CardHeader avatar="BookID" />
          <CardMedia component="img" src="" alt="BookImage" />
          <CardContent>
            Book Descroption
            <CardActions></CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
