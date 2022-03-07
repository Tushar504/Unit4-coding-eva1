const express=require("express");
const app=express();

app.use(logger)
app.get("/books",(req,res)=>{
    return res.send({route:"/books"})
})

app.get("/libraries",checkPermission("librarian"),(req,res)=>{
    return res.send({route:"/libraries",
    permission:req.permission
})
})

app.get("/authors",checkPermission("author"),(req,res)=>{
    return res.send({route:"/authors",
    permission:req.permission
})
})


function logger(req,res,next){
    
    next()
}

function checkPermission(data){
   return function middleware(req,res,next){ 
    if(req.path=="/libraries"){
        req.permission=true
    }
    else if(req.path=="/authors"){
        req.permission=true
    }
    next();
}
}
app.listen(1200,()=>{
    console.log("listening on 1200")
})