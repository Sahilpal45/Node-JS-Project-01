const express=require("express");
const app=express();
const port=8000;
const userrouter=require("./Routes/user.js")
const {connectMongoDB}=require("./connection.js");
const {logReqRes}=require("./Middlewares/index.js");

//Connect Mongoose
connectMongoDB("mongodb://127.0.0.1:27017/").then(()=>console.log("MongoDB Connected"))

// MiddleWare (plugin)
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));

// routes
app.use("/user",userrouter);

app.listen(port,()=>console.log(`Server started at port ${port}`));