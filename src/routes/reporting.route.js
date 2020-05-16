const express = require('express');
const router = express.Router();
const ReportingService = require('../services/reporting.service');
const { getSumLike, getTerfavorit } = require("../controllers/reporting.controller");
const tokenValidation = require('../middlewares/token-validation');

const reportingService = new ReportingService();

router.use(tokenValidation);
router.get('/', (req, res, next) => getSumLike(req, res, reportingService));
router.get('/favorit', (req, res, next) => getTerfavorit(req, res, reportingService));
module.exports = router;