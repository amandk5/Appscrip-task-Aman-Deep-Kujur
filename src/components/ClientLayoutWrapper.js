"use client";
import { useState } from "react";
import SortMenu from "@/components/SortMenu";
import FilterSection from "@/components/FilterSection";
import ProductCard from "@/components/ProductCard";
import '../app/page.css'

export default function ClientLayoutWrapper({ products }) {
  const [showFilter, setShowFilter] = useState(true);

  return (
    <>
      {/* Filter Toggle + SortMenu */}
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
            {products.length} Products
          </div>
          <button onClick={() => setShowFilter((prev) => !prev)}>
            {showFilter ? "Hide" : "Show"} Filter
          </button>
        </div>
        <SortMenu />
      </div>

      {/* Filter + Products Layout */}
      <div className="filter_and_product_div">
        {/* Left Panel */}
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

        {/* Product Grid */}
        <div
          className={`${
            showFilter ? "products_div" : "products_div_full_width"
          }`}
        >
          {products.map((el) => (
            <ProductCard key={el?.id} imageSrc={el?.image} title={el?.title} />
          ))}
        </div>
      </div>
    </>
  );
}
