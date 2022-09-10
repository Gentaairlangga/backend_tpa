const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TpaSchema = new Schema ({

  nama: {
    type: String
  },
  alamat: {
    type: String
  },
  ketuaTpa: {
    type: String
  },
  nomorTelphone: {
    type: String
  },
  email: {
    type: String
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  },
  deskripsi: {
    type: String
  }

})

module.exports = mongoose.model('tpa', TpaSchema)