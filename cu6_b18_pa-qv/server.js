const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5123;

app.use(express.json());

const jobRoutes = require("./routes/job")
const employerRoutes = require("./routes/employer")
const applicationRoutes = require("./routes/application")

app.use(express.json());
mongoose
    .connect("mongodb://localhost:27017/job")
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch(err => console.log(err))

const corsHandler = cors({
    origin: "*", 
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
    preflightContinue: true
})

app.use(corsHandler)
app.use('/job', jobRoutes) 
app.use('/employer', employerRoutes) 
app.use('/application', applicationRoutes) 

app.get("/", (req, res) => {
    res.send("Good luck with the exam!");
});

// Server listening
app.listen(port, () => console.log(`Server started on port ${port}`));
