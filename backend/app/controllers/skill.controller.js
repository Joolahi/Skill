const db = require("../models");
const hardSkills = db.hardSkills;

exports.findAll = (req, res) => {
  hardSkills
    .find({}, "Id Skill")
    .sort({ Id: 1 })
    .collation({ locale: "en_US", numericOrdering: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  hardSkills
    .find({ Id: id })
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found skill with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving skill with id=" + id });
    });
};
