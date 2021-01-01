const express = require('express')
const router = express.Router()
router.get('/user/list',(req,res)=>{
    res.send('get user list')
})
router.post('/user/add',(req,res)=>{
    res.send('add new user')
})



module.exports = router