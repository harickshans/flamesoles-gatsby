import React from "react"
import { useState, useEffect } from "react"
import "./css/Navigation.css"
import Logo from "../images/logo.png"
import { BsCart3, BsFillPersonFill } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"
import { HiMenu } from "react-icons/hi"
import { MdOutlineClose } from "react-icons/md"
import { Link } from "gatsby"

function Navigation() {
  const [mobileNavOpen, setMobileNavOpened] = useState(false)

  const mobileNavToggle = () => {
    setMobileNavOpened(!mobileNavOpen)
    if (mobileNavOpen) {
      document.body.classList.remove("lock-scroll")
    } else {
      document.body.classList.add("lock-scroll")
    }
  }
  var prevScrollpos = 50
  useEffect(() => {
    document.body.classList.remove("lock-scroll")
    document.querySelector("nav").style.top = "0"
    window.addEventListener("scroll", () => {
      var currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.top = "0"
      } else {
        document.querySelector("nav").style.top = "-65px"
      }
      prevScrollpos = currentScrollPos
    })
  }, [])

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
            <Link to="/cart">
              <BsCart3 />
            </Link>
          </button>
          <button className="icon-buttons">
            <Link to="/signup">
              <BsFillPersonFill />
            </Link>
          </button>
        </div>

        {/* Mobile Nav Icon */}
        <div className="mobile-icons">
          <button className="icon-buttons" onClick={mobileNavToggle}>
            {mobileNavOpen ? <MdOutlineClose /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Navigation Container */}
        <div
          className="mobile-nav-container"
          style={mobileNavOpen ? { display: "flex" } : { display: "none" }}
        >
          <div className="search-bar-mobile">
            <input className="search" placeholder="Search..." />
          </div>

          <div className="links-mobile">
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

          <div className="icons-mobile">
            <button className="icon-buttons">
              <Link to="/cart">
                <BsCart3 />
              </Link>
            </button>
            <button className="icon-buttons">
              <Link to="/signup">
                <BsFillPersonFill />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
