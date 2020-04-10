let express = require('express')
let fs = require('fs')
let app=express()

app.all('/',(req,res)=>{
    fs.readFile('./static/home.html', 'utf-8', function(err, data) {
        if (err) {
            throw err;
        }
        res.send(data);
    });
  })
  app.all('/home',(req,res)=>{
  

    fs.readFile('./static/home.html', 'utf-8', function(err, data) {
        if (err) {
            throw err;
        }
        res.send(data);
    });
  })
  app.all('/listing',(req,res)=>{
   fs.readFile('./static/html/listing.html', 'utf-8', function(err, data) {
        if (err) {
            throw err;
        }
        res.send(data);
    });
  })

app.get('/favicon.ico', (req, res) => res.status(204).end());
app.use(express.static(__dirname + '/static'))

app.listen(8080,()=>{
  console.log("服务启动成功")}
  )