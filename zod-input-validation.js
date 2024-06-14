// ZOD a better way to implement input validations
const express  = require('express');
const z = require('zod');
const app = express();
const port = 3000;

const mySchema = z.array(z.number());

app.use(express.json());

app.post('/health-checkup', (req, res) =>{
    const kidneys = req.body.kidneys;
    const response = mySchema.safeParse(kidneys);
    if(!response.success){
        res.status(400).json({
            msg: "Wrong inputs"
        })
    }else{
        res.status(200).json({
            msg: "you have "+kidneys.length + " kidneys",
        })
    }
})
app.listen(port, () => {
    console.log(`Server is listening on port ${port} ...`)
})


