const TpaModel = require('../model/Tpa')
const { requestResponse } = require('../config')
const haversine = require('haversine')

exports.inputTpa = (data) => 
  new Promise((resolve, reject) => {
    TpaModel.create(data)
      .then(() => {
        resolve(requestResponse.sukses('Berhasi Input TPA'))
      }).catch((e) => {
        resolve(requestResponse.gagal('Gagal Input TPA'))
      })
  })

exports.editTpa = (id, data) => 
  new Promise((resolve, reject) => {
    TpaModel.updateOne({
      _id: id
    }, data)
      .then(() => {
        resolve(requestResponse.sukses('Berhasi Edit TPA'))
      }).catch((e) => {
        resolve(requestResponse.gagal('Gagal Edit TPA'))
      })
  })

exports.getallTpa = (query) => 
  new Promise((resolve, reject) => {
    let newQuery = {}
    if (query) {
      newQuery.nama = new RegExp(query.nama, "i")
    }
    TpaModel.find(newQuery)
      .sort({_id: -1})
      .then(dataTpa => {
        resolve(requestResponse.suksesWithData(dataTpa))
      }).catch((e) => {
        reject(requestResponse.gagal('Gagal'))
      })
  })

exports.getHaversine = (lat, lng) => 
  new Promise((resolve, reject) => {
    TpaModel.find()
      .then(dataTpa => {
        const titikLokasiUser = {
          latitude: lat,
          longitude: lng
        }
        // const data = 
        const data = dataTpa.map(r => {
          return {
            nama: r.nama,
            latitude: r.latitude,
            longitude: r.longitude,
            jarak: haversine(titikLokasiUser, {
              latitude: r.latitude,
              longitude: r.longitude
            }, {unit: 'meter'})/1000,
            satuan: 'Km'
          }
        })
        resolve(requestResponse.suksesWithData(data))
      }).catch((e) => {
        reject(requestResponse.gagal('Gagal'))
      })
  })

exports.getByid=(id)=>
new Promise((resolve, reject) => {
  TpaModel.findOne({
    _id:id
  }).then(res => {
    resolve(requestResponse.suksesWithData(res))
  }).catch(() => reject(requestResponse.gagal('Gagal')))
})

exports.deleteTpa =(id)=>
new Promise((resolve, reject) => {
  TpaModel.deleteOne({
    _id:id
  }).then(res => {
    resolve(requestResponse.suksesWithData(res))
  }).catch(() => reject(requestResponse.gagal('Gagal')))
})