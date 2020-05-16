const express = require('express');
const router = express.Router();
const CategoryService = require('../services/category.service');
const {addNewCategory, getCategoryList, deleteCategory, updateCategory} = require("../controllers/category.controller");
const tokenValidation = require('../middlewares/token-validation');
const category = require('../models/category.model');

const categoryService = new CategoryService(category);

router.get('/', (req, res, next) => getCategoryList(req, res, categoryService));
router.use(tokenValidation);
router.post('/', (req, res, next) => addNewCategory(req, res, categoryService));
router.delete('/:id', (req, res, next) => deleteCategory(req, res, categoryService));
router.put('/', (req, res, next) => updateCategory(req, res, categoryService));

module.exports = router;