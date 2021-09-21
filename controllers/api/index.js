const router = require('express').Router();

const carRoutes = require('./carRoutes');
const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');


router.use('/cars', carRoutes);

router.use('/review', reviewRoutes);

router.use('/users', userRoutes);


module.exports = router;
