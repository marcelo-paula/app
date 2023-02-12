const fs = require("fs")
const db = require("../config/db")

function getListAllUsers(){
    return new Promise((aceito, rejeitado) => {
        db.query("SELECT * FROM users", (error, results)=> {
            if(error){
                rejeitado(error)
                return
            }

            return aceito(results)
        })
    })
}

function getListAllUsersID(id){
    return new Promise((aceito, rejeitado) => {
        db.query("SELECT * FROM users WHERE idUser = ?", [id], (error, results)=> {
            if(error){
                rejeitado(error)
                return
            }

            if (results.length > 0){
                aceito(results[0])
            }else {
                aceito(false)
            }
        })
    }) 
}

function postUser(name, lastName, firshName, email, password){
    return new Promise((aceito, rejeitado) => {
        db.query("INSERT INTO users(name, lastName, firshName, email, password) values (?,?,?,?,?)", 
            [name, lastName, firshName, email, password], (error, results)=> {
            if(error){
                rejeitado(error)
                return
            }

            if (results.length > 0){
                aceito(results[0])
            }else {
                aceito(false)
            }
        })
    }) 
}

function editUser(name, lastName, firstName, email, password, id){
    return new Promise((aceito, rejeitado) => {
        db.query("UPDATE users SET name = ?, lastName = ?, firshName = ?, email = ?, password = ? WHERE idUser = ?", 
            [name, lastName, firstName, email, password, id], (error, results)=> {
            if(error){
                rejeitado(error)
                return
            }

            aceito(results)
        })
    }) 
}


function deleteUser(id){   
    return new Promise((aceito, rejeitado) => {
        db.query("DELETE FROM users WHERE idUser = ?", [id], (error, results)=> {
            if(error){
                rejeitado(error)
                return
            }

            aceito(results)
        })
    }) 
}

module.exports = {
    getListAllUsers,
    getListAllUsersID,
    postUser,
    editUser,
    deleteUser
}