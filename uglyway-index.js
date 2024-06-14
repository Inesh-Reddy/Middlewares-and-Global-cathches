const express = require('express');

const app = express();


const port = 3000;

/* Middlewae 
Those pre-checks are 
    Authentication
    input validation

*/


//But before meeting doctor ...few checks and test need to be taken 
// we keep constaraints --> need to know no.of kidneys and username and password
app.get(('/health-checkup'), (req,res)=>{
    //checks need to happen ..ugly way no proper middlewares
    const kidneyid = req.query.kidneyid;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != 'inesh' || password != 'pass'){
        res.status(400).json({
            msg : "Something up with your health-1",
        })
        return;
    }
    if(kidneyid != 1 && kidneyid != 2){
        res.status(400).json({
            msg : "Something up with your health-2",
        })
        return;
    }
    res.status(200).json({
        msg : "Your Kidney is fine",
    })
})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port} ...`)
})