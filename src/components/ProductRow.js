import React from "react"
import "./css/ProductRow.css"
import ShoeImage from "../images/shoe.webp"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 5, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

function ProductRow({ boxes, title }) {
  const dataArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="container ">
      {title && <h3 className="row-heading">{title}</h3>}
      <motion.div
        className="product-row"
        variants={container}
        initial="hidden"
        animate="visible"
        // style={{ gridTemplateColumns: `repeat(${boxes}, 1fr)` }}
      >
        {dataArray.map(item => {
          return <ProductBox />
        })}
      </motion.div>
    </div>
  )
}

export default ProductRow

const ProductBox = data => {
  return (
    <>
      <motion.div className="product-box" variants={item}>
        <img className="product-box-image" src={ShoeImage} />
        <Link className="product-box-name" to="/product/shoe">
          Nike Dunk Low Georgetown
        </Link>
        <h3 className="product-box-price">$220</h3>
      </motion.div>
    </>
  )
}
