import React from "react";
import seoResultsPNG from "../assets/seoResults.png";

function SEOResults() {
  return (
    <section className="overflow-hidden">
      <div className="SEOResults container text-center">
        <img
          src={seoResultsPNG}
          id="seoResults"
          className="img-fluid border rounded-3 shadow-lg mb-4"
          alt="Example image"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default SEOResults;
