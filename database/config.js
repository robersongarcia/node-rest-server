const moongose = require('mongoose');

const dbConnection = async () => {
    try {
       
        await moongose.connect(process.env.MONGODB_CNN)

        console.log('DB Online')

    } catch (error) {
        console.log({error})
        throw new Error('Database initialization error')
    }
}

module.exports = {
    dbConnection
}