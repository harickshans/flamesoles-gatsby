import React from "react"
import Layout from "../../components/Layout"
import ProductRow from "../../components/ProductRow"
import "./productPage.css"
import shoeImage from "../../images/shoe.webp"

function ProductPage() {
  return (
    <Layout>
      <div className="container">
        <div className="product-showcase">
          <div className="product-image-details">
            <h2>Jordan 1 High OG SP Fragment x Travis Scott</h2>
            <img src={shoeImage} />
          </div>
          <div className="product-price-details"></div>
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
