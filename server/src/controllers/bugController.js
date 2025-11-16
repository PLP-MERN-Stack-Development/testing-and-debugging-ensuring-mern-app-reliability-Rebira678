const Bug = require("../models/Bug");

exports.createBug = async (req, res) => {
  try {
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBug = async (req, res) => {
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(bug);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteBug = async (req, res) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.json({ message: "Bug deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
