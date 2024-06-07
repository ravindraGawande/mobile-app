const {getAllTodos, addTodos, updateTodos, deleteTodos}=require ('../controllers/todo.controller')

const router = require("expree").router()
router
.get("/",getAllTodos)
.post("/",addTodos)
.PUT("/id",updateTodos)
.delete("/id",deleteTodos)

module.exports = router