const express = require('express');
const router = express.Router();
const MakananService = require('../services/makanan.service');
const {addNewMakanan, getMakananList, deleteMakanan, updateMakanan} = require("../controllers/makanan.controller");
const tokenValidation = require('../middlewares/token-validation');
const makanan = require('../models/makanan.model');

const makananService = new MakananService(makanan);

router.get('/', (req, res, next) => getMakananList(req, res, makananService));
router.use(tokenValidation);
router.post('/', (req, res, next) => addNewMakanan(req, res, makananService));
router.delete('/:id', (req, res, next) => deleteMakanan(req, res, makananService));
router.put('/', (req, res, next) => updateMakanan(req, res, makananService));

module.exports = router;