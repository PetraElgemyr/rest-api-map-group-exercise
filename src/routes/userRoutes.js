const express = require('express')
const router = express.Router()

const { getAllUsers, createNewUser, updateUserById, deleteUserById } = require('../controllers/userController')

router.get('/', getAllUsers)

router.post('/', createNewUser)

router.put('/:userId', updateUserById)

router.delete('/:userId', deleteUserById)

module.exports = router
