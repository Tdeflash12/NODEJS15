
const databaseConfig = {
    db : process.env.DB, 
    username : process.env.USERNAME2, 
    password : process.env.PASSWORD, 
    host : process.env.HOST, 
    port : 42730, 
    dialect : 'mysql'
}

module.exports = databaseConfig