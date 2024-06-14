const express = require('express');
const app = express();
const port  = 3000;

app.get(('/health-checkup'), (req,res)=>{
    res.status(200).json({
        msg: "Your kidney is fine",
    })
})

app.post(('/kidney-replacement'), (req, res)=>{
    res.status(200).json({
        msg: "Your kidney got replaced",
    })
})


app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port} ...`)
})