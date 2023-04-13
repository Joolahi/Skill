import ModalSkill from "./ModalSkill";
import DataService from "../services/service";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import SkillContainer from "./SkillContainer";
import "./Dashboard.css";
import Categories from "./Categories";

export default function Dashboard() {
  const [allSkills, setAllSkills] = useState([]);
  const [modal, setModal] = useState(false);
  const [visibleSkill, setVisibleSkill] = useState();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(13, 0, 76, 1)",
      border: "solid 1px #e2066f",
      borderRadius: "10px",
      color: "white",
      width: "700px",
      minHeight: "500px",
      maxHeight: "800px",
      overFlowY: "auto",
    },
    overlay: {
      backgroundColor: "rgba(13, 0, 76, 0.4)",
    },
  };

  function loadSkills() {
    DataService.getAllSkills().then((response) => {
      setAllSkills(response.data);
    });
  }

  useEffect(() => {
    loadSkills();
  }, []);

  function setSkillModal(skill) {
    setVisibleSkill();
    setModal(true);
    DataService.getSkillById(skill).then((response) => {
      setVisibleSkill(response.data);
    });
  }

  function handleSubmit() {
    console.log("Define this funktion on Dashboard.jsx");
  }

  const handleLogout = () => {
    DataService.logOut();
    window.location.href = "/login";
  };

  const handleSoftSkills = () => {
    window.location.href = "/softskills";
  };

  useEffect(() => {
    DataService.authenticate().catch(() => {
      window.location.href = "/login";
    });
  }, []);

  return (
    <div className="App">
      <img
        className="App-logo"
        src={require("../img/SC(logo).png")}
        alt="logo"
      />
      <div className="App_header">
        <div className="leftHeader">
          <Categories setAllSkills={(skills) => setAllSkills(skills)} />
        </div>

        <h2 className="headline">Skill Selector</h2>
        <div className="rightHeader">
          <button className="Skillbtn" onClick={handleSoftSkills}>
            Soft Skills
          </button>
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <SkillContainer
        setSkillModal={(skill) => setSkillModal(skill)}
        allSkills={allSkills}
        setAllSkills={(skills) => setAllSkills(skills)}
      />

      <Modal
        style={customStyles}
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        shouldCloseOnOverlayClick={true}
        appElement={document.getElementsByClassName("App")}
      >
        <div className="modalExitButton" onClick={() => setModal(false)}>
          X
        </div>
        <ModalSkill skill={visibleSkill} />
      </Modal>
    </div>
  );
}
