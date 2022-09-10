const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({

  username: {
    type: String
  },
  password:{
    type:String
  },
  jenisKelamin: {
    type: String
  },
  nomorHandphone: {
    type: String
  },
  level: {
    type: Number,
     // level 1 = admin, 2 = user biasa
    default: 2
  }

})

module.exports = mongoose.model('user', userSchema)