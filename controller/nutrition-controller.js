const NutritionData = require('../models/nutritions-models');
const NutritionSchema = require('../models/nutritions-models');

const CreateNutritionData = async (req, res) => {
    try {
        const { name, date, calories, protein, carbs, fat,userId } = req.body;
        const createNutritionData = await NutritionSchema.create({
            date,name, calories, protein, carbs, fat,userId
        })
        // const nutrition = new Nutrition({ date, calories, protein, carbs, fat });
        await createNutritionData.save();
        res.status(201).json({
             message: 'Nutrition data saved successfully',
             response:createNutritionData
     });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

}


const getNutritionData = async (req, res) => {
    try {
        const data = await NutritionData.findOne({ userId: req.params.id });
        res.status(201).send({
            data
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

}

module.exports = { CreateNutritionData,getNutritionData };