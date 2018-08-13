// // server.js

// var express = require('express');  
// var path = require("path");   
// var bodyParser = require('body-parser');  
// var mongo = require("mongoose");  
  
// var db = mongo.connect("mongodb://localhost:27017/MovieCollections", function(err, response){  
//    if(err){ console.log( err); }  
//    else{ console.log('Connected to ' + db, ' + ', response); }  
// });  
  
   
// var app = express()  
// app.use(bodyParser());  
// app.use(bodyParser.json({limit:'5mb'}));   
// app.use(bodyParser.urlencoded({extended:true}));  

   
  
// app.use(function (req, res, next) {        
//      res.setHeader('Access-Control-Allow-Origin', '*');    
//      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
//      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
//      res.setHeader('Access-Control-Allow-Credentials', true);       
//      next();  
//  });  
  
//  var Schema = mongo.Schema;  
  
// var MoviesSchema = new Schema({      
//  title: { type: String   },       
//  director: { type: String   }, 
//  cast: { type: String   }, 
//  genre: { type: String   },   
// },{ versionKey: false });  
   
  
// var model = mongo.model('movies', MoviesSchema, 'movies');  
  
// app.post("/api/add",function(req,res){   
//  var mod = new model(req.body);  
//  if(req.body.mode =="Save")  
//  {  
//     mod.save(function(err,data){  
//       if(err){  
//          res.send(err);                
//       }  
//       else{        
//           res.send({data:"Movie Details has been Inserted..!!"});  
//       }  
//  });  
// }  
  
//  })  
  
//  app.post("/api/delete",function(req,res){      
//     model.remove({ _id: req.body.id }, function(err) {    
//      if(err){    
//          res.send(err);    
//      }    
//      else{      
//             res.send({data:"Record has been Deleted..!!"});               
//         }    
//  });    
//    })  
  
  
  
//  app.get("/api/getlist",function(req,res){  
//     model.find({},function(err,data){  
//               if(err){  
//                   res.send(err);  
//               }  
//               else{                
//                   res.send(data);  
//                   }  
//           });  
//   });

//   app.get("/index",function(req,res){
// res.json("Welcome to Sucess!!!");
//   });
  
// app.listen(8080, function () {  
    
//  console.log('Example app listening on port 8080!')  
// })