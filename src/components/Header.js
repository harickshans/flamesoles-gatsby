import React from "react"
import "./css/Header.css"
import HeaderImage from "../images/Header.jpg"
import { Link } from "gatsby"

function Header() {
  return (
    <div className="container header">
      <img className="header-banner" src={HeaderImage} />
      <Link className=" cta-home" to="/product/shoe">
        Buy Now
      </Link>
    </div>
  )
}

export default Header
