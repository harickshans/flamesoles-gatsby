import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import ProductRow from "../components/ProductRow"
import "./index.css"

function index() {
  return (
    <Layout>
      <Header />
      <ProductRow boxes="18" title="Trending Sneakers" />
    </Layout>
  )
}

export default index
