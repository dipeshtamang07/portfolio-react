import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

function ProjectCard(props) {
  return (
    <Card shadow={0} style={{ minWidth: "450", margin: "auto" }}>
      <CardTitle
        style={{
          color: "#fff",
          height: "176px",
          background:
            "url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover"
        }}
      >
        {props.title}
      </CardTitle>
      <CardText>{props.description}</CardText>
      <CardActions border>
        <Button colored>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
            href={props.github_link}
          >
            Github
          </a>
        </Button>
        <Button colored>CodePen</Button>
        <Button colored>Live Demo</Button>
      </CardActions>
      <CardMenu style={{ color: "#fff" }}>
        <IconButton name="share" />
      </CardMenu>
    </Card>
  );
}

export default ProjectCard;
