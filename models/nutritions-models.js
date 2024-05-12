// const mongoose = require('mongoose')
const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;
const yourSchema = new Schema({
    name:{type:String},
    date:{type:String}, 
    calories:{type:String},
    protein:{type:String},
    carbs:{type:String},
    fat:{type:String},
    userId:{
        type:String,
    },
}, {timestamps: true})
const NutritionData = mongoose.model('nutritiondata', yourSchema);

module.exports = NutritionData;