const express = require('express')
require('dotenv').config()
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.userPath = '/api/users'
        this.middlewares()
        this.routes()
    }

    routes() {
       this.app.use(this.userPath, require('../routes/user'))
    }

    middlewares() {
        this.app.use(express.static('public'))
        this.app.use(cors())
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running at http://localhost:${this.port}`)
        })
    }
}

module.exports = Server