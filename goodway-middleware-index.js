const express = require('express');
const app = express();
const port  = 3000;

//middlewares
const authMiddlewares = (req, res, next)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != 'inesh' && password != 'pass'){
        res.status(403).json({
            msg: "authentication failed"
        })
    }else{
        next();
    }
}

const inputvalMiddleware = (req, res, next) => {
    const kidneyid = req.query.kidneyid;
    if(kidneyid != 1 && kidneyid != 2){
        res.status(403).json({
            msg: "issue with inputs validation",
        })
    }else{
        next();
    }
}


app.get(('/health-checkup'),authMiddlewares, inputvalMiddleware, (req,res)=>{
    res.status(200).json({
        msg: "Your kidney is fine",
    })
})

app.get(('/kidney-checkup'), authMiddlewares, inputvalMiddleware, (req, res)=>{
    res.status(200).json({
        msg: "Your kidney got replaced",
    })
})

app.get(("/heart-checkup"), authMiddlewares, (req, res)=>{
    res.status(200).json({
        msg: "Your heart is fine",
    })
})


app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port} ...`)
})