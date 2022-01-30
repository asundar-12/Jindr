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
    // return returnJob
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