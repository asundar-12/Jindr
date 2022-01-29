// Express boilerplate
const express = require("express")
const {v4} = require("uuid")
const app = express()
app.use(express.json())
// Set up firebase
var admin = require("firebase-admin");
var serviceAccount = require("./firebaseAPI.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore(); 
// Firebase collections
const employeeProfileDb = db.collection('Employee_Profile'); 

// test firebase
const testfunc = async () => {
    const liam = employeeProfileDb.doc('lragozzine'); 
    await liam.set({
        first: 'Liam',
        last: 'Ragozzine',
        address: '133 5th St., San Francisco, CA',
        birthday: '05/13/1990',
        age: '30'
    });
}
testfunc()


// Routers
app.use("/jobseeker", require("./routes/jobseeker"))
app.use("/jobposter", require("./routes/jobposter"))
app.get("/", (req, res) => {
    return res.send("Test")
})



const PORT = 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})