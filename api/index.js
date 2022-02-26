const server = require('./src/index.js');
const { conn } = require('./src/database.js');

conn.sync({ truncate: true }).then(() =>{
    server.listen(3001, () => {
        console.log("listening at 3001")
    })
})