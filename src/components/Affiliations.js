import React from "react";
import Container from "react-bootstrap/Container";
import "./Affiliations.scss";
import affilationsData from "../data/affiliationsData.js";
import AffiliationCardList from "./AffiliationCardList";

function Affiliations() {
  return (
    <section id="affiliations">
      <Container className="my-5">
        <div className="m-5">
          <h2 className="d-flex bd-highlight fw-bold">Affiliations</h2>
          <AffiliationCardList affiliations={affilationsData} />
        </div>
      </Container>
    </section>
  );
}

export default Affiliations;
