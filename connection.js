const express=require('express');
const ejs=require('ejs');
const PORT=8083;
const app=express();

//setting view engine
app.set('view engine','ejs');

//Setting static files
app.use(express.static('public'));

//Routes
app.get('/',function(req,res){
    res.render('index',{title:'Data visualization'});
});


app.listen(PORT,function(error){
    if(error){
        console.warn('App encountered error:',error);
    }else{
        console.info(`App connected to port ${PORT}`);
    }
})