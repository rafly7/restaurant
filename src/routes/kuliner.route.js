const express = require('express');
const router = express.Router();
const KulinerService = require('../services/kuliner.service');
const {addNewKuliner, getKulinerList, deleteKuliner, updateKuliner} = require("../controllers/kuliner.controller");
const tokenValidation = require('../middlewares/token-validation');
const kuliner = require('../models/kuliner.model');

const kulinerService = new KulinerService(kuliner);

router.get('/', (req, res, next) => getKulinerList(req, res, kulinerService));
router.use(tokenValidation);
router.post('/', (req, res, next) => addNewKuliner(req, res, kulinerService));
router.delete('/:id', (req, res, next) => deleteKuliner(req, res, kulinerService));
router.put('/', (req, res, next) => updateKuliner(req, res, kulinerService));

module.exports = router;