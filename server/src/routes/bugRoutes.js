const express = require("express");
const router = express.Router();
const controller = require("../controllers/bugController");

router.post("/bugs", controller.createBug);
router.get("/bugs", controller.getBugs);
router.put("/bugs/:id", controller.updateBug);
router.delete("/bugs/:id", controller.deleteBug);

module.exports = router;
