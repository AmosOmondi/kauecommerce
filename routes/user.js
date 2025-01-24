const express = require('express');
const router = express.Router();

const podi = require('../controllers/podi');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const {
	userById,
	read,
	update,
	purchaseHistory
} = require('../controllers/podi');

router.get('/podi/', isAdmin, (req, res)=>{
	res.json({
		user: req.body
	});
});




router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
	res.json({
		user: req.profile
	});
});

router.get('/:userId/', requireSignin, isAuth, read, (req, res) => {
	console.log("we inside")
});
router.get('/user/:userId', requireSignin, isAuth, read)

router.put('/user/:userId', requireSignin, isAuth, update)



router.param('userId', userById);

module.exports = router;
