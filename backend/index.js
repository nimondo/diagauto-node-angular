const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000
var cors = require('cors')
app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users-mail/', db.getUserByEmail)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users-delete/:id', db.deleteUser)
app.get('/checklist/', db.getChecklist)
app.post('/checklist/', db.addChecklist)
app.put('/checklist/:id', db.updateChecklist)
app.put('/checklist-af/:id', db.updateAfternoonChecklist)
app.post('/checkhoraire/', db.getCheckHoraire)
app.get('/checkhoraire/:date1/:date2', db.getCheckHours)




app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})