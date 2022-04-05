import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import Museum from "./museum.js";

function Museums() {
  const url = "https://back-museums-uniandes.herokuapp.com/api/museums";

  const [museums, setMuseums] = useState([]);
  const [title, setTitle] = useState("MUSEOS");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((museums) => {
        setMuseums(museums);
      });
  });

  let renderDetail = () => {
    console.log("yes");
  };

  function select(id) {
    setSelected(museums[id]);
    setTitle("MUSEO " + selected.name + ": Obras principales");
  }

  let renderMuseums = () => {
    return museums.map((item, i) => (
      <Col lg="auto" key={i + 1} onClick={() => select(i)}>
        <Museum key={i + 1} data={item} />
      </Col>
    ));
  };

  let renderInfo = () => (selected == null ? renderMuseums() : renderDetail());

  return (
    <div>
      <Container>
        <Row>
          <h3>Home {">"} Museos</h3>
        </Row>
        <Row id="banner">
          <h2>
            <strong>{title}</strong>
          </h2>
        </Row>
        <hr />
        <Row id="information">{renderInfo()}</Row>
      </Container>
    </div>
  );
}

export default Museums;
