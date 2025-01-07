const express=require('express');
const app=express();
const productRouter=require('./api/v1/routes/product');
const morgan=require('morgan');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
const secure=require('./api/v1/middlewares/secure');
app.use(secure);
console.log(process.env.GOOGLE_USER);
console.log(process.env.GOOGLE_PASS);

app.use('/product',productRouter);
module.exports=app; 