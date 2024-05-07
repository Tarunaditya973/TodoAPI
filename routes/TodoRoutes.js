const express = require("express");
const {
  addTodo,
  delTodo,
  getTodos,
  updateTodo,
} = require("../controllers/Todo.contoller");
const router = express.Router();

router.post("/addTodo", addTodo);
router.get("/getTodos", getTodos);
router.patch("/updateTodo/:id", updateTodo);
router.delete("/delTodo/:id", delTodo);
module.exports = router;
