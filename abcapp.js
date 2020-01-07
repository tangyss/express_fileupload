const http=require('http')
const express=require('express')
const app=express();
let server=http.createServer(app);


app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/',function (req,res,next) {
    console.log("middileware...")
    next()
})

app.post('/zoos',function (req,res) {
    let m=req.body;
    res.json(m)
})
app.post('/animals',function (req,res) {
    let m=req.body;
    res.json(m)
})

app.get('/',function (req,res) {
    res.send("Hello world!!!");
})

app.get(/ab+c/,function (req,res) {
    res.send("abc...");
})
app.post('/',function (req,res) {
    res.send("post root")
})
app.route('/xx')
    .get(function (req,res) {
        res.send("xx get")
    })
    .post(function (req,res) {
        res.send("xx post")
    })


server.listen(8000,function (err) {
    if(!err) console.log("express start at port :"+8000)
})