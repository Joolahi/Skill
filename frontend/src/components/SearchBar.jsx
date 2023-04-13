import React from "react";
import { debounce } from "lodash";
import DataService from "../../src/services/service";

export default function SearchBar({ setAllSkills }) {
  function searchSkill(e) {
    console.log(e.target.value);
    if (e.target.value === "") {
      DataService.getAllSkills().then((response) => {
        setAllSkills(response.data);
      });
    }
    DataService.getSkillsByName(e.target.value).then((response) => {
      setAllSkills(response.data);
    });
  }

  const debouncedSearch = debounce(searchSkill, 500);

  return (
    <input
      className="textBar"
      type="text"
      placeholder="Search skill..."
      onChange={(e) => {
        debouncedSearch(e);
      }}
    />
  );
}
