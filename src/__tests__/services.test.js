const ProductService = require('../services/product.service');
const Product = require('../models/product.model');
let product;
let productService;
describe('Services Testing', () => {
    describe('Product Service', () => {
        beforeAll(() => {
            product = new Product();
            productService = new ProductService(product);
        });
        it('should call get all product', async () => {
            product.findAll = jest.fn(() => {
                return {id: '1'}
            });
            let result = await productService.getAllProduct();
            expect(product.findAll).toBeCalledTimes(1);
            expect(result).toEqual({id: '1'});
        });
        it('should throw error when call get all product failed', async () => {
            let message;
            product.findAll = jest.fn(() => {
                throw new Error('dummy error');
            });
            try {
                await productService.getAllProduct();
            } catch (e) {
                message = e.message;
            }
            // expect(productService.getAllProduct()).rejects.toThrow(Error);
            expect(message).toBeTruthy();
            expect(message).toEqual('Error: dummy error');
        });

        it('should call get all product with paging', async () => {
            let limitParam = {limit: 1, offset: 1};
            product.findAndCountAll = jest.fn((limitParam) => {
                return {id: '1'}
            });
            let result = await productService.getAllProductPaging(1, 1);
            expect(product.findAndCountAll).toBeCalledTimes(1);
            expect(product.findAndCountAll).toBeCalledWith(limitParam);
            expect(result).toEqual({id: '1'});
        });

        it('should call create Product', async () => {
            let newProduct = {productName: '1'};
            product.create = jest.fn(() => {
                return {id: '1'}
            });
            let result = await productService.createProduct(newProduct);
            expect(product.create).toBeCalledTimes(1);
            expect(product.create).toBeCalledWith(newProduct);
            expect(result).toEqual({id: '1'});
        });
    });
});