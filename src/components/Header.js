import React from "react"
import "./css/Header.css"
import HeaderImage from "../images/Header.jpg"

function Header() {
  return (
    <div className="container header">
      <img className="header-banner" src={HeaderImage} />
    </div>
  )
}

export default Header
