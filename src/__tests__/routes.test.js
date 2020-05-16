const request = require('supertest');
const server = require("../server");
const connection = require('../../config/dbConn');
const dbAssociation = require('../models');
const SysUser = require('../models/user.model');
const Product = require('../models/product.model');
const bcrypt = require('bcryptjs');


let token;
let product;

async function loginUser() {
    const res = await request(server)
        .post('/auth')
        .send({
            userName: 'userDummy',
            userPassword: '123'
        });
    return res.body.token;
}

async function initDb() {
    dbAssociation();
    await connection.sync({force: true});
    var passwordHash = bcrypt.hashSync('123', 8);
    await SysUser.create(
        {userName: 'userDummy', userPassword: passwordHash, fullName: 'User Dummy', email: 'user@dummy.com'}
    );
    product = await Product.create(
        {productCode: 'XYZ', productName: 'Product XYZ'}
    );
}


describe('Route Testing', () => {
    beforeEach(async (done) => {
        await initDb();
        token = await loginUser();
        done();
    });

    describe('Product Route', () => {
        it('should not create a new product when no token', async () => {
            const res = await request(server)
                .post('/product')
                .send({
                    productName: 'Product Dummy',
                    productDescription: 'About this product'
                });
            expect(res.statusCode).toEqual(401)
        });

        it('should create a new product', async () => {
            const res = await request(server)
                .post('/product')
                .set('Accept', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send({
                    productName: 'Product Dummy',
                    productCode: 'XXX'
                });
            expect(res.statusCode).toEqual(200);
            expect(res.body.id).toBeDefined();
        });

        it('should get product by id', async () => {
            const res = await request(server)
                .get('/product?id=' + product.id)
                .set('Authorization', 'Bearer ' + token);
            expect(res.statusCode).toEqual(200);
            expect(res.body[0].productCode).toEqual('XYZ');
        });

        it('should get all products', async () => {
            const res = await request(server)
                .get('/product')
                .set('Authorization', 'Bearer ' + token);
            expect(res.statusCode).toEqual(200);
            expect(res.body.length).toEqual(1);
        })
    });

});