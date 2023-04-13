import React, { useEffect, useState } from "react";
import DataService from "../services/service";
import "./Categories.css";

export default function Categories({ setAllSkills }) {
  const [categories, setCategories] = useState([]);
  const [clickedCategory, setClickedCategory] = useState("All");

  function loadCategories() {
    DataService.getCategories().then((response) => {
      setCategories(response.data);
    });
  }

  function handleClick(e) {
    DataService.getSkillsByCategory(e.target.innerText).then((response) => {
      setClickedCategory(e.target.textContent);
      setAllSkills(response.data);
    });
  }

  function handleClickAll() {
    DataService.getAllSkills().then((response) => {
      setClickedCategory("All");
      setAllSkills(response.data);
    });
  }

  useEffect(() => {
    loadCategories();
  });

  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="category">
        <h2
          className={clickedCategory === "All" ? "clicked" : ""}
          onClick={handleClickAll}
        >
          All
        </h2>
      </div>
      {categories.map((category) => (
        <div className="category" key={category}>
          <h2
            className={clickedCategory === category ? "clicked" : ""}
            onClick={handleClick}
          >
            {category}
          </h2>
        </div>
      ))}
    </div>
  );
}
