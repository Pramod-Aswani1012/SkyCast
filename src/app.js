const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partials');
console.log(partialPath)

app.set('view engine','hbs');
// app.use(express.static(staticPath));
app.set('views',viewPath);
hbs.registerPartials(partialPath)

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/weather',(req,res)=>{
    res.render('weather')
})

app.get("*", (req, res) => {
  res.render('404error');
});

app.listen(port,()=>{
    console.log(`listenin on port ${port}`);
});