const express = require('express');
const usersControlers = require('../controllers/users.controller');
const router = express.Router();

router.get(('/all'),usersControlers.getAllUsers)
router.get(('/random'),usersControlers.getRandomUser)
router.post(('/save'),usersControlers.saveAuser)
router.patch(('/update/:id'),usersControlers.updateAuser)
router.patch(('/delete/:id'),usersControlers.deleteAuser)

module.exports = router;