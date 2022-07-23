import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import ProductRow from "../components/ProductRow"
import "./index.css"

function index() {
  return (
    <Layout>
      <Header />
      <ProductRow boxes="6" title="Trending Sneakers" />
      <ProductRow boxes="6" />
      <ProductRow boxes="6" />
    </Layout>
  )
}

export default index
