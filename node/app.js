const http = require("http")
const express = require("express")
const routerUser = require("./router/userRouter")
const connect = require("./config/db")
const { verify } = require("crypto")
const cors = require("cors")

const app = express()

app.use(express.json());

// aceita todos os tipos
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    origin: '*'
}));

//define a função se usuário está autenticado ou não
// const jwt = require('jsonwebtoken');
// const SECRET = "Marcelo123@"

// function verifyJWT(req, res, next){
//     const token = req.headers['x-acess-token']
//     jwt.verify(token, SECRET, (err, decoded) => {
//         if (err){
//             return res.status(401).end()
//         }

//         req.userID = decoded.userID
//         next()
//     })
// }

// para poder utilizar a api no front-end
app.use(function (req, res, next) {
    res.setHeader("Content-Security-Policy", "default-src 'self' localhost:*");
    next();
});

// Define a rota
app.use('/user', routerUser)

// roda na porta 8000 ou 3000
const port = 8000 || 3000

//Vai sempre ficar ouvindo quando houver alguma rota for acionada 
app.listen(port, () => {
    console.log('Estou ouvindo a porta ' + port)
})