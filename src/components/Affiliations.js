import React from "react";
import Container from "react-bootstrap/Container";
import "./Affiliations.scss";
import affilationsData from "../data/affiliationsData.js";
import AffiliationCardList from "./AffiliationCardList";

function Affiliations() {
  return (
    <Container className="my-5" id="affiliations">
      <div className="m-5">
        <h1 className="d-flex bd-highlight">Affiliations</h1>
        <AffiliationCardList affiliations={affilationsData} />
      </div>
    </Container>
  );
}

export default Affiliations;

