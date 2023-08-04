import React from "react";

// Footer component to display copyright information
function Footer() {
  return (
    // Footer container with white text color
    <div className="footer-container" style={{ color: "white" }}>
      <br />
      {/* Display the copyright symbol and the current year */}
      &copy; {new Date().getFullYear()} Mobuli. All rights reserved.
    </div>
  );
}

// Export the Footer component to be used in other parts of the application
export default Footer;
