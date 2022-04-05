/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Card, Container, Col } from "react-bootstrap";

function Museum(props) {
  return (
    <Col lg="auto">
      <Card style={{ width: "18rem" }} className="museumCard">
        <Card.Img src={props.data.image} className="museumPhoto" />
        <Card.Body>
          <Card.Title>
            <h2>{props.data.name}</h2>
          </Card.Title>
          <h4>
            <Card.Text>{props.data.city}</Card.Text>
          </h4>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Museum;
