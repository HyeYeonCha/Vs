const express = require("express");
const _ = require("lodash");
const app = express();
let users = [{
    id: 1,
    name: "홍길동"
},{
    id: 2,
    name: "강철수"
}];
let user = "null";

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

app.listen(3000);

// app.get("/", (req, res) => {
//     let a= 10;
//     let b = 20;
//     let c = a+b;
//     req.send(c);
//     res.send("hello dsdsad")
// });

app.get("/users", (req, res) => {
  res.send("user get" + users.name);
});

app.get("/users/:id", (req,res)=> {
    if(user.id == req.params){
        
        res.send("user " + users.name+ "get");
    }
    res.send("user "+ users.name + " get");
});

app.post("/users", (req,res)=> {
    const check_user = _.find(users, ["id", req.params.id]);
    let msg = req.body.id+" 아이디를 가진 유저가 이미 존재합니다.";
    let success = false;
    if(!check_user){
        users.push(req.body);
        msg = req.body.name+" 유저가 추가되었습니다.";
        success = true;
    }
    res.send({msg, success})
});
app.put("/users/:id", (req,res)=> {
    res.send("user "+ req.params.id + " put");
});
app.delete("/users/:id", (req,res)=> {
    if(user)
    res.send("user id "+ req.params.id + " 삭제");
});