import React from "react";
import Container from "react-bootstrap/Container";
import "./Affiliations.scss";

function Affiliations() {
  return (
    <Container className="my-5" id="affiliations">
      <div className="m-5">
        <h1 className="d-flex bd-highlight">Affiliations</h1>
        <div className="Affiliations-list mx-3">
          {/* <h3>bjj App</h3> */}
          <h3><a href="https://m3dida.com/">M3dida.com</a></h3> {/* TODO: SET UP STYLE FOR THIS LINK */} {/* SHOW TECH STACK FOR THIS PROJECT. */}
          {/* <h3>Rack-share.com</h3> */}
        </div>
      </div>
    </Container>
  );
}

export default Affiliations;
