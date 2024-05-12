const express = require('express');
const router = express.Router();
const NutritionSchema = require('../models/nutritions-models');
const {CreateNutritionData, getNutritionData} = require('../controller/nutrition-controller')


router.post('/create-nutritiondata',CreateNutritionData)
router.get("/getNutritionData/:id", getNutritionData)

module.exports = router;