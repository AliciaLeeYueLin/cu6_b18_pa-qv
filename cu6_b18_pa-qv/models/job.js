/*
    INSTRUCTION: setup the job schema according to the following requirements:
    - title: (String, required)
    - employer: (ObjectId, ref: 'Employer', required)
    - postedDate: (Date, required)
    - location: (String, required)
    - category: (String)
    - description: (String)
*/

const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        employer: {type: mongoose.Schema.Types.ObjectId, ref: "Employer", required: true },
        postedDate: { type: Date, default:Date.now, required: true },
        location: { type: String, required: false},
        category: { type: String, required: true},
        description: { type: String, required: false}
    },
    { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
