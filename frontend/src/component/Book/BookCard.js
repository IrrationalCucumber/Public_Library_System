import {
  AspectRatio,
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/joy";
import {
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
} from "@mui/material";
import React from "react";

export default function BookCard(props) {
  return (
    <div>
      <Card variant="outlined" sx={{ width: 320, overflow: "auto" }}>
        <CardActionArea onClick={(e) => alert("Clicked!")}>
          <CardHeader avatar="BookID" />
          <Typography level="title-lg" noWrap variant="plain">
            {props.title}
          </Typography>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
              srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent>
            <Chip color="neutral" size="md" variant="outlined">
              {props.genre}
            </Chip>
            <Typography level="body-sm">
              We are a community of developers prepping for coding interviews,
              participate, chat with others and get better at interviewing.
            </Typography>
          </CardContent>
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
