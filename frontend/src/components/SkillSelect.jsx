import React, { useEffect, useState } from "react";
import "./SkillSelect.css";

export default function SkillSelector({
  info,
  id,
  setSkillModal,
  selectedSkillLevels,
  setSelectedSkillLevels,
}) {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const labels = ["Most important", "Important", "Valuable", "Future"];

  useEffect(() => {
    if (selectedSkillLevels[1].includes(id)) {
      setSelectedCheckbox("1");
    } else if (selectedSkillLevels[2].includes(id)) {
      setSelectedCheckbox("2");
    } else if (selectedSkillLevels[3].includes(id)) {
      setSelectedCheckbox("3");
    } else if (selectedSkillLevels[4].includes(id)) {
      setSelectedCheckbox("4");
    }
  }, []);

  const handleCheckboxSelect = (event) => {
    const { value } = event.target;

    // if the checkbox is already selected, deselect it
    // eslint-disable-next-line
    if (value == selectedCheckbox) {
      setSelectedCheckbox(null);
      setSelectedSkillLevels({
        ...selectedSkillLevels,
        [value]: selectedSkillLevels[value].filter((skill) => skill !== id),
      });
    }

    // if a different checkbox is selected, deselect the old one and select the new one
    else if (selectedCheckbox !== null) {
      setSelectedCheckbox(value);
      setSelectedSkillLevels({
        ...selectedSkillLevels,
        [selectedCheckbox]: selectedSkillLevels[selectedCheckbox].filter(
          (skill) => skill !== id
        ),
        [value]: [...selectedSkillLevels[value], id],
      });
    }

    // if no checkbox is selected, select the new one
    else {
      setSelectedCheckbox(value);
      setSelectedSkillLevels({
        ...selectedSkillLevels,
        [value]: [...selectedSkillLevels[value], id],
      });
    }
  };

  return (
    <div className="SkillSelector">
      <div className="info-text" onClick={() => setSkillModal(id)}>
        <p>{info}</p>
      </div>
      <div className="checkboxContainer">
        {[1, 2, 3, 4].map((level) => (
          <label key={level}>
            {labels[level - 1]}
            <input
              type="checkbox"
              value={level}
              // eslint-disable-next-line
              checked={selectedCheckbox == level}
              onChange={handleCheckboxSelect}
              disabled={
                selectedSkillLevels[level].length >= 5 &&
                // eslint-disable-next-line
                selectedCheckbox != level
              }
            />
          </label>
        ))}
      </div>
    </div>
  );
}
