const logEvent = require('../events/myEmitter');
//const Product = require('../models/product.model');

class CategoryService {
    constructor(category) {
        this.category = category;
    }

    async getAllCategory() {
        let result;
        try {
            // result = await Product.findAll();
            result = await this.category.findAll();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-CATEGORY-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    async getCategoryById(id) {
        let result;
        try {
            // result = await Product.findAll();
            result = await this.category.findByPk(id);
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-CATEGORY-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    async createCategory(category) {
        let result;
        try {
            result = await this.category.create(category);
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'CREATE-CATEGORY-SERVICE-FAILED',
                logMessage: e
            });
        }
        return result;
    }

    async updateCategory(newCategory) {
        const category = await this.category.findByPk(newCategory.id);
        category.category_name = newCategory.category_name;
        let result;
        try {
            result = await category.save();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-CATEGORY-SERVICE-FAILED',
                logMessage: e
            });
        }
        return result;
    }

    async deleteCategory(categoryId) {
        const category = await this.category.findByPk(categoryId);
        let result;
        try {
            result = await category.destroy();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'DELETE-CATEGORY-SERVICE-FAILED',
                logMessage: e
            });
        }
        return result;
    }
}

module.exports = CategoryService;