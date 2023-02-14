const mongoose = require('mongoose')
const Review = require('./Review')

const RestaurantSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			minLength: 3,
			maxLength: 50,
		},
		description: {
			type: String,
			maxLength: 500,
		},
		address: {
			type: String,
			required: true,
			minLength: 3,
			maxLength: 50,
		},
		takeaway: {
			type: Boolean,
			default: false,
		},
		catering: {
			type: Boolean,
			default: false,
		},
		renting: {
			type: Boolean,
			default: false,
		},
		outdoorSeating: {
			type: Boolean,
			default: false,
		},
		website: {
			type: String,
		},
		image: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Restaurant', RestaurantSchema)
