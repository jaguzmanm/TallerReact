import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Banner() {
  return (
    <Row id="banner">
      <Col lg={5}>
        <h1>Museos de arte moderno</h1>
      </Col>
      <Col lg={3}></Col>
      <Col lg={4}>
        <Row id="nav">
          <Col lg="auto">
            <h3>
              <strong>Museos</strong>
            </h3>
          </Col>

          <Col lg="auto">
            <h3>Artistas</h3>
          </Col>

          <Col lg="auto">
            <h3>Movimientos</h3>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Banner;
