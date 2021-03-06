var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const path = require('path')
const dotenv = require('dotenv');
dotenv.config();

process.env.USER = 'timothy_tassin@hotmail.com'

var transport = {
    host: 'smtp.live.com',
    port: 587,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  }

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
      console.log('error')
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: process.env.USER,
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    console.log('response')
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})
app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(process.env.PORT || 3002, process.env.IP, function(){
  console.log(`The server is running on port ${process.env.PORT}`)
})