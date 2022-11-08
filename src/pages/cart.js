import React from "react"
import Layout from "../components/Layout"
import "../style/cart.css"
import shoeImage from "../images/shoe.webp"
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineHeart,
  AiOutlineClose,
} from "react-icons/ai"
import { Link } from "gatsby"

function cart() {
  return (
    <Layout>
      <div className="cart-container container">
        <div class="shopping-cart">
          <div class="title">Shopping Bag</div>

          <div class="item">
            <div class="buttons">
              <span class="delete-cartbrn">
                <AiOutlineClose />
              </span>
              <span class="like-cartbrn">
                <AiOutlineHeart />
              </span>
            </div>

            <div class="image">
              <img src={shoeImage} alt="" />
            </div>

            <div class="description">
              <span>Common Projects</span>
              <span>Bball High</span>
              <span>White</span>
            </div>

            <div class="quantity">
              <button class="plus-cartbrn" type="button" name="button">
                <AiOutlinePlus />
                {/* <img src="plus.svg" alt="" /> */}
              </button>
              <input type="text" name="name" value="1" />
              <button class="minus-cartbrn" type="button" name="button">
                <AiOutlineMinus />
              </button>
            </div>

            <div class="total-price">$549</div>
          </div>

          <div class="item">
            <div class="buttons">
              <span class="delete-cartbrn">
                <AiOutlineClose />
              </span>
              <span class="like-cartbrn">
                <AiOutlineHeart />
              </span>
            </div>

            <div class="image">
              <img src={shoeImage} alt="" />
            </div>

            <div class="description">
              <span>Maison Margiela</span>
              <span>Future Sneakers</span>
              <span>White</span>
            </div>

            <div class="quantity">
              <button class="plus-cartbrn" type="button" name="button">
                <AiOutlinePlus />
              </button>
              <input type="text" name="name" value="1" />
              <button class="minus-cartbrn" type="button" name="button">
                <AiOutlineMinus />
              </button>
            </div>

            <div class="total-price">$870</div>
          </div>

          <div class="item">
            <div class="buttons">
              <span class="delete-cartbrn">
                <AiOutlineClose />
              </span>
              <span class="like-cartbrn">
                <AiOutlineHeart />
              </span>
            </div>

            <div class="image">
              <img src={shoeImage} alt="" />
            </div>

            <div class="description">
              <span>Our Legacy</span>
              <span>Brushed Scarf</span>
              <span>Brown</span>
            </div>

            <div class="quantity">
              <button class="plus-cartbrn" type="button" name="button">
                <AiOutlinePlus />
              </button>
              <input type="text" name="name" value="1" />
              <button class="minus-cartbrn" type="button" name="button">
                <AiOutlineMinus />
              </button>
            </div>

            <div class="total-price">$349</div>
          </div>
        </div>
        <div className="total-cart">
          <div class="title">Order Summury</div>

          <div className="sumury-details">
            <div>
              <h3 className="summuy-fade-text">Total</h3>
              <h3>$350</h3>
            </div>
            <div>
              <h3 className="summuy-fade-text">Tax</h3>
              <h3>$30</h3>
            </div>
            <div>
              <h3 className="summuy-fade-text">Shipping</h3>
              <h3>$60</h3>
            </div>
            <div style={{ marginTop: "30px" }}>
              <h3 className="summuy-fade-text">TOTAL AMOUT</h3>
              <h3 className="summuy-big-text">$440</h3>
            </div>
          </div>
          <div className="checkout-btn-container">
            <button className="checkout-btn">
              <Link to="/checkout">CHECK OUT</Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default cart
