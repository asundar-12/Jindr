const express = require("express")
const router = require("express").Router()
const {v4} = require("uuid")
router.use(express.json())


// POST request for posting a job (http://localhost:3000/jobposter/post-job)
router.post("/post-job", async (req, res) => {
    // req example = {
    //     "jobTitle": "Software Engineer",
    //     "company": "Apple",
    //     "location": "New York",
    //     "jobCategory": "Computer Science",
    //     "employmentType": "Intern",
    //     "jobDescription": "Software Eng Job",
    //     "qualifications": "5 Years of Java"
    // }
    const { jobTitle, company, location, jobCategory, employmentType, jobDescription, qualifications} = req.body
    const newJobEntry = {
            jobTitle,
            company,
            location,
            jobCategory,
            employmentType,
            jobDescription,
            qualifications,
            postSuccess:true
        }
    console.log(newJobEntry)
    return res.json(newJobEntry)
})





module.exports = router
