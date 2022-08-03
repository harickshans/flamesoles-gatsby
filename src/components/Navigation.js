import React from "react"
import "./css/Navigation.css"
import Logo from "../images/logo.png"
import { BsCart3, BsFillPersonFill } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"
import { Link } from "gatsby"

function Navigation() {
  return (
    <nav>
      <div className="container nav-container">
        {/* LOGO */}
        <div className="logo">
          <Link className="nav-links-font" to="/">
            <img src={Logo} />
          </Link>
        </div>

        {/* LINKS */}
        <div className="links">
          <Link className="nav-links-font" to="/product-category/air-jordan">
            Air Jordan
          </Link>
          <Link className="nav-links-font" to="/product-category/yeezy">
            Yeezy
          </Link>
          <Link className="nav-links-font" to="/product-category/off-white">
            Off White
          </Link>
          <Link className="nav-links-font" to="/product-category/sacai">
            Sacai
          </Link>
          <Link className="nav-links-font" to="/product-category/dunks">
            Dunks
          </Link>
        </div>

        {/* SEARCH BAR */}
        <div className="search-bar">
          <input className="search" placeholder="Search..." />
        </div>

        {/* ICONS */}
        <div className="icons">
          <button className="icon-buttons">
            <BsCart3 />
          </button>
          <button className="icon-buttons">
            <Link to="/signup">
              <BsFillPersonFill />
            </Link>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
