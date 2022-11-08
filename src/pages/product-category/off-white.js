import React from "react"
import Layout from "../../components/Layout"
import ProductRow from "../../components/ProductRow"
import "./category.css"

function offWhite() {
  return (
    <Layout>
      <div className="category-header-container">
        <h1 className="container">OFF WHITE</h1>
      </div>

      <div className="container category-layout ">
        <div className="filter-container">
          {/* Price */}
          <div className="filters">
            <h3>Price</h3>
            <input type="range" min="1" max="100" class="slider" id="myRange" />
          </div>
          <div className="filters">
            <h3>Sizes</h3>
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
        </div>
        <ProductRow boxes={4} />
      </div>
    </Layout>
  )
}

export default offWhite
