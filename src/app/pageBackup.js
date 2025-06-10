"use client";
import FilterSection from "@/components/FilterSection";
import ProductCard from "@/components/ProductCard";
import SortMenu from "@/components/SortMenu";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./page.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      {/* description  */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="page_description" style={{}}>
          <h1 className="page_description_heading">Discover Our Products</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      {/* filter btn toggle and recommended menu */}
      <div className="hide_filter_div_and_recommended_menu_div">
        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="product_count_desktop">
            {products?.length || "N/A"} Products
          </div>
          <button onClick={() => setShowFilter(!showFilter)}>
            {showFilter ? "Hide" : "Show"} Filter
          </button>
        </div>
        <div>
          <SortMenu />
        </div>
      </div>
      {/* main  */}
      <div className="filter_and_product_div">
        {/* left side */}
        <div className={`${showFilter ? "filter_div" : "filter_div_hidden"}`}>
          <FilterSection isMenuOpen={true} filterTitle={"IDEAL FOR"} />
          <hr />
          <FilterSection isMenuOpen={false} filterTitle={"OCCASION"} />
          <hr />
          <FilterSection isMenuOpen={false} filterTitle={"WORK"} />
          <hr />
          <FilterSection isMenuOpen={false} filterTitle={"FABRIC"} />
          <hr />
          <FilterSection isMenuOpen={false} filterTitle={"SEGMENT"} />
          <hr />
          <FilterSection isMenuOpen={false} filterTitle={"SUITABLE FOR"} />
          <hr />
          <FilterSection isMenuOpen={false} filterTitle={"RAW MATERIALS"} />
          <hr />
          <FilterSection isMenuOpen={false} filterTitle={"PATTERN"} />
        </div>
        {/* right side  */}
        <div
          className={`${
            showFilter ? "products_div" : "products_div_full_width"
          }`}
        >
          {products?.map((el) => (
            <React.Fragment key={el?.id}>
              <ProductCard imageSrc={el?.image} title={el?.title} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
