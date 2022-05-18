import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TodoCard from "./TodoCard";

const Home = () => {
  const [todolist, setTodolist] = useState([]);
  const todoSubmite = (event) => {
    event.preventDefault();
    const addTodo = {
      name: event.target.name.value,
      description: event.target.description.value,
    };
    //<===== UPLOAD CAR ====>
    const url = "https://todo-by-shojib.herokuapp.com/mytodo";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Todo added succsessfully");
      });
  };

  useEffect(() => {
    fetch("https://todo-by-shojib.herokuapp.com/todo")
      .then((res) => res.json())
      .then((data) => setTodolist(data));
  }, []);
  return (
    <>
      <div class="hero min-h-screen bg-base-200">
        <div className="lg:w-4/5 w-95">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
              <h1 class="text-5xl font-bold">My Special ToDo App</h1>
              <p class="py-6">
                Todo app stant for list your daily task and you can add your
                inmportant notes
              </p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <form action="" onSubmit={todoSubmite}>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Name</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      class="input input-bordered"
                      required
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Discription</span>
                    </label>
                    <input
                      type="text-long"
                      required
                      name="description"
                      placeholder="Discription"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control mt-6">
                    <input
                      type="submit"
                      class="btn btn-primary"
                      value="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-5 w-4/5 m-auto mt-5">
          {todolist.map((todo) => (
            <TodoCard
              key={todo._id}
              todo={todo}
              todolist={todolist}
              setTodolist={setTodolist}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
