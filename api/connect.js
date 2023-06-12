import mysql from 'mysql2';


export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'JeDoisLeFaire@1970',
    database: "clientsDB"
});

db.connect(err => {
    if (err) throw err;
    else {
        console.log('Db connected');
    }
});