const Todo = require("../models/Todo.model");

module.exports.addTodo = async (req, res, next) => {
  try {
    const { title, description, priority, deadline } = req.body;
    const newTodo = new Todo({
      title: title,
      description: description,
      priority: priority,
      deadline: new Date(deadline),
    });
    const savedTodo = await newTodo.save();
    res.json({ status: "saved", savedTodo });
  } catch (err) {
    next(err);
  }
};

module.exports.delTodo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const TodoId = await Todo.findById(id);
    if (!TodoId) return res.json({ msg: "User not found" });
    await Todo.deleteOne({ _id: id });
    res.json({ msg: "Deleted Successfully!" });
  } catch (err) {
    next(err);
  }
};

module.exports.updateTodo = async (req, res, next) => {
  const id = req.params.id;
  const updatedFields = req.body;
  console.log(updatedFields);
  const oldTodo = await Todo.findById(id);
  if (!oldTodo) return res.json({ msg: "Todo not found" });
  let updatedTodo = await Todo.findByIdAndUpdate(id, updatedFields, {
    new: true,
  });
  res.send(updatedTodo);
};

module.exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (err) {
    next(err);
  }
};
