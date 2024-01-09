const { rejects } = require("assert")
const sql=require("mysql2")
const { resolve } = require("path")

const con = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"Mouli@3669",
    database:"todos_database"
})

function setTodo(id,todo,is_done){
    return new Promise((resolve,rejects)=>{
        con.query(`
            INSERT INTO todos_data(id,todo,is_done)VALUES(?,?,?)`,[id,todo,is_done],function(err,res){
        if (err){
            reject("something Worng",err)
        }else{
            resolve("todo created")
        }
    })
    })
}


function getTodos(){
    
        return new Promise ((resolve,reject)=>{
            con.query(`
            SELECT * FROM todos_data`,async function(err,res){
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
        })
    })
}

function getCompletedTodos(){
    return new Promise((resolve,reject)=>{
        con.query(`SELECT * FROM todos_data WHERE is_done=true`,function(err,res){
            if (err){
                reject("something worng",err)
            }else{
                resolve(res)
            }
        })
    })
}


function GetUncompletedTodos(){
    return new Promise((resolve,reject)=>{
        con.query(`SELECT * FROM todos_data WHERE is_done=false`,function(err,res){
            if (err){
                reject("something worng",err)
            }else{
                resolve(res)
            }
        })
    })
}

function deleteTodo(id){
    return new Promise((resolve,reject)=>{
        con.query(`DELETE FROM todos_data WHERE id=?`,[id],function(err,res){
            if (err){
                reject("something worng",err)
            }else{
                resolve(res)
            }
        })
    })
}



module.exports={setTodo,getTodos,getCompletedTodos,GetUncompletedTodos}