const { Router } = require("express")
const { 
    getUserController, 
    postUserController, 
    getUserControllerPorID,
    deleteUserController,
    editUserController } = require("../controller/userController")

const router = Router()

// quando acessar localhost:8000/user/
router.get('/', getUserController)

router.get('/:id', getUserControllerPorID)

// quando acessar localhost:8000/user/create
router.post('/create', postUserController)

// quando acessar localhost:8000/user/edit
router.patch('/edit/:id', editUserController)

// quando acessar localhost:8080/user/delete
router.delete('/delete/:id', deleteUserController)

module.exports = router