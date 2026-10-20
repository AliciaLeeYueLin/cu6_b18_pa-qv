/*
    INSTRUCTION: This file defines the routes for managing job applications.
    - `GET /applications?job=xxx`: Get all applications for a specific job
    - `POST /applications`: Create a new application for a job
*/

const express = require("express")
const router = express.Router()
const applicationController = require("../controllers/application")

router.use(express.json()) 

router.post('/', applicationController.addNewApplication)
router.get('/', applicationController.getAllApplication)
router.get('/:id', applicationController.getApplicationById)
router.put('/:id', applicationController.updateApplication)
router.delete('/:id', applicationController.deleteApplication)

module.exports = router
