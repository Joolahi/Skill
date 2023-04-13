import React from "react";
import "./ModalSkill.css";
import LoadingRing from "./LoadingRing";

export default function ModalSoftSkill({ skill }) {
    return (
        <div className="modalSkill">
            {skill ? (
                <>
                    <h2>{skill.Skill}</h2>
                    <h4>Overall Description</h4>
                    <p>{skill.Description}</p>
                </>
            ) : (
                <LoadingRing />
            )}
        </div>
    );
}