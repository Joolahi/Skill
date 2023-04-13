import React, { useEffect, useState } from "react";
import DataService from "../services/service";
import "./SkillContainer.css";
import SoftSkillSelect from "./softSkillSelect";

export default function SoftSkillsContainer({ setSoftSkill }) {
  const savedSkills = JSON.parse(localStorage.getItem("softSkills"));
  const [allSoftSkills, setSoftAllSkills] = useState([]);
  const [selectedSkillLevels, setSelectedSkillLevels] = useState(
    savedSkills || {
      1: [],
      2: [],
      3: [],
      4: [],
    }
  );

  function loadSkills() {
    DataService.getSoftSkills().then((response) => {
      setSoftAllSkills(response.data);
    });
  }

  useEffect(() => {
    loadSkills();
  }, []);

  useEffect(() => {
    localStorage.setItem("softSkills", JSON.stringify(selectedSkillLevels));
  }, [selectedSkillLevels]);

  return (
    <div className="skillContainer">
      {allSoftSkills.map((skill) => (
        <SoftSkillSelect
          key={skill.Id}
          id={skill.Id}
          info={skill.Skill}
          selectedSkillLevels={selectedSkillLevels}
          setSelectedSkillLevels={(skillLevels) =>
            setSelectedSkillLevels(skillLevels)
          }
          setSoftSkill={(skill) => setSoftSkill(skill)}
        />
      ))}
    </div>
  );
}
