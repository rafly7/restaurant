const express = require('express');
const router = express.Router();
const KomentarService = require('../services/komentar.service');
const {addNewKomentar, getKomentarList, deleteKomentar, updateKomentar} = require("../controllers/komentar.controller");
const tokenValidation = require('../middlewares/token-validation');
const komentar = require('../models/komentar.model');

const komentarService = new KomentarService(komentar);

router.use(tokenValidation);
router.get('/', (req, res, next) => getKomentarList(req, res, komentarService));
router.post('/', (req, res, next) => addNewKomentar(req, res, komentarService));
router.delete('/:id', (req, res, next) => deleteKomentar(req, res, komentarService));
router.put('/', (req, res, next) => updateKomentar(req, res, komentarService));

module.exports = router;