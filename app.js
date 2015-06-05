
var express = require("express");
var app = express();

var books = [];
var id = 1;

app.set("view engine", "ejs");

app.get("/",function(req,res){

res.render("index",{books:books});
})


app.get("/newbook",function(req,res){

var book = {};
book.title = req.query.title;
book.size = req.query.size;
book.id = id;
id++;

books.push(book);
console.log(book);

res.redirect("/");

})

app.get("/books/new", function(req,res){
	res.render("newbook");
})

app.get("/books/:id", function(req,res){
  books.forEach(function(book){
  	if(book.id === Number(req.params.id)){
  		var book = book; 
  		
  		res.render("show", {book: book});
  	}
  })
})





app.listen(3000, function(){
	console.log("server is alive");
})
