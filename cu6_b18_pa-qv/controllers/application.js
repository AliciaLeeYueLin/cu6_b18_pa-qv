/*
    INSTRUCTION: setup the controller functions to handle job applications
    - getApplicationsByJob - Retrieve all applications for a specific job (use `populate()` to get job details)
    - createApplication - Create a new application for a job (ensure no duplicate applications for the same email and job)
*/

const Application = require("../models/application");

exports.getAllApplication = async (req, res) => {
    try {
        const getApplications = await Application.find({}).populate("job");
        res.status(200).json(getApplications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getApplicationById = async (req, res) => {
    try {
        const getApplicationById = await Application.find({ _id: req.params.id }).populate("job");
        res.status(200).json(getApplicationById);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addNewApplication = async (req, res) => {
    try {

       const existingApplication = await Application.findOne({
            job: req.body.job,
            email: req.body.email
        });

        
        if (existingApplication) {
            return res.status(409).json({
                message: "You have already submitted a application to this job application. You cannot apply again.",
            });
        }

        const newApplication = await Application.create(req.body);
        res.status(201).json({ newApplication });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateApplication = async (req, res) => {
    try {
        const changeApplication = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate("job");

        res.status(200).json(changeApplication);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.deleteApplication = async (req, res) => {
    try {
        const deleteApp = await Application.findByIdAndDelete(req.params.id);
        res.status(200).json({ deleteApp });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
