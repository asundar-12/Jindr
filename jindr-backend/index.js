const express = require("express")
const {v4} = require("uuid")
const app = express()


app.use(express.json())
app.use("/jobseeker", require("./routes/jobseeker"))
app.use("/jobposter", require("./routes/jobposter"))




app.get("/", (req, res) => {
    return res.send("Test")
})



const PORT = 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})