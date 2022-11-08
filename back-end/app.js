// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const bodyParser = require('body-parser');
const {courseRoutes} = require("./routes/courseRoutes");

const course_data=require("./json_data/Course_Data.json")
const course_review=require("./json_data/Course_Review.json")
const cors = require('cors');
app.use(cors());


// import some useful middleware
const multer = require("multer") // middleware to handle HTTP POST requests with file uploads
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests


// use the morgan middleware to log all incoming http requests
app.use(morgan("dev")) // morgan has a few logging default styles - dev is a nice concise color-coded style
app.use(bodyParser.json())
// app.use('/api/course', courseRoutes => {})


app.use((req, res, next) => {
    console.log(req.body);
    next();
})







app.get('/CourseRatings', function(req,res){


    //get prof and class name
    /*let profs = [];
    let class_names=[];

    for(let i =0; i<mock_data.length;i++){
        profs+=mock_data[i].professor;
        class_names+=mock_data[i].class_name;
    }*/
    res.send({
       // professors:profs,
        //class_names:class_names
        course_review

    })
 
  // send the response as JSON text to the client
  res.json(body)

})




app.get('/CourseReviews', function(req,res){
    /*let reviews_data=[];
    let name_data=[];
    //for loop for all elements
        for(let i=0;i<course_review.length;i++){

        reviews_data+=[course_review[i].class_reviews[i].review];
        //reviews_data+=" "+mock_data[i].first_name+": "+mock_data[i].review
        name_data+=[" "+course_review[i].class_reviews[i].reviewer_name]

        }*/
    res.send({
    //names:name_data,
    //reviews:reviews_data
    course_review
    });
    
    // send the response as JSON text to the client
    res.json(body)
 
 })

 app.get('/CourseDetails', function(req, res){
   /* let ratings=[];
    let ratings1=[];
    let ratings2=[];
    let workload=[];
    //for loop for all elements
    
    for(let i=0;i<mock_data.length;i++){
        
        ratings+=[mock_data[i].rating1,mock_data[i].rating2,mock_data[i].workload+" "]
        
        ratings1+=[mock_data[i].rating1]+","
        ratings2+=[mock_data[i].rating2]+","
        workload+=[mock_data[i].workload]+","

    }*/
   
    res.send({

        //ratings:ratings
        //ratings1:ratings1,
        //ratings2:ratings2,
        //workload:workload
        course_data
       


    });

    res.json(body)


 })
 
 // export the express app we created to make it available to other modules
 module.exports = app;

