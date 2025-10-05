import express from "express"
import getSum from "./sum.js"
const app = express()

const PORT = 8000

app.listen(PORT,async(req,res)=>{
    console.log(`Server is running on ${PORT}`)
})

app.get("/home",(req,res)=>{
    res.json({
        msg:"Welcome to Server"
    })
})

app.get("/getSum/:a/:b",(req,res)=>{
    const {a,b} = req.params;
    res.json({
        ans:getSum(parseInt(a),parseInt(b))
    })

})