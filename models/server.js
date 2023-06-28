const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { dbConnection } = require('../database/config')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.userPath = '/api/users'

        this.connectDB()

        this.middlewares()
        this.routes()
    }

    async connectDB() {
        await dbConnection()
    }

    routes() {
       this.app.use(this.userPath, require('../routes/user'))
    }

    middlewares() {
        this.app.use(express.static('public'))
        this.app.use(cors())

        //read and parse of body
        this.app.use(express.json())
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running at http://localhost:${this.port}`)
        })
    }
}

module.exports = Server