const mongoose = require('mongoose');

//schema
const categorySchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,'Category title is required'] 
        },
        imageUrl:{
            type:String,
            default:'https://stock.adobe.com/search?k=food+logo'
        },
    
}, {timestamps:true}
);

//export
module.exports = mongoose.model('Category',categorySchema);
