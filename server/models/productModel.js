const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required : [true , "Please enter the name"]
        
    },
    description: {
        type: String,
        required : [true , "Please enter the description"]
    },


       price: {
        type: Number,
        required: [true , "Please enter the price"]
    },
    ratings: {
        type: Number,
        required : [true , "Please enter the rating"]
    },
    image: [
        
        {
        public_id : {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
    ],
    category : {
        type: String,
        required : [true , "Please enter the price"]
    },
    Stock : {
        type: Number,
        required : [true , "Please enter the rating"],
        maxLength : [4 ,"cant exceed 4"],
        default:0,
    },
    numOfReviews: {
        type: Number,
        default:0
    },
    reviews: [
        {
            user: {
                type : mongoose.Schema.ObjectId,
                ref : "User",
                required: true
            },
            name:{
                type: String,
                required: true
            },
            rating : {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required: true
    },
    createdAt : {
      type: Date,
      default : new Date 
    }
})

module.exports = new mongoose.model('Product', productSchema); 