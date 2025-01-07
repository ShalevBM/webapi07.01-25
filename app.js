const express=require('express');
const app=express();
const productRouter=require('./api/v1/routes/product');
const morgan=require('morgan');
const mongoose=require('mongoose');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
const secure=require('./api/v1/middlewares/secure');
//app.use(secure);
console.log(process.env.GOOGLE_USER);
console.log(process.env.GOOGLE_PASS);
const mongoConnstr=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ecom.r9vhn.mongodb.net/?retryWrites=true&w=majority&appName=eCom`;
mongoose.connect(mongoConnstr).then();



app.use('/product',productRouter);
module.exports=app; 