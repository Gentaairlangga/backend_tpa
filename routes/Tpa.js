const tpaController = require('../controller/TpaController')
const router = require('express').Router()

router.post('/input', (req, res) => {
  tpaController.inputTpa(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.post('/edit/:id', (req, res) => {
  tpaController.editTpa(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getalltpa', (req, res) => {
  tpaController.getallTpa(req.query)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.post('/gethaversine', (req, res) => {
  tpaController.getHaversine(req.body.lat, req.body.lng)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/get/:id', (req, res) => {
  tpaController.getByid(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.get('/hapus/:id', (req, res) => {
  tpaController.deleteTpa(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router