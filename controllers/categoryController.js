// CREATE CATEGORY
const categoryModel = require('../models/categoryModel');

const createCatController = async(req, res) => {
    try{
        const {title, imageUrl} = req.body;

        if(!title){
            return res.status(500).send({
                success: false,
                message: 'Please provide category title or image',
            });
        }

        const newCategory = new categoryModel({title, imageUrl });
        await newCategory.save();


        res.status(201).send({
            success: true,
            message: 'Category Created Successfully',
            newCategory,
        });

    } catch (error) {
        console.log(error); 
        res.status(500).send({
            success: false,
            message: 'Error in Create Category API',
            error: error.message,
        });
    }
};

//GET ALL CATEGORIES
const getAllCatController = async(req, res) => {
    try{
        const categories = await categoryModel.find({});
        if(!categories){
            return res.status(404).send({
                success: false,
                message: 'No Categories Found',
            });
        }
        res.status(200).send({
            success: true,
            totalCat: categories.length,
            categories,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Get All Categories API',
            error: error.message,
        });
    }
};

//UPDATE CATEGORY
const updateCatController = async(req, res) => {
    try{
        const {id} = req.params;
        const {title, imageUrl} = req.body;
        const updatedCategory = await categoryModel.findByIdAndUpdate(id, {title, imageUrl}, {new: true});
        if(!updatedCategory){
            return res.status(500).send({
                success: false,
                message: 'Category Not Found',
            });
        }
        res.status(200).send({
            success: true,
            message: 'Category Updated Successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Update Category API',
            error: error.message,
        });
    }
};

//DELETE CATEGORY
const deleteCatController = async(req, res) => {
    try{
        const {id} = req.params;
        if(!id){
            return res.status(500).send({
                success: false,
                message: 'Please provide category id',
            });
        }
        const category = await categoryModel.findById(id);
        if(!category){
            return res.status(500).send({
                success: false,
                message: 'No Category found with this id',
            });
        }
        await categoryModel.findByIdAndDelete(id);

        res.status(200).send({
            success: true,
            message: 'Category Deleted Successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Delete Category API',
            error: error.message,
        });
    }
};

module.exports = {createCatController, 
    getAllCatController, 
    updateCatController,
    deleteCatController};