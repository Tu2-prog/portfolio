import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";

function ProjectCard(props) {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  }

  return (
    <div key={props.id} className="p-4" style={{ display: "flex", flexWrap: "wrap", width:'25rem'}}>
      {[...Array(props.numberOfCards)].map((e, i) => (
        <Card key={i} style={{ width: `${100 / props.cardsPerRow}%`, margin: "0 5px 20px 5px" }}>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Button onClick={() => handleClick(`/projects/${props.buttonLink}`)} variant="primary">{props.buttonText}</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ProjectCard;
