const express  = require("express");
const app = express();
const port = 8080;
const path = require("path"); // path for defining paths for file
app.set("view engine","ejs"); // EJS setting
app.set("views",path.join(__dirname,"views")); // setting views path
app.use(express.static(path.join(__dirname,"public"))); 
var bodyParser = require('body-parser');
const {v4:uuidv4} = require('uuid');
var methodOverride = require('method-override')

// override with POST having ?_method=PATCH
app.use(methodOverride('_method'))


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let posts=[
    {
        id:uuidv4(),
        username:"apnacollege",
        content:"I Love Coding",
    },
    {
        id:uuidv4(),
        username:"The Great wall of china",
        content:"I Love chine",
    },
    {
        id:uuidv4(),
        username:"Tywin Lannister",
        content:"I Love Lannister",
    }
]

app.listen(port,()=>{
    console.log(`listining on port ${port}`);
})

app.get("/posts", (req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
})
app.post("/posts", (req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    console.log(req.body);
    res.redirect('/posts');
    
})

app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id===p.id);
    if(post!==undefined){
        res.render("show.ejs",post);
    }else{
        res.render("error.ejs");
    }
   
})

app.get("/posts/:id/edit", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id===p.id);
    if(post!==undefined){
        res.render("edit.ejs",post);
    }else{
        res.render("error.ejs");
    }
   
})

app.patch("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id===p.id);
    post.content=req.body.content;
    
    res.redirect('/posts');
    
})

app.get("/posts/:id/delete", (req,res)=>{
    let {id} = req.params;
     posts = posts.filter((p)=>id!==p.id);
    
        res.redirect('/posts');
})