const { ClientRequest } = require('http');
const mysql = require('mysql');
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'password',
database: 'libros'
});
connection.connect((err) => {
if (err) {
console.error('Error de conexión:', err);
return;
}
console.log('Conexión a la base de datos MySQL (israel) exitosa');
//consulta SELECT * FROM Clientes; 
connection.query('SELECT * FROM clientes', (error, results, fields) => {
if (error) {
console.error('Error en la consulta:', error);
return;
}
console.log('Resultados de la consulta:');
console.log(results);
results.forEach((row) => {
console.log(row);
});
});
});