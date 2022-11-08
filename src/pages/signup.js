import React from "react"
import "./signup.css"
import centerImage2 from "../images/center2.jpg"
import { Link } from "gatsby"
import Navigation from "../components/Navigation"
import { motion, AnimatePresence } from "framer-motion"

function signup() {
  return (
    <>
      <Navigation />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          className="container"
          style={{
            display: "flex",
            height: "calc(100vh - 65px)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="center-container ">
            <img className="center-container-image" src={centerImage2} />
            <div className="form-container">
              <form action="#">
                <h1>Sign in</h1>

                {/* <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
              <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
              <i class="fab fa-linkedin-in"></i>
              </a>
            </div> */}
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>

                <Link to="/register" style={{ marginTop: "auto" }}>
                  Create a account
                </Link>
              </form>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default signup
