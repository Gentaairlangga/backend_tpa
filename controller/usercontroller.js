const UserModel = require('../model/User')
const bcrypt = require('bcrypt')
const { requestResponse } = require('../config')

exports.register = (data) =>
  new Promise((resolve, reject) => {
  UserModel.findOne({
    username : data.username
  }).then(user =>{
    if(user){
      resolve(requestResponse.gagal('Username Sudah Terdaftar'))
      }else{
        bcrypt.hash(data.password, 10, (err, hash) => {
        data.password = hash
        UserModel.create(data)
        .then(() => resolve(requestResponse.sukses('Berhasil Registrasi')))
        .catch(err => reject(requestResponse.serverError))
        })
    }
  })
})

exports.login = (data) =>
new Promise((resolve, reject) =>{
  UserModel.findOne({
    username: data.username
    }).then(user => {
      if (user) {
        if (bcrypt.compareSync(data.password, user.password)) {
          resolve(requestResponse.suksesLogin(user))
        } else {
          reject(requestResponse.gagal('Password Anda Salah'))
        }
      } else {
        reject(requestResponse.gagal('Username Tidak Terdaftar'))
      }
    })
})
