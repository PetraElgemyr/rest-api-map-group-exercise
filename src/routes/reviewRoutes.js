const express = require('express')
const router = express.Router()

const { getAllReviews, createNewReview, deleteReviewById } = require('../controllers/reviewController')

router.get('/', getAllReviews)

router.post('/', createNewReview)

router.delete('/:reviewId', deleteReviewById)

module.exports = router
