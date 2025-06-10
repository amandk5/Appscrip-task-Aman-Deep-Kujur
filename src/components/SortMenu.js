"use client";
import { useState } from "react";
import "./SortMenu.css";

export default function SortMenu({ customOptions, customIcon }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(customIcon || "RECOMMENDED");

  const options = customOptions || [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  const toggleMenu = () => setOpen(!open);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="sort-menu">
      <div className="menu-label" onClick={toggleMenu}>
        {selected} {!customIcon && <span className="arrow">⌄</span>}
      </div>

      {open && (
        <div className="dropdown">
          {options.map((option) => (
            <div
              key={option}
              className={`dropdown-item ${
                selected === option ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {selected === option && <span className="checkmark">✔</span>}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
