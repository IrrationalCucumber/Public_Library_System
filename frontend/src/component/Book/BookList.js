import { AspectRatio, Button, Card, CardContent, Typography } from "@mui/joy";
import {
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
} from "@mui/material";
import React from "react";

export default function BookList() {
  return (
    <div>
      <Card variant="outlined" sx={{ width: 320, height: 300 }}>
        <CardActionArea onClick={(e) => alert("Clicked!")}>
          <CardHeader avatar="BookID" />
          <Typography level="title-lg" noWrap variant="plain">
            BookTItle
          </Typography>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
              srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
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
