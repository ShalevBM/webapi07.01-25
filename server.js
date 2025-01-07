require('dotenv').config();
const http=require('http');
const port=process.env.PORT || 2025;
const app=require('./app');
const srv=http.createServer(app);
srv.listen(port,()=>{console.log("Server Is Up")});