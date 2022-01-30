// express router boilerplate
const express = require("express")
const router = require("express").Router()
const {v4} = require("uuid")
router.use(express.json())
// Set up firebase
var admin = require("firebase-admin");
const db = admin.firestore(); 
// // Firebase collections
const employersDB = db.collection('Employers_List'); 
const jobPostingsDB  = db.collection('Job_Postings'); 


// POST request for job poster login (http://localhost:3000/jobposter/login)
router.post("/login", async (req, res) => {
    // req example = {
    //     "username": "jobposter1",
    //     "password": "1234"
    // }
    const { username, password } = req.body
    console.log(newJobEntry)
    return res.json(newJobEntry)
})


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
    const { jobTitle, company, location, jobCategory, employmentType, jobDescription, qualifications } = req.body
    const jobId = v4()
    const newJobEntry = await jobPostingsDB.doc(jobId).set({
        id: jobId,
        jobTitle,
        company,
        location,
        jobCategory,
        employmentType,
        jobDescription,
        qualifications,
        jobseekerViewed: [],
        jobseekerLike: []
    })
    return res.json({jobId: jobId, status:"success"})
})





module.exports = router
