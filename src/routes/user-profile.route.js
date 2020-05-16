const express = require('express');
const router = express.Router();

const UserProfileService = require('../services/user-profile.service');
const userprof = require('../models/user.profile.model')
const userProfileService = new UserProfileService(userprof);

const { getAllUserProfile, addNewUserProfile, updateUserProfile, deleteUserProfile } = require('../controllers/user-profile.controller')

const tokenValidation = require('../middlewares/token-validation');

router.use(tokenValidation)
router.get('/', (req, res, next) => getAllUserProfile(req, res, userProfileService));
router.post('/', (req, res, next) => addNewUserProfile(req, res, userProfileService))
router.put('/', (req, res, next) => updateUserProfile(req ,res, userProfileService))
router.delete('/:id', (req, res, next) => deleteUserProfile(req, res, userProfileService))

module.exports = router;