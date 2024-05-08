// const mongoose = require('mongoose')
const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;
const yourSchema = new Schema({
    date:{type:String}, 
    calories:{type:String},
    protein:{type:String},
    carbs:{type:String},
    fat:{type:String},
    createdBy:{
        type:String,
    },
    createdDate:{
        type:Date,
        default:Date.now
    }

})
const NutritionData = mongoose.model('nutritiondata', yourSchema);

module.exports = NutritionData;