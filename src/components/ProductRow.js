import React from "react"
import "./css/ProductRow.css"
import ShoeImage from "../images/shoe.webp"
import { Link } from "gatsby"

function ProductRow({ boxes, title }) {
  return (
    <div className="container product-row">
      {title && <h3 className="row-heading">{title}</h3>}
      <div
        className="product-row"
        style={{ gridTemplateColumns: `repeat(${boxes}, 1fr)` }}
      >
        <div className="product-box">
          <img className="product-box-image" src={ShoeImage} />
          <Link className="product-box-name" to="/product/shoe">
            Nike Dunk Low Georgetown
          </Link>
          <h3 className="product-box-price">$220</h3>
        </div>
        <div className="product-box">
          <img className="product-box-image" src={ShoeImage} />
          <Link className="product-box-name" to="/product/shoe">
            Nike Dunk Low Georgetown
          </Link>
          <h3 className="product-box-price">$220</h3>
        </div>
        <div className="product-box">
          <img className="product-box-image" src={ShoeImage} />
          <Link className="product-box-name" to="/product/shoe">
            Nike Dunk Low Georgetown
          </Link>
          <h3 className="product-box-price">$220</h3>
        </div>
        <div className="product-box">
          <img className="product-box-image" src={ShoeImage} />
          <Link className="product-box-name" to="/product/shoe">
            Nike Dunk Low Georgetown
          </Link>
          <h3 className="product-box-price">$220</h3>
        </div>
        <div className="product-box">
          <img className="product-box-image" src={ShoeImage} />
          <Link className="product-box-name" to="/product/shoe">
            Nike Dunk Low Georgetown
          </Link>
          <h3 className="product-box-price">$220</h3>
        </div>
        <div className="product-box">
          <img className="product-box-image" src={ShoeImage} />
          <Link className="product-box-name" to="/product/shoe">
            Nike Dunk Low Georgetown
          </Link>
          <h3 className="product-box-price">$220</h3>
        </div>
      </div>
    </div>
  )
}

export default ProductRow
