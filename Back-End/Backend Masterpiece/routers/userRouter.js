const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();
const authMiddleware = require('../controller/Authentication ')


router.route("/signup").post(userController.signupUser);
router.route("/login").post(userController.loginUser);
router.route("/addpatients").post(userController.AddPatient);
// router.route('/patientProfile').get(authMiddleware, userController.getPatientProfile);
router.route('/patientProfile/:IDNumber').get(userController.getPatientProfileById);
router.route('/allPatients').get (userController.getallPatients);
// router.route('/getpatientprofile').get( userController.getpatientprofile);
router.route("/labresult").post(userController.labResult);
router.route('/alllabresult').get (userController.getalllabresult);
router.route("/Surgery/:IDNumber").post(userController.SurgeryPost);
router.route('/getallSurgery/:IDNumber').get(userController.getallSurgery);
router.route('/getallSurgery').get(userController.getallSurgery);
router.route('/getpatientprofile').get (userController.patientProfileinfo);



module.exports = router;