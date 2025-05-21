const mongoose = require('mongoose');

//schema
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true, 'user name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    address:{
        type:Array
    },
    phone:{
        type:String,
        required:[true,'phone number is required']
    },
    usertype:{
        type:String,
        required:[true,'user type is required'],
        default:'client',
        enum:['client','admin','vendor','driver']
    },
    profile:{
        type:String,
        default:'https://www.bing.com/ck/a?!&&p=be192b3d4121c2726f24d777587c110b7f4cb9a3f10b43e1ce09ce2f7c69eca3JmltdHM9MTc0NTM2NjQwMA&ptn=3&ver=2&hsh=4&fclid=10c451a6-16a9-6a1f-00d5-410d175e6bf7&u=a1L2ltYWdlcy9zZWFyY2g_cT11c2VyJTIwaW1hZ2UmRk9STT1JUUZSQkEmaWQ9NkY0RDZBN0VCRUY2QTYyQkI3QkEwNEFDRDNCRkQ3Qzc3ODI4QTJDNQ&ntb=1'
    },
    answer:{
        type:String,
        required:[true,'Answer is required'],
    },
},
{timestamps:true}
);

//export
module.exports = mongoose.model('User',userSchema);