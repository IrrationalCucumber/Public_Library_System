import { Button, CardContent } from "@mui/joy";
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
        <CardActionArea onClick={(e) => alert("Clicked!")}>
          <CardHeader avatar="BookID" />
          <CardMedia component="img" src="" alt="BookImage" />
          <CardContent>Book Descroption</CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="outlined"
            color="neutral"
            onClick={(e) => alert("Reserved!")}
          >
            Reserve
          </Button>
          <Button variant="solid" color="primary" onClick={(e) => "Borrowed"}>
            Borrow
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
