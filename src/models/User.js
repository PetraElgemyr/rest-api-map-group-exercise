const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	userName: {
		type: String,
	},
	password: {
		type: String,
	},
	email: {
		type: String,
	},
})
