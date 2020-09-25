//since mongoose is used to create the schema ,so we will require mongoose
const mongoose=require('mongoose');
//one of the amazing thing with mongoose is that if we require mongoose at two ddifferent places ,it will be required from the same instancee

//creating schema
//and in this we need to give the fields(name,phone)
const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        //since we do not want the contact without name ,so will make it required
        required:true
    },
    phone:{
        type:String,
        required:true
    }

});


//since we have created schema , now we have to tell the name of the collection (i.e, name collection in database) that we will be using
const Contact=mongoose.model('Contact',contactSchema);

module.exports=Contact;
