const getCategoryList = async (req, res, service) => {
    try {
        let category;
        if (req.query.id) {
            const id = req.query.id;
            category = await service.getCategoryById(id)
        } else {
            category = await service.getAllCategory();
        }
        res.status(200);
        res.json(category);
    } catch (e) {
        res.status(500);
        res.json({});
    }

};

const addNewCategory = async (req, res, service) => {
    try {
        const category = req.body;
        const newCategory = await service.createCategory(category);
        res.status(200);
        res.json(newCategory);
    } catch (e) {
        res.status(500);
        res.json({});
    }
};

const updateCategory = async (req, res, service) => {
    try {
    const category = req.body;
    const updatedCategory = await service.updateCategory(category);
    res.send(updatedCategory);
    } catch (e) {
        res.status(500);
        res.json({})
    }
};

const deleteCategory = async (req, res, service) => {
    try {
    const categoryId = req.params.id;
    console.log(categoryId)
    const deleteCategory = await service.deleteCategory(categoryId);
    res.send(deleteCategory);
    } catch (e) {
        res.status(500)
        res.json({})
    }
};

module.exports = {
    getCategoryList, addNewCategory, updateCategory, deleteCategory
};