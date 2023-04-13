import React from "react";
import LoadingRing from "./LoadingRing";
import "./ModalSkill.css";

export default function modalSkill({ skill }) {
  return (
    <div className="modalSkill">
      {skill ? (
        <>
          <h2>{skill.Skill}</h2>
          <h4>Category</h4>
          <p>{skill.Category}</p>
          <h4>Overall Description</h4>
          <p>{skill["Overall description"]}</p>

          {[1, 2, 3, 4, 6, 7].map(
            (level) =>
              skill[`Level ${level} description`] && (
                <>
                  <h4>Level {level} Description</h4>
                  <p>{skill[`Level ${level} description`]}</p>
                </>
              )
          )}
        </>
      ) : (
        <LoadingRing />
      )}
    </div>
  );
}
