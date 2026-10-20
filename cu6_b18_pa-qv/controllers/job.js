/*
    INSTRUCTION: setup the job controller with the following functions:
    - getJobs - Retrieve all jobs (use `populate()` to get Job details)
    - getJob - Retrieve a specific job (use `populate()` to get Job details)
    - addNewJob - Add a new job
    - updateJob - Update a job
    - deleteJob - Delete a job
*/

const Job = require("../models/job");

exports.getAllJob = async (req, res) => {
    try {
        const {category, sortBy, sort = 1 } = req.query;

         const filter = {};

    if (category) {
        filter.category = category;
    }

     const sortOptions = {};

    if (sortBy && sort) {
        if (sortBy == "title" ) {
            sortOptions.title = Number(sort);
        }
        if ((sortBy == "title") && (sort == -1) ) {
            sortOptions.title = Number(sort);
        }
        if (sortBy == "postedDate" ) {
            sortOptions.postedDate = Number(sort);
        }
        if ((sortBy == "postedDate") && (sort == -1)) {
            sortOptions.postedDate = Number(sort);
        }
    }

        const getJobs = await Job.find({}).populate("employer").find(filter).sort(sortOptions);
        res.status(200).json(getJobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getJobById = async (req, res) => {
    try {
        const getJobById = await Job.find({ _id: req.params.id }).populate("employer");
        res.status(200).json(getJobById);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addNewJob = async (req, res) => {
    try {
        const newJob = await Job.create(req.body);
        res.status(201).json({ newJob });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.updateJob = async (req, res) => {
    try {
        const changeJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate("employer");

        res.status(200).json(changeJob);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.deleteJob = async (req, res) => {
    try {
        const deleteApp = await Job.findByIdAndDelete(req.params.id);
        res.status(200).json({ deleteApp });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
