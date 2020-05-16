const ProductService = require("../services/product.service");
const {getProductList, addNewProduct} = require("../controllers/product.controller");

let mockResponse;
let mockRequest;
let mockRequestId;
let productService;

describe('Controller Testing', () => {
    beforeAll(() => {
        productService = new ProductService();

        mockResponse = () => {
            const res = {};
            res.status = jest.fn().mockReturnValue(200);
            res.json = jest.fn().mockReturnValue(res);
            return res;
        };
        mockRequest = () => {
            const req = {};
            return req;
        };

        mockRequestId = () => {
            const req = {query: {id: '1'}};
            return req;
        };

        mockBodyRequest = () => {
            const req = {body: {productName: 'XYZ'}};
            return req;
        };
    });

    describe('Product Controller', () => {
        it('should call find product by id', async () => {
            const req = mockRequestId();
            const res = mockResponse();
            const id = '1';
            productService.getProductById = jest.fn(() => {
                return {id: id}
            });
            await getProductList(req, res, productService);
            expect(res.json).toHaveBeenCalledWith({id: '1'});
            expect(res.status).toHaveBeenCalledWith(200)
        });

        it('should response 500 when find product by id failed', async () => {
            const req = mockRequestId();
            const res = mockResponse();
            const id = '1';
            productService.getProductById = jest.fn(() => {
                throw new Error()
            });
            await getProductList(req, res, productService);
            expect(res.json).toHaveBeenCalledWith({});
            expect(res.status).toHaveBeenCalledWith(500)
        });

        it('should add a product', async () => {
            const req = mockBodyRequest();
            const res = mockResponse();
            const product = req.body;
            productService.createProduct = jest.fn((product) => {
                return {id: '1', productName: product.productName}
            });
            await addNewProduct(req, res, productService);
            expect(res.json).toHaveBeenCalledWith({id: '1', productName: product.productName});
            expect(res.status).toHaveBeenCalledWith(200)
        });
    });
});
