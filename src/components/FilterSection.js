"use client";
import { useState } from "react";
import "./FilterSection.css";

export default function FilterSection({ isMenuOpen, filterTitle }) {
  const [isOpen, setIsOpen] = useState(isMenuOpen);

  return (
    <div className="filter-section">
      <div className="filter-header" onClick={() => setIsOpen(!isOpen)}>
        <strong>{filterTitle}</strong>
        <span className={`arrow ${isOpen ? "open" : "close"}`}>⌃</span>
      </div>

      {isOpen && (
        <div className="filter-content">
          <div className="all">All</div>
          <div className="unselect">Unselect all</div>
          <label>
            <input type="checkbox" /> Men
          </label>
          <label>
            <input type="checkbox" /> Women
          </label>
          <label>
            <input type="checkbox" /> Baby & Kids
          </label>
        </div>
      )}
    </div>
  );
}
