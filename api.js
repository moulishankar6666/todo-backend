const express = require("express")
const sql = require("mysql2")
const db=require("./db")

const app= express()
app.use(express.json())
app.listen(5002,()=>{
    console.log("server started at port 5002")
})

app.get('/todos',async(req,res)=>{
    try{
        const response= await db.getTodos()
        res.send(response)
    }catch(err){
        res.send("Error ",err)
    }
})

app.post('/addtodo',async (req,res)=>{
    const details=req.body
    const {id,todo,is_done}=details
    try{
        const response= await db.setTodo(id,todo,is_done)
        res.send(response)
    }catch(error){
        res.send("Error ",error.message)
    }
})

app.get('/completedtodos',async (req,res)=>{
    try{
        const response=await db.getCompletedTodos()
        res.send(response)
    }catch(err){
        res.send("Error ",err)
    }
})

app.get('/uncompletedtodos',async (req,res)=>{
    try{
        const response=await db.GetUncompletedTodos()
        res.send(response)
    }catch(err){
        res.send("Error ",err)
    }
})


