import React from "react";


import ProjectInfo from "./ProjectInfo";

function AffiliationCard({ affiliation }) {

  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
          <ProjectInfo project={affiliation} />
        </div>
      </div>
    </div>
  );
}

export default AffiliationCard;
