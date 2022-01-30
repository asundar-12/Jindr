// express router boilerplate
const express = require("express")
const router = require("express").Router()
const {v4} = require("uuid")
router.use(express.json())
// Set up firebase
var admin = require("firebase-admin");
const db = admin.firestore(); 
// // Firebase collections
const jobpostersDB = db.collection('Employers_List'); 
const jobPostingsDB  = db.collection('Job_Postings'); 
const jobseekersDB  = db.collection('Employee_Profile'); 

// // POST request for job poster login (http://localhost:3000/jobposter/login)
// router.post("/login", async (req, res) => {
//     // req example = {
//     //     "username": "jobposter1",
//     //     "password": "1234"
//     // }
//     const { username, password } = req.body
//     console.log(newJobEntry)
//     return res.json(newJobEntry)
// })


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
    const { jobPosterId, jobTitle, company, location, jobCategory, employmentType, jobDescription, qualifications } = req.body
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
        jobseekerViewed: "false",
        jobseekerLiked: "false",
        jobPostOwner: jobPosterId
    })
    return res.json({jobId: jobId, status:"success"})
})


router.get("/get-jobseeker", async (req, res) => {
    const jobseeker = await jobseekersDB.where("jobposterViewed", "==", "false").limit(1).get()
    var returnJob = null
    if (jobseeker.empty) {
        console.log("No matches")
        return res.sendStatus(404)
    } else {
        jobseeker.forEach((doc) => {
            console.log(doc.data())
            return res.json(doc.data())
        })
    }
})


router.post("/rate-jobseeker", async (req, res) => {
    console.log("OK")
    const { jobseekerId, jobposterLiked } = req.body
    const jobseeker = await jobseekersDB.doc(jobseekerId).update({
        jobposterViewed: "true",
        jobposterLiked: jobposterLiked
    })
    return res.sendStatus(200)
})





module.exports = router
