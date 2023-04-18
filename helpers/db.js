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

const getReply = async (keyboard, id_group) => {
if (keyboard.includes('/cek') ||  groups.includes('!groups')){
try {
const pool = await createConnection();
const request = pool.request();
request.input('keyboard', sql.VarChar(50), keyboard); // declare the 'keyboard' parameter
const result = await request.query('SELECT isi as message FROM [dbo].[TG_FN_PATRICIA_COMMAND_WA](@keyboard)');
if (result.recordset.length > 0) return result.recordset[0].message;
return false;
} catch (err) {
console.error('Error executing query:', err);
return false;
} finally {
if (pool) pool.close();
}
}
};

const getMessage = () => {
setInterval(getMessagesToSend, 3000); // send message every 5 minutes (300000 milliseconds)
};

module.exports = {
createConnection,
getReply,
getMessage,
};