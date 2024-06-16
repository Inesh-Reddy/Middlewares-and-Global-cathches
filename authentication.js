//Assignment  

/**
 * A website has two end points 
 *  . post /signin  --> with body   : username and password  ---> return : JWt with username encrypted
 *  . get /users    --> with header : Authorization header   ---> return : all users {if correct/user signed in}
 *                                                                          403 {else}
 */

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const jwtpassword = "123456";

const port = 3000;
app.use(express.json());
const ALLUSERS =  [
    {
        username : "harkirath@gmail.com",
        password : "123",
        name : "harkirath singh"
    },
    {
        username : "raman@gmail.com",
        password : "123",
        name : "raman singh"
    },
    {
        username : "priya@gmail.com",
        password : "123",
        name : "priya singh"
    }
]

const userExists = (username, password) => {
    for(let i = 0 ; i<= ALLUSERS.length ; i++){
        if(ALLUSERS[i].username == username && ALLUSERS[i].password == password){
            return true;
        }else{
            return false;
        }
    }
}

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username, password)){
        return res.status(403).json({
            msg : "Sorry user does not exist",
        })
    }
    var token =  jwt.sign({username : username}, jwtpassword);
    return res.json({
        token,
    })
})

app.get('/users', (req, res) => {
    const token = req.headers.authorization;
    var decoded = jwt.verify(token, jwtpassword);
    const username = decoded.username;
    res.json({
        users : ALLUSERS.filter((value)=>{
            if(value.username == username){
                return false;
            }
            else{
                return true;
            }
        })
    })
})

app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}...`);
})


