const NutritionSchema = require('../models/nutritions-models');

const CreateNutritionData = async (req, res) => {
    try {
        const { date, calories, protein, carbs, fat } = req.body;
        const createNutritionData = await NutritionSchema.create({
            date, calories, protein, carbs, fat
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

module.exports = { CreateNutritionData };