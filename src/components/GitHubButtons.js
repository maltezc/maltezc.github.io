import React from "react";

function GitHubButtons({githubLinks}) {
  return (
    <div className="col-10 col-sm-8 col-lg-6 d-flex justify-content-center">
      <span className="btn-group" role="group">
        {githubLinks}
      </span>
    </div>
  );
}

export default GitHubButtons;
