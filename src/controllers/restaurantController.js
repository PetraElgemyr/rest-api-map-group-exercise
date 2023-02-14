const Restaurant = require('../models/Restaurant')
const { NotFoundError, BadRequestError } = require('../utils/errors')

exports.getAllRestaurants = async (req, res, next) => {
	res.send('Lol här kommer restauranger')

	//Om servern kraschar: return statusCode 500 eller 503
	//ekludera id
}

exports.getRestaurantById = async (req, res, next) => {
	res.send('Här kommer din valda resturang')

	// Find restaurant with that id
	// const Restaurant = await Restaurant.findById(restaurantId)

	// if(no restaurant) return 404
	// if (!restaurant) throw new NotFoundError('This restaurant id does not exist')

	//Om servern kraschar: return statusCode 500 eller 503
	// 	// respond with project data (200 OK)
	// 	return res.json(project)
	// }
	//exkludera id
}

exports.createNewRestaurant = async (req, res, next) => {
	res.send('skapar ny restaurangs')
	// 	// Get data from req.body and place in local variables
	// 	const name = req.body.name
	// 	const description = req.body.description

	// 	// If (no name || name is empty string) respond bad request
	// 	if (!name) throw new BadRequestError('You must provide a name')

	//checka om id redan finns för en viss restaurang
	//if(idExists) { gör nytt id }

	//if (success)
	// 	.setHeader('Location', `/api/v1/restaurants/${newRestaurant._id.toString()}`)
	// 	.status(201)
	// 	.json(newRestaurant)
}

exports.updateRestaurantById = async (req, res, next) => {
	res.send('Uppdaterad restaurang')

	//om restaurang ej finns
	// if (!restaurant) throw new NotFoundError('This restaurant id does not exist')

	//ej behörighet
	// if (!admin) return response.sendStatus(403)}

	//ofullständig information, exempelvis om användare råkat ta bort namn eller adress
	//if (input field value === "") return response.sendStatus 400 + message ("Fyll i fält")
}

exports.deleteRestaurantById = async (req, res, next) => {
	res.send('Borttagen restaurang')

	// if (!admin) return response.sendStatus(403)}
	//ej behörighet

	//Om restaurang ej går att hitta med id
	// if (!restaurant) throw new NotFoundError('This restaurant id does not exist')
}
