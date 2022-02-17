const express = require("express");

const courseController = require("../controllers/courseController");

const roleMiddleware = require('../middlewares/roleMiddleware')

const router = express.Router();


router.route('/add').post(roleMiddleware(["teacher","admin"]), courseController.createCourse);  //teacher ve admin mwdeki roles ün içini dolduruyor
router.route('/').get(courseController.getAllCourse);

router.route('/:slug').get(courseController.getSingleCourse)


module.exports = router;