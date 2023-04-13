module.exports = (mongoose) => {
  const hardSkills = mongoose.model(
    "hardSkills",
    mongoose.Schema({
      id: Number,
      level1: Number,
      level2: Number,
      level3: Number,
      level4: Number,
      level5: Number,
      level6: Number,
      level7: Number,
      Code: String,
      Skill: String,
      Category: String,
      Subcategory: String,
      "Overall description": String,
      "Guidance notes": String,
      "Level 1 description": String,
      "Level 2 description": String,
      "Level 3 description": String,
      "Level 4 description": String,
      "Level 5 description": String,
      "Level 6 description": String,
      "Level 7 description": String,
    })
  );
  return hardSkills;
};
