const db = require('../../data/db-config')


const getAll = () => {
  // DO YOUR MAGIC
  // select * from accounts
  return db('accounts')
}

const getById = id => {
  // DO YOUR MAGIC
  // select * from accounts where id = 1
  return db("accounts").where('id',id).first()
}

const create = async account => {
  // DO YOUR MAGIC
  const [id] = db("accounts").insert(account)
  return getById(id)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  const [updatedId] = db("accounts").where("id", id).update(account)
  return getById(updatedId)
}

const deleteById = id => {
  // DO YOUR MAGIC
  const [DeleteId] = db("accounts").where("id", id).del()
  return DeleteId
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
