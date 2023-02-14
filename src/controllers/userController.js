const User = require('../models/User')
const { NotFoundError, BadRequestError } = require('../utils/errors')

exports.getAllUsers = async (req, res, next) => {
	res.send('User get all users')

	//Om servern kraschar: return statusCode 500 eller 503
	//exkludera id, password
}

exports.createNewUser = async (req, res, next) => {
	res.send('User should be created')

	// 	// If (no name || name is empty string) respond bad request
	// 	if (!name) throw new BadRequestError('You must provide a name')

	//checka om id redan finns för en viss user
	//if(idExists) { gör nytt id }

	//if (success)
	// return res
	// 	.setHeader('Location', `/api/v1/users/${newUser._id.toString()}`)
	// 	.status(201)
	// 	.json(newUser)
}

exports.updateUserById = async (req, res, next) => {
	res.send('User should be updated')

	//if (!idExsist) throw new NotFoundError('This user id does not exist')

	// if (!admin) return response.sendStatus(403)}
	//ej behörighet
}

exports.deleteUserById = async (req, res, next) => {
	res.send('User should get deleted')
	//Om användare ej går att hitta med id
	// if (!user) throw new NotFoundError('This user id does not exist')

	// if (!admin) return response.sendStatus(403)}
	//ej behörighet
}
