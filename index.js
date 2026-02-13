const express=require ("express");
const app = express();
const port=3030;
const path=require("path");
const { v4 : uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


app.set("view engin","ejs");
app.set("view",path.join(__dirname,"view"));


app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id:uuidv4(),
        username:"mohit04",
        content:"doing my work",
    },
    {
        id:uuidv4(),
        username:"jiya07",
        content:"doing well",
    },
    {
        id:uuidv4(),
        username:"anchal05",
        content:"welcome to my page",
    }
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs");
});

app.get("/posts",(req,res)=>{
    res.render("new.ejd");
});

app.get("/")


app.listen(port,()=>{
    console.log("listening to port:3030");
});

