import mysql from 'mysql';

let con;

const openDBConnection = () =>{
    con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "siuvykla",
    });
}

const getCon = () =>{
    return con;
}

export { openDBConnection, getCon };
