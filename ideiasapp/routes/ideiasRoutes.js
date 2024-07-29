const express = require("express");
const router = express.Router();
const ideiaController = require("../controllers/ideiaController");

// import check auth middleware
const checkAuth = require("../helpers/auth").checkAuth;

router.get("/add", checkAuth, ideiaController.createideia);
router.post("/add", checkAuth, ideiaController.createideiaSave);
router.post("/remove", checkAuth, ideiaController.removeideia);
router.get("/edit/:id", checkAuth, ideiaController.updateideia);
router.post("/edit", checkAuth, ideiaController.updateideiaPost);
router.get("/dashboard", checkAuth, ideiaController.dashboard);
router.get("/", ideiaController.showideias);

module.exports = router;
