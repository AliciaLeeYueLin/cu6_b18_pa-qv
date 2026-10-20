/*
    INSTRUCTION: setup the routes for the employer entity according to the following requirements:
    - `GET /employers`: List all employers
    - `GET /employers/:id`: Get a specific employer by its id
    - `POST /employers`: Add a new employer
    - `PUT /employers/:id`: Update an employer
    - `DELETE /employers/:id`: Delete an employer
*/

const express = require("express")
const router = express.Router()
const employerController = require("../controllers/employer")

router.use(express.json()) 

router.post('/', employerController.addNewEmployer)
router.get('/', employerController.getAllEmployer)
router.get('/:id', employerController.getEmployerById)
router.put('/:id', employerController.updateEmployer)
router.delete('/:id', employerController.deleteEmployer)

module.exports = router
