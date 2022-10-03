const express = require('express');

const {homeCtrlFunction, storeCtrlFunction, aboutCtrlFunction, bunnyhatCtrlFunction, hoodCtrlFunction, stuffieCtrlFunction, twotoneCtrlFunction, cartCtrlFunction} = require('../controller/pagesCtrlFile.js');

const router = express.Router();

router.get('/', homeCtrlFunction);
router.get('/index.hbs', homeCtrlFunction);
router.get('/store.hbs', storeCtrlFunction);
router.get('/about.hbs', aboutCtrlFunction);
router.get('/bunny-hat.hbs', bunnyhatCtrlFunction);
router.get('/hood.hbs', hoodCtrlFunction);
router.get('/stuffie.hbs', stuffieCtrlFunction);
router.get('/two-tone.hbs', twotoneCtrlFunction);
router.get('/cart.hbs', cartCtrlFunction);

module.exports = router;








module.exports = router;
