import React from "react"
import "./Navigation.css"
import Logo from "../images/logo.png"
import { BsCart3, BsFillPersonFill } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"

function Navigation() {
  return (
    <nav>
      <div className="container nav-container">
        {/* LOGO */}
        <div className="logo">
          <img src={Logo} />
        </div>

        {/* LINKS */}
        <div className="links">
          <a className="nav-links-font">Air Jordan</a>
          <a className="nav-links-font">Yeezy</a>
          <a className="nav-links-font">Off White</a>
          <a className="nav-links-font">Sacai</a>
          <a className="nav-links-font">Dunks</a>
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
            <BsFillPersonFill />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
