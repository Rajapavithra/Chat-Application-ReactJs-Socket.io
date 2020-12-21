const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('home page of server')
})

router.get("/chat",(req,res)=>{
    res.send("chat page")
})

module.exports = router;