import React, { useState } from "react";
import DataService from "../services/service";
import "../components/softskills.css";
import Modal from "react-modal";
import SoftSkillsContainer from "./softSkillContainer";
import ModalSoftSkill from "./softSkillModal";

export default function SoftSkills() {
  const [softSkillsModal, setSoftSkillsModal] = useState(false);
  const [visibleSkill, setVisibleSkill] = useState();

  const handleLogout = () => {
    DataService.logOut();
    window.location.href = "/login";
  };
  const handleHardSkills = () => {
    window.location.href = "/dashboard";
  };

  function setSoftSkill(Skill) {
    setVisibleSkill();
    setSoftSkillsModal(true);
    DataService.getSoftSkillById(Skill).then((response) => {
      setVisibleSkill(response.data);
    });
  }
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

  return (
    <div className="softSkillsView">
      <img
        src={require("../img/SC(logo).png")}
        alt="logo"
        className="App-logo"
      />
      <div className="App_header">
        <div className="leftHeader"></div>
        <h2 className="headline">Soft Skills</h2>
        <div className="rightHeader">
          <button className="Skillbtn" onClick={handleHardSkills}>
            Hard Skills
          </button>
          <button>Submit</button>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <SoftSkillsContainer setSoftSkill={(Skill) => setSoftSkill(Skill)} />
      <Modal
        style={customStyles}
        isOpen={softSkillsModal}
        onRequestClose={() => setSoftSkillsModal(false)}
        shouldCloseOnOverlayClick={true}
        appElement={document.getElementsByClassName("App")}
      >
        <div
          className="modalExitButton"
          onClick={() => setSoftSkillsModal(false)}
        >
          X
        </div>
        <ModalSoftSkill skill={visibleSkill} />
      </Modal>
    </div>
  );
}
