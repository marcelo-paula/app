// fs vai ser para poder ler e escrever arquivos de dados
const fs = require("fs")

const { 
    getListAllUsers, 
    getListAllUsersID,
    postUser,
    editUser,
    deleteUser } = require("../model/userModel")

// requisiçã para listar usuário
async function getUserController(req, res) {
    try {
        let json = {
            error: '',
            result:[]
        }

        let users = await getListAllUsers()
        for (let i in users){
            json.result.push({
                name: users[i].name,
                lastName: users[i].lastName,
                firstName: users[i].firshName,
                email: users[i].email
            })
        }
        res.json(json)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

//requisição para listar somente um usuário
async function getUserControllerPorID(req, res){
    try {
        let json = {
            error: '',
            result:[]
        }

        let id = req.params.id
        let users = await getListAllUsersID(id)
        
        if (users){
            json.result = users
        }

        res.json(json)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

// requisição para gravar um usuário
async function postUserController(req, res) {
    try {
        let json = {
            error:'', 
            result:[]
        }
    
        let name = req.body.name
        let lastName = req.body.lastName
        let firshName = req.body.firshName
        let email = req.body.email
        let password = req.body.password

        if (name && lastName && firshName && email && password){
            let users = postUser(name, lastName, firshName, email, password)
            json.result = {
                insertUser: users, name, lastName, firshName, email, password
            }
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);   
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

//requisição para modificar um usuário
async function editUserController(req, res){
    try {
        let json = {
            error:'', 
            result:[]
        }
    
        let idUser = req.params.id
        let name = req.body.name
        let lastName = req.body.lastName
        let firshName = req.body.firshName
        let email = req.body.email
        let password = req.body.password
    
        if (idUser && name && lastName && firshName && email && password){
            await editUser(name, lastName, firshName, email, password, idUser)
            json.result = {
                name, lastName, firshName, email, password, idUser
            }
        }else{
            json.error = 'Campos não enviados';
        }
        
        res.json(json);   
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

// requisição para deletar usuário
async function deleteUserController(req, res){
    try {
        let json = {
            error: '',
            result:[]
        }

        let id = req.params.id
        let users = await deleteUser(id)
        
        if (users){
            json.result = users
        }

        res.json(json)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getUserController,
    getUserControllerPorID,
    postUserController,
    deleteUserController,
    editUserController
}