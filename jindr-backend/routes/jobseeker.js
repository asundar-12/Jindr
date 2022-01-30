const router = require("express").Router()
const {v4} = require("uuid")



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

// app.post('/', async (req, res) => {
//     const data = {
//         job: req.body.job,
// 	    yoe: req.body.yoe,
// 	    qual: req.body.qual,
// 	    resp: req.body.resp,
// 	    visa: req.body.visa
//     }
//     await db.collection('Job_Postings').doc().set(data);
// })

module.exports = router