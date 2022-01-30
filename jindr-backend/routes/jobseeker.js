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


router.post("/new-jobseeker", async (req, res) => {
    // example req = {
    //     "fName": "John", 
    //     "lName": "Doe", 
    //     "age": "21", 
    //     "gender": "Male", 
    //     "location": "NYC", 
    //     "summary": "Summary", 
    //     "experience": "10 years of Java", 
    //     "education": "B.CS; MIT", 
    //     "skills": "Java"
    //     }
    const { fName, lName, age, gender, location, summary, experience, education, skills } = req.body
    const jobseekerId = v4()
    const newJobseekerEntry = await jobseekersDB.doc(jobseekerId).set({
        id: jobseekerId,
        fName, 
        lName, 
        age, 
        gender, 
        location, 
        summary, 
        experience, 
        education, 
        skills,
        jobposterViewed: "false",
        jobposterLiked: "false",
    })
    return res.json({jobseekerId: jobseekerId, status:"success"})
})


router.get("/get-job", async (req, res) => {
    const { jobCategory } = req.body
    const job = await jobPostingsDB.where("jobCategory", "==", jobCategory).where("jobseekerViewed", "==", "false").limit(1).get()
    var returnJob = null
    if (job.empty) {
        console.log("No matches")
        return res.sendStatus(404)
    } else {
        job.forEach((doc) => {
            console.log(doc.data())
            return res.json(doc.data())
        })
    }
})


router.post("/rate-job", async (req, res) => {
    console.log("OK")
    const { jobId, jobseekerLiked } = req.body
    const job = await jobPostingsDB.doc(jobId).update({
        jobseekerViewed: "true",
        jobseekerLiked: jobseekerLiked
    })
    return res.sendStatus(200)
})






module.exports = router
