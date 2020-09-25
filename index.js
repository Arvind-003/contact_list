const express=require('express');
const path=require('path');
const port=8000;

//include the mongoose file when we will fire up(i.e,just start the server) the server
const dp =require('./config/mongoose.js');

//require the contact from contact.js
//now Contact is used to create entries and collection populated using this Contact
const Contact=require('./models/contact');


const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

//include static files(i.e css images js file)
app.use(express.static('assets'));

// var contactList=[
//     {
//         name:"arvind",
//         phone:"999999999"
//     },
//     {
//         name:"ayush",
//         phone:"8888888"
//     }
// ];

app.get('/',function(req,res){

    //fetch the contact
    Contact.find({},function(err,contacts){
        if(err)
        {
            console.log("error in fetching contact");
            return;
        }
        return res.render('home',{
            title:"contact list",
            contact_list:contacts
    });
    
    });
});
// app.get('/practice',function(req,res){
//     return res.render('practice',{
//         title:'lets play with ejs'
//     });
// });

//routing data to create-contact
//parsing form data
//and push into database for which schema is created 
//using Contact we will access Schema
app.post('/create-cantact',function(req,res){
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    }, function(err,newContact){
        //if there is error then we will fire a callback function
        if(err){
            console.log('error in creating the contact');
            return;
        }
        console.log('*******',newContact);
        return res.redirect('back');
    });

    
});

//to delete ,delete-contact is the controller
app.get('/delete-contact',function(req,res){
    //get the id from query in the url
    let id=req.query.id;

    //find the contact in the database using id
   Contact.findByIdAndDelete(id,function(err){
       if(err)
       {
           console.log("error in deleting contact from database");
            return;
        }
        console.log("contact deleted");
        return res.redirect('back');
   });
    
   
});

app.listen(port,function(err){
    if(err)
    {
        console.log("error");
        return;
    }
    console.log("running perfectly");
});