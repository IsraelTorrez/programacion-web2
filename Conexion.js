const mysql = require('mysql2');

// Datos de conexión a la base de datos
const conexion = mysql.createConnection({
  host: 'DevServ',
  user: 'israel',
  password: 'israel',
  database: 'israel'
});

// Realizar la conexión
conexion.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos: ' + error.stack);
    return;
  }

  console.log('Conexión a la base de datos MySQL (israel) exitosa');

  // Realizar una consulta de ejemplo
  conexion.query('SELECT * FROM Clientes', (error, resultados, campos) => {
    if (error) {
      console.error('Error al ejecutar la consulta: ' + error.stack);
      return;
    }

    console.log('Resultados de la consulta:');
    console.log(resultados);

    // Cerrar la conexión
    conexion.end();
  });
});
