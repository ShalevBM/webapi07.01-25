require('dotenv').config();
const http=require('http');
const app=require('./app');
const port=7125;
const srv=http.createServer(app);
srv.listen(port,()=>{console.log("Server Is Up")});