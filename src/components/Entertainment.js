import React from "react";
import Container from "react-bootstrap/Container";
import "./Entertainment.scss";

function Entertainment() {
  return (
    <Container className="my-5" id="entertainment">
      <div className="m-5">
        <h2 className="d-flex bd-highlight">Entertainment</h2>
        <div className="Entertainment-list mx-3">
          <h3>Tetris 2d</h3>
          <h3>Tetris 3d(?)</h3>
        </div>
      </div>
    </Container>
  );
}

export default Entertainment;
