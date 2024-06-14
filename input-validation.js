const express = require('express');
const app  = express();

const port =  3000;

app.use(express.json());


app.post("/health-checkup",  (req, res) =>{
    const kidneys = req.body.kidneys;
    //we need to check that the user is sending proper inputs and aslo make sure that server doesn't get crashed of other reasons
    
    //ONE WAY OF HANDLING INPUT VALIDATIONS  
        //1 .using below checks 
        //2. using ZOD library

    //for that  --> we will use multiple validations 
    //example
    // if (!kidney) {
    //     res.json({
    //         msg: "wrong inputs"
    //     })
    // }else{
    //     const kidneyLength = kidneys.length;
    //     res.status(200).json({
    //         msg: "you have " + kidneyLength + " kidneys",
    //     })
    // }
    const kidneyLength = kidneys.length;
    res.status(200).json({
        msg: " you have " + kidneyLength + " kidneys",
    })
})

// Global Catch  ---> Helps to give user a better message
app.use((err, req, res, next) => {
    res.json({
        msg: "Something is up with the Server!!!"
    })
})
app.listen(port, () =>{
    console.log(`Server is listening on port ${port} ...`)
})