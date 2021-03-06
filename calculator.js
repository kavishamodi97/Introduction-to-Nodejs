///-------------------implement basic calculation operation with local server connectivity using Express Package------------------------------------------/
//install express package and import express package
const express=require('express');

//install body-parser package and import body-parser package
const bodyParser=require('body-parser');

const app=express();

//use of body parser to get entered vaalues and return json format(js objects)
app.use(bodyParser.urlencoded({extended:true}));

//apply request-response over "Get" method
app.get("/",function(req,res){
res.sendFile(__dirname + "/index.html");
});

//apply request-response over "Post" Method
app.post("/",function(req,res){

//need to cast in Number format otherwise it return in string format And Add Two Numbers
  var num1 =Number(req.body.num1);

  var num2= Number(req.body.num2);

  var sum= num1 + num2;

  res.send("The Sum of Two Numbers are:- " +sum);

});

//apply request-response over "Get" method
app.get("/bmicalculator",function(req,res){
res.sendFile(__dirname +  "/bmiCalculator.html");
});

//apply request-response over "Post" Method And Calculate BMI
app.post("/bmicalculator",function(req,res) {

//parse into float values and return float type BMI values
  var weight=parseFloat(req.body.weight);
  var height=parseFloat(req.body.height);

  var total=weight/(height*height);

  res.send("BMI Calculation is:" + total);

});

//server listen in port no 3000
app.listen(3000,function(){
  console.log("listen 3000 port");
});
