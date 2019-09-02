const express = require("express");
const app = express();
let users = [];
let user = "null";

app.use(express.json());    //  
app.use(express.urlencoded({extended:true}));

app.listen(3030);

app.get("/users", (req, res) => {
    if(user){
        res.send("error")     
    }else{
         res.send("user get" + user.name);
    }
});

app.get("/users/:id", (req,res)=> {
    if(user && ser.id == req.params){
        
        res.send("user " + user.name+ "get");
    }else{
        res.send("No error!!")     
    }
});

app.post("/users", (req,res)=> {
    user = req.body;
    res.send("user add"+ user.name + " post");
});
app.put("/users/:id", (req,res)=> {
    res.send("user "+ req.params.id + " put");
});
app.delete("/users/:id", (req,res)=> {
    res.send("user "+ req.params.id + " delete");
});
