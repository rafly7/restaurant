const express = require('express');
const router = express.Router();

const kulinerRoutes = require('./kuliner.route')
const makananRoutes = require('./makanan.route')
const komentarRoutes = require('./komentar.route')
const permissionRoutes = require('./permission.route')
const userProfileRoutes = require('./user-profile.route')
const authRoutes = require('./auth.route')
const categoryRoutes = require('./category.route')
const reportingRoutes = require('./reporting.route')

const noRoute = require('./no.route');
const logRoute = require('./log.route');

router.use(logRoute);
router.use('/auth', authRoutes);
router.use('/makanan', makananRoutes)
router.use('/report', reportingRoutes)
//router.use('/product', productRoutes);
router.use('/category', categoryRoutes);
router.use('/kuliner', kulinerRoutes);
router.use('/komentar', komentarRoutes)
router.use('/permission', permissionRoutes)
router.use('/user-profile', userProfileRoutes)
router.use(noRoute);

module.exports = router;