const User = require('../models/User')

exports.getAllReviews = async (req, res, next) => {
	res.send('Här kommer alla reviews')

	//Om servern kraschar: return statusCode 500 eller 503
}

exports.createNewReview = async (req, res, next) => {
	res.send('Här är en ny review')

	//if(!authorised) return ngn kod om du ej är inloggad!

	//ofullständig information, exempelvis om användare ej fyllt i rating
	//if (input field value === "") return response.sendStatus 400 + message ("Fyll i fält")

	//if (success)
	// 	.setHeader('Location', `/api/v1/reviews/${newReview._id.toString()}`)
	// 	.status(201)
	// 	.json(newReview)
}

exports.deleteReviewById = async (req, res, next) => {
	res.send('Nu har du raderat en review')
	//Om review ej går att hitta med id
	// if (!review) throw new NotFoundError('This review id does not exist')

	// if (!admin) return response.sendStatus(403)}
	//ej behörighet
}
