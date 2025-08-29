import React, { useEffect, useState, useRef } from 'react';
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const didMount = useRef(false);

  // Load from localStorage
  useEffect(() => {
    const tstring = localStorage.getItem("todos");
    if (tstring) {
      setTodos(JSON.parse(tstring));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (didMount.current) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      didMount.current = true;
    }
  }, [todos]);

  const addTask = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, { id: uuidv4(), todo, checked: false }]);
      setTodo("");
    }
  };

  const delTask = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  const editTask = (id) => {
    if (todo === "") {
      const toEdit = todos.find(item => item.id === id);
      if (toEdit) {
        setTodo(toEdit.todo);
        delTask(id);
      }
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const clearTasks = () => {
    setTodos([]);
  };

  const toggleCheck = (id) => {
    setTodos(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <>
      <Navbar />

      <div className="bg-slate-200 font-black min-h-[90vh] sm:min-h-[95vh] flex justify-center items-center">
        <div className="bg-white w-full max-w-[450px] min-h-[200px] my-10 sm:my-20 p-[30px] flex flex-col gap-8 justify-between rounded-md border border-black">

          <span className='mx-[20px] text-center'>
            <h1 className='text-4xl text-slate-600'>To-Do's</h1>
          </span>

          {/* Input + Add Button */}
          <div className="flex gap-5 w-[80%] mx-[20px] flex-col sm:flex-row flex-wrap items-center justify-between">
            <input
              type="text"
              onChange={handleChange}
              value={todo}
              className='border-1 h-[35px] hover:border-2 delay-25 duration-100 border-black rounded-md px-5 font-medium w-full sm:w-auto flex-1'
              placeholder="Enter a task..."
            />
            <button
              onClick={addTask}
              className='btn border-1 border-black flex justify-center items-center h-[40px] w-[45px] text-4xl font-medium text-white rounded-sm'
            >
              <lord-icon
                src="https://cdn.lordicon.com/efxgwrkc.json"
                trigger="hover"
                colors="primary:#ffffff"
                className="h-[25px]">
              </lord-icon>
            </button>
          </div>

          {/* Tasks List */}
          {todos.length > 0 ? (
            <div className='w-[80%] mx-[20px]'>
              {todos.map((item) =>
                <Tasks
                  key={item.id}
                  text={item.todo}
                  checked={item.checked}
                  onCheck={() => toggleCheck(item.id)}
                  onEdit={() => editTask(item.id)}
                  onDelete={() => delTask(item.id)}
                />
              )}
            </div>
          ) : (
            <div className='mx-[20px] ml-[40px] font-light text-gray-500'>
              No tasks added yet
            </div>
          )}

          {/* Footer */}
          <div className="w-[80%] mx-[20px] flex flex-col sm:flex-row gap-5 items-center font-medium justify-between">
            <p>
              There {todos.length === 1 ? 'is' : 'are'} currently {todos.length} task{todos.length === 1 ? '' : 's'}
            </p>
            <button
              onClick={clearTasks}
              className='btn border-1 border-black flex justify-center items-center py-[5px] px-[10px] text-white rounded-sm'
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
