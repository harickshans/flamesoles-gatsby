import React, { useState } from "react"
import Layout from "../../components/Layout"
import ProductRow from "../../components/ProductRow"
import "./productPage.css"
import shoeImage from "../../images/shoe.webp"
import { FiCheckCircle } from "react-icons/fi"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { BsTwitter, BsFacebook, BsLinkedin, BsPinterest } from "react-icons/bs"
import { BiPaperclip } from "react-icons/bi"
import { MdOutline360 } from "react-icons/md"
import Slider from "../../components/Slider"

function ProductPage() {
  const [threesixty, setThreesixty] = useState(false)

  const imageSwitcher = () => {
    setThreesixty(!threesixty)
  }

  return (
    <Layout>
      <div className="container">
        <div className="product-showcase">
          <div className="product-image-details">
            <h2>Jordan 1 High OG SP Fragment x Travis Scott</h2>
            <div className="image-container">
              <Slider
                style={threesixty ? { display: "block" } : { display: "none" }}
              />
              <img src={shoeImage} />
              <div className="image-switcher">
                <input
                  type="checkbox"
                  id="image-switcher"
                  onChange={imageSwitcher}
                />
                <label for="image-switcher">
                  <MdOutline360 />
                </label>
              </div>
            </div>
          </div>
          <div className="product-price-details">
            <h1>$220</h1>
            <div className="size-container">
              <h6>SHOES-SIZE</h6>
              <div className="sized">
                <input type="radio" name="sizes" value="6.5" id="size-1" />
                <label for="size-1">6.5</label>
                <input type="radio" name="sizes" value="7" id="size-2" />
                <label for="size-2">7</label>
                <input type="radio" name="sizes" value="7.5" id="size-3" />
                <label for="size-3">7.5</label>
                <input type="radio" name="sizes" value="8" id="size-4" />
                <label for="size-4">8</label>
                <input type="radio" name="sizes" value="8.5" id="size-5" />
                <label for="size-5">8.5</label>
                <input type="radio" name="sizes" value="9" id="size-6" />
                <label for="size-6">9</label>
                <input type="radio" name="sizes" value="9.5" id="size-7" />
                <label for="size-7">9.5</label>
                <input type="radio" name="sizes" value="10" id="size-8" />
                <label for="size-8">10</label>
                <input type="radio" name="sizes" value="10.5" id="size-9" />
                <label for="size-9">10.5</label>
              </div>
            </div>
            <div className="stock-container">
              <FiCheckCircle /> <span>In Stock</span>
            </div>
            <div className="addToCart-container">
              <div className="counter-container">
                <button id="dec">
                  <AiOutlineMinus />
                </button>
                <input
                  type="number"
                  id="product-count"
                  placeholder="0"
                  min="0"
                  disabled="disabled"
                />

                <button id="inc">
                  <AiOutlinePlus />
                </button>
              </div>
              <button id="addToCard-btn" className="btn-price">
                ADD TO CART
              </button>
            </div>
            <button id="buyNow-btn" className="btn-price">
              BUY NOW
            </button>
            <div className="share-container">
              <h6>SHARE</h6>
              <div className="social-icons">
                <BsTwitter />
                <BsFacebook />
                <BsLinkedin />
                <BsPinterest />
                <BiPaperclip />
              </div>
            </div>
          </div>
        </div>

        <div className="hr"></div>
        <ProductRow boxes="6" title="RELATED PRODUCTS" />
        <div className="hr lm"></div>
        <div className="product-details-container">
          <h3 className="row-heading">Product Details</h3>
          <h4 className="label sm">Product Description</h4>
          <h4 className="data sm">
            The adidas Yeezy Boost 350 V2 MX Oat features a yellow, orange, and
            blue swirl-patterned Primeknit upper with a mesh side stripe and
            yellow heel tab. From there, a semi-translucent Boost midsole and
            pale yellow rope laces complete the design. The adidas Yeezy Boost
            350 V2 MX Oat released in October of 2021 and retailed for $220.
          </h4>

          <h4 className="label sm">
            Style : <span className="data"> GW3773</span>
          </h4>
          <h4 className="label sm">
            Colorway : <span className="data"> MX OAT/MX OAT/MX OAT</span>
          </h4>
        </div>
        <div className="product-infomation-container lm">
          <h2>Information</h2>

          <h3>Shipping</h3>
          <h4>
            We currently offer free shipping worldwide on all orders over $100.
          </h4>
          <div className="sm"></div>
          <h3>Sizing</h3>
          <h4>Fits true to size. Do you need size advice?</h4>
          <div className="sm"></div>
          <h3>Return & exchange</h3>
          <h4>
            If you are not satisfied with your purchase you can return it to us
            within 14 days for an exchange or refund. More info.
          </h4>
          <div className="sm"></div>
          <h3>Assistance</h3>
          <h4>
            Contact us on (+44) 555 88 65, or email us at support@reytheme.com.
          </h4>
          <div className="sm"></div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage
