const sql = require('mssql');
const { body, validationResult } = require('express-validator');

const pool = new sql.ConnectionPool({
user: 'XXXXXXXX',
password: 'XXXXXXX',
server: 'XXXXX',
database: 'XXXXX',
options: {
encrypt: true,
trustServerCertificate: true
}
});

const createConnection = async() => {
return await pool.connect();
};

const getMessage = () => {
setInterval(getMessagesToSend, 3000); // send message every 5 minutes (300000 milliseconds)
};

module.exports = {
createConnection,
getReply,
getMessage,
};
