const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		restaurant: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Restaurant',
			required: true,
		},
		reviewText: {
			type: String,
			maxLength: 100,
		},
		rating: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Review', ReviewSchema)
