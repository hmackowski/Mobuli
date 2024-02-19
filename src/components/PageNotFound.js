import React from "react";
import lostMobuli from "../images/404-mobuli-logo.png";
import "../PageNotFound.css";

function PageNotFound() {
  return (
    <div>  
      {/* Container for the Page Not Found content */}
      <div className="pagenotfound-content">
        {/* Image of Mobuli looking lost */}
        <img src={lostMobuli} className="img-fluid" alt="Lost Mobuli" />
      </div>
      {/* Heading indicating the page is not found */}
      <h1 style={{ color: "white" }}>404 - Page Not Found</h1>
    </div>
  );
}

// Export the PageNotFound component to be used in other parts of the application
export default PageNotFound;
