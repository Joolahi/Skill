import React, { useState, useEffect } from "react";
import SkillSelect from "./SkillSelect";
import SearchBar from "./SearchBar";
import "./SkillContainer.css";

export default function SkillContainer({
  setSkillModal,
  allSkills,
  setAllSkills,
}) {
  const savedSkills = JSON.parse(localStorage.getItem("hardSkills"));
  const [selectedSkillLevels, setSelectedSkillLevels] = useState(
    savedSkills || {
      1: [],
      2: [],
      3: [],
      4: [],
    }
  );

  useEffect(() => {
    localStorage.setItem("hardSkills", JSON.stringify(selectedSkillLevels));
  }, [selectedSkillLevels]);

  return (
    <div className="skillContainer">
      <SearchBar setAllSkills={(skills) => setAllSkills(skills)} />
      {allSkills.map((skill) => (
        <SkillSelect
          key={skill.Id}
          id={skill.Id}
          info={skill.Skill}
          selectedSkillLevels={selectedSkillLevels}
          setSelectedSkillLevels={(skillLevels) =>
            setSelectedSkillLevels(skillLevels)
          }
          setSkillModal={(skill) => setSkillModal(skill)}
        />
      ))}
    </div>
  );
}
