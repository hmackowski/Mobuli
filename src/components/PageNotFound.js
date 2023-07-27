import React from "react";
import lostMobuli from "../images/404-mobuli-logo.png";
import "../PageNotFound.css";

function PageNotFound() {
  return (
    <>  
    <div className="pagenotfound-content">
      <img src={lostMobuli} className="img-fluid" />
      
    </div>
    <h1 style={{ color: "white" }}>404 - Page Not Found</h1>
    </>
  );
}

export default PageNotFound;
