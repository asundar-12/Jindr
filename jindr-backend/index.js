// Express boilerplate
const express = require("express")
const {v4} = require("uuid")
const app = express()
app.use(express.json())
// Set up firebase
const admin = require("firebase-admin");
const serviceAccount = require("./firebaseAPI.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore(); 
// Firebase collections
const jobpostersDB = db.collection('Employers_List'); 
const jobPostingsDB  = db.collection('Job_Postings'); 
const jobseekersDB  = db.collection('Employee_Profile'); 


// Routers
app.use("/jobseeker", require("./routes/jobseeker"))
app.use("/jobposter", require("./routes/jobposter"))
app.get("/", (req, res) => res.send("Backend is live"))

// GET get any job by jobId (can be used by jobseeker and jobposter)
app.get("/get-job-by-id", async (req, res) => {
    // req example = {"jobId": "76095db1-f75c-4ae9-8d6e-a24fd405a48f"}
    const { jobId } = req.body
    const job = await jobPostingsDB.doc(jobId).get()
    if (job.empty || !job.exists) {
        console.log("No matches")
        return res.sendStatus(404)
    } else {
        res.json(job.data());
    }
})

// FUNCTION TO RESET THE VIEWS OF JOBSEEKERS BY JOBPOSTERS 
const resetUsers = async () => {
    const users = await jobseekersDB.get()
    users.forEach((user) => {
        user.ref.update({jobposterViewed: "false", jobPosterLiked: "false"})
    })
    console.log("users reseted")
}
// resetUsers()
// FUNCTION TO RESET THE VIEWS OF JOBS BY JOBSEEKER
const resetJobPostings = async () => {
    const jobs = await jobPostingsDB.get()
    jobs.forEach((job) => {
        job.ref.update({jobseekerViewed: "false", jobseekerLiked: "false", jobPostOwner: "sOViIBWYCYZzdcljF5Ll"})
    })
    console.log("jobs reseted")
}
// resetJobPostings()











const PORT = 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})