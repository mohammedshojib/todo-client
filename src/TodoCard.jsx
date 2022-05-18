import React from "react";
import { toast } from "react-toastify";

const TodoCard = ({ todo, todolist, setTodolist }) => {
  //   const { name, description, id: _id } = todo;
  console.log(setTodolist);

  const deleteTodo = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://todo-by-shojib.herokuapp.com/todo/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = todolist.filter((newTodo) => newTodo._id !== id);
          setTodolist(remaining);

          toast("Car deleted succsessfully");
        });
    }
  };
  return (
    <div class="card w-90 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{todo.name}</h2>
        <p>{todo.description}</p>
        <div class="card-actions justify-center">
          <button
            class="btn btn-sm btn-error"
            onClick={() => deleteTodo(todo._id)}
          >
            Delete ToDO
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
