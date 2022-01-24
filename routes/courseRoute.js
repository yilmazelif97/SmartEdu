const express = require("express");

const courseController = require("../controllers/courseController");

const router = express.Router();


router.route('/add').post(courseController.createCourse);
router.route('/').get(courseController.getAllCourse);


module.exports = router;