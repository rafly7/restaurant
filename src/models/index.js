//const Category = require('./category.model');
//const Product = require('./product.model');
//const Order = require('./order.model');

const Kuliner = require('./kuliner.model')
const Category = require('./category.model')
const userProfile = require('./user.profile.model');
const userPermiss = require('./user.permission.model');
const Makanan = require('./makanan.model')
const dbAssociation = function dbAssociation() {
    // Category.hasMany(Kuliner);
    // Kuliner.belongsTo(Category);
    
    Category.hasMany(Makanan);
    Makanan.belongsTo(Category);

    userPermiss.hasMany(userProfile);
    userProfile.belongsTo(userPermiss);

    //Order.belongsToMany(Product, {through: 'orderItem'});
    //Product.belongsToMany(Order, {through: 'orderItem'});
};

module.exports = dbAssociation;
