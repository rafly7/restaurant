const express = require('express');
const router = express.Router();

const PermissionService = require('../services/permission.service');
const permiss = require('../models/user.permission.model')
const permissionService = new PermissionService(permiss);

const { getAllPermission, addNewPermission, updatePermission, deletePermission } = require('../controllers/permission.controller')

const tokenValidation = require('../middlewares/token-validation');

router.use(tokenValidation)
router.get('/', (req, res, next) => getAllPermission(req, res, permissionService));
router.post('/', (req, res, next) => addNewPermission(req, res, permissionService))
router.put('/', (req, res, next) => updatePermission(req ,res, permissionService))
router.delete('/:id', (req, res, next) => deletePermission(req, res, permissionService))

module.exports = router;