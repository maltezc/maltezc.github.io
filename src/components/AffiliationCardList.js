import React from "react";
import AffiliationCard from "./AffiliationCard";

function AffiliationCardList({affiliations}) {
  let projectCards = affiliations.map((affiliation) => (
    <AffiliationCard affiliation={affiliation} key={affiliation.title} />
  ));

  return <div>{projectCards}</div>;

}

export default AffiliationCardList;
