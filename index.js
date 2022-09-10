const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = 3010
const router = express.Router({mergeParams: true})
const cors = require('cors')

app.use(cors())

mongoose.connect('mongodb://localhost:27017/dataTpa',{
  useNewUrlParser: true,
}).then(()=> console.log('connect mongodb'))
.catch(err => console.log(err));
app.use(bodyParser.json({
  extended: true,
  limit: '50mb'
}));

app.use(bodyParser.urlencoded({
  extended:true,
  limit: '50mb'
}));


app.use('/user', require('./routes/user'))
app.use('/tpa', require('./routes/Tpa'))
app.use('/', (req, res) => {
  res.send('Api Aplikasi TPA Udah Nyala Ya....')
})
app.listen(port,function(){
  console.log(`Listening on port ${port}`)
}
);
