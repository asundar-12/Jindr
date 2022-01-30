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



router.get("/get-job", async (req, res) => {
    const { jobseekerUsername, jobCategory } = req.body
    var job = await jobPostingsDB.where("jobCategory", "==", jobCategory).where(jobseekerUsername, "not-in", "jobseekerViewed").get()

    console.log(job)
    if (job.empty) {
        console.log("No matches")
        return res.sendStatus(404)
    } else {
        res.json(job);
    }
})






module.exports = router


// app.get('/:job', async (req, res) => {
//     const token = req.params.token;
//     const query = db.collection('Job_Postings').where('job', '==', token);
//     const querySnapshot = await query.get();
//     if (querySnapshot.size > 0) {
//         res.json(querySnapshot.docs[0].data());
//     }
//     else {
//         res.json({status: 'Not found'});
//     }
// })