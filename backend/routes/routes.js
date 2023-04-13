var express = require("express");
var router = express.Router();
const allData = require("../FF.json");
const skills = require("../app/controllers/skill.controller.js");

router.get("/", (req, res) => {
  res.send("Hello, World!");
});

router.get("/skills", skills.findAll);

router.get("/skills/:id", skills.findOne);

router.get("/json/skills", (req, res) => {
  // select Id and Skill
  const skills = allData.map((skill) => {
    return { Id: skill.Id, Skill: skill.Skill };
  });
  res.json(skills);
});

router.get("/json/skills/:id", (req, res) => {
  const id = req.params.id;
  const skill = allData.find((skill) => skill.Id === id);
  res.json(skill);
});

module.exports = router;
