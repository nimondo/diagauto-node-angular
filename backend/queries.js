const Pool = require('pg').Pool
const pool = new Pool({
  user: 'diagauto',
  host: 'localhost',
  database: 'diagauto',
  password: 'password',
  port: 5432,
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getUserByEmail = (request, response) => {
  const { email, password} = request.body

  pool.query('SELECT * FROM users WHERE email = $1 AND password=$2', [email, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const createUser = (request, response) => {
  const { name, username, email, password, role } = request.body

  pool.query('INSERT INTO users (name, username, email,password,role) VALUES ($1, $2, $3, $4, $5)', [name,username, email, password, role], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}
const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}
const addChecklist= (request, response) => {
  const { morning,afternoon,users_id} = request.body

  pool.query('INSERT INTO checklist (morning, afternoon, users_id) VALUES (to_timestamp($1/1000.0),to_timestamp($2/1000.0), $3)', [morning, afternoon, users_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Check added with ID: ${results.insertId}`)
  })
}
const updateChecklist= (request, response) => {
  const id = parseInt(request.params.id)
  const { morning, afternoon,users_id } = request.body

  pool.query(
    'UPDATE checklist SET morning = to_timestamp($1/1000.0), afternoon = to_timestamp($2/1000.0), users_id= $3 WHERE id = $4',
    [morning, afternoon, users_id, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Checklist modified with ID: ${id}`)
    }
  )
}
const updateAfternoonChecklist= (request, response) => {
  const id = parseInt(request.params.id)
  const { morning, afternoon,users_id } = request.body

  pool.query(
    'UPDATE checklist SET morning = $1, afternoon = to_timestamp($2/1000.0), users_id= $3 WHERE id = $4',
    [morning, afternoon, users_id, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Checklist modified with ID: ${id}`)
    }
  )
}
const getChecklist = (request, response) => {
  pool.query("SELECT a.name, a.username, a.email, b.morning, b.afternoon, b.users_id,b.id FROM users as a, checklist as b WHERE a.id = b.users_id and  date_trunc('day', b.morning)=current_date", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getCheckHoraire = (request, response) => {
const { date1, date2} = request.body
  pool.query("SELECT a.name, a.username, a.email, SUM(b.afternoon-b.morning) as nb_heure FROM users as a, checklist as b WHERE a.id = b.users_id and ( date_trunc('day', to_timestamp($1/1000.0))<=b.morning and to_timestamp($2/1000.0)>=b.afternoon) GROUP BY a.name, a.username, a.email ORDER BY nb_heure",[date1,date2],(error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getCheckHours = (request, response) => {
const { date1, date2} = request.params
  pool.query("SELECT a.name, a.username, a.email, SUM(b.afternoon-b.morning) as nb_heure FROM users as a, checklist as b WHERE a.id = b.users_id and ( date_trunc('day', to_timestamp($1/1000.0))<=b.morning and to_timestamp($2/1000.0)>=b.afternoon) GROUP BY a.name, a.username, a.email ",[date1,date2],(error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  addChecklist,
  updateChecklist,
  getChecklist,
  updateAfternoonChecklist,
  getCheckHoraire,
  getCheckHours,
}