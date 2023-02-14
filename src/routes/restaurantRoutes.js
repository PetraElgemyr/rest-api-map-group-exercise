const express = require('express')
const router = express.Router()
const {
	getAllRestaurants,
	getRestaurantById,
	createNewRestaurant,
	updateRestaurantById,
	deleteRestaurantById,
} = require('../controllers/restaurantController')

// Routes
// GET /api/v1/projects - Get all projects
router.get('/', getAllRestaurants)

// GET /api/v1/projects/:projectId - Get project by id
router.get('/:restaurantId', getRestaurantById)

// // POST /api/v1/projects - Create new project
router.post('/', createNewRestaurant)

// // PUT /api/v1/projects/:projectId - Update project (by id)
router.put('/:restaurantId', updateRestaurantById)

// // DELETE /api/v1/projects/:projectId - Delete project (by id)
router.delete('/:restaurantId', deleteRestaurantById)

module.exports = router
