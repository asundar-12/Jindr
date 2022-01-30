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
const employersDB = db.collection('Employers_List'); 
const jobPostingsDB  = db.collection('Job_Postings'); 



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







const PORT = 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})






// test firebase
// const testfunc = async () => {
//     const liam = employeeProfileDb.doc('lragozzine'); 
//     await liam.set({
//         first: 'Liam',
//         last: 'Ragozzine',
//         address: '133 5th St., San Francisco, CA',
//         birthday: '05/13/1990',
//         age: '30'
//     });
// }
// testfunc()