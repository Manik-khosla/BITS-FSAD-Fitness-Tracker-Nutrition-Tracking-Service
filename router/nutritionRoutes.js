const express = require('express');
const router = express.Router();
const NutritionSchema = require('../models/nutritions-models');
const {CreateNutritionData} = require('../controller/nutrition-controller')


router.post('/create-nutritiondata',CreateNutritionData)

module.exports = router;