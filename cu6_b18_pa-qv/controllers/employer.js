/*
    INSTRUCTION: setup the employer controller with the following functions:
    - getEmployers - Retrieve all employers
    - getEmployer - Retrieve a specific employer
    - addNewEmployer - Add a new employer
    - updateEmployer - Update an employer
    - deleteEmployer - Delete an employer
*/


const Employer = require("../models/employer");

exports.getAllEmployer = async (req, res) => {
    try {
        const getEmployers = await Employer.find({})
        res.status(200).json(getEmployers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getEmployerById = async (req, res) => {
    try {
        const getEmployerById = await Employer.find({ _id: req.params.id })
        res.status(200).json(getEmployerById);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addNewEmployer = async (req, res) => {
    try {
        const newEmployer = await Employer.create(req.body);
        res.status(201).json({ newEmployer });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.updateEmployer = async (req, res) => {
    try {
        const changeEmployer = await Employer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        res.status(200).json(changeEmployer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.deleteEmployer = async (req, res) => {
    try {
        const deleteApp = await Employer.findByIdAndDelete(req.params.id);
        res.status(200).json({ deleteApp });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
