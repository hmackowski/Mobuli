import React from 'react'

function Footer() {
  return (
    <div className="footer-container" style={{color: "white"}}>
      <br/>
                &copy; {new Date().getFullYear()} Mobuli. All rights
          reserved.
    </div>
  )
}

export default Footer
