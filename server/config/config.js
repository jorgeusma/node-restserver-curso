//==============================================
// Puerto
//==============================================

process.env.PORT = process.env.PORT || 3000;


//==============================================
// Entorno
//==============================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//==============================================
// BD
//==============================================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:d1m3d3ll1n@ds157390.mlab.com:57390/cafe';
}

process.env.URLDB = urlDB;