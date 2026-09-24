import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Usercontext from '../context.js';
import './home.css';
import axios from 'axios';

const Home = () => {
  const {
    userName,
    id,
    setId,
    setObject,
    todo,
    setTodo,
    date,
    setDate,
    status,
    setStatus,
    setUserName,
  } = useContext(Usercontext);

  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [alltodos, setAlltodos] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setUserName('');
    localStorage.clear();
    navigate('/login');
  };

  const handleedit = (todoid) => {
    axios
      .get(`http://localhost:3001/todo/${todoid}/${userName}`)
      .then((res) => {
        setTodo(res.data.todo);
        setDate(res.data.date);
        setStatus(res.data.status);
        setId(todoid);
        navigate('/home');
      })
      .catch((err) => console.log(err));
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!todo.trim() || !date) {
      alert('Please fill all the fields');
      return;
    }

    const currentTodoId = id !== '' ? id : Date.now().toString();

    axios
      .post('http://localhost:3001/addTodo', {
        todoid: currentTodoId,
        todo: todo.trim(),
        date,
        status,
        userName,
      })
      .then(() => {
        setTodo('');
        setDate('');
        setStatus('notdone');
        setCount((prev) => prev + 1);
        setId('');
        alert('Added successfully');
      })
      .catch((err) => console.log(err));
  };

  const handletodo = (todoid) => {
    if (!todoid && todoid !== 0) return;

    axios
      .get(`http://localhost:3001/todo/${todoid}/${userName}`)
      .then((res) => {
        setObject(res.data);
        navigate(`/todo/${todoid}/${userName}`);
      })
      .catch((err) => console.log(err));
  };

  const handledelete = (todoid) => {
    axios
      .delete(`http://localhost:3001/deleteTodo/${todoid}/${userName}`)
      .then(() => {
        alert('Deleted successfully');
        setCount((prev) => prev + 1);
      })
      .catch((err) => console.log(err));
  };
  const handleDone = (todoid) => {
    axios.put(`http://localhost:3001/updatestatus/${todoid}/${userName}`)
      .then(() => {
        alert('updated successfully');
        setCount((prev) => prev + 1);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (!userName) {
      setLoading(false);
      setAlltodos([]);
      return;
    }

    axios
      .get('http://localhost:3001/gettodo/' + userName)
      .then((result) => {
        setAlltodos(
          Array.isArray(result?.data?.message) ? result.data.message : []
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(
          err.response?.data?.message || 'Failed to load tasks'
        );
        setAlltodos([]);
      });
  }, [count, userName]);

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">
          Welcome {userName} to your to-do list
        </h1>
      </div>

      <div className="logout-wrap">
        <p className="logout-text">Do you want to exit?</p>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <form className="todo-form" onSubmit={handleAdd}>
        <div className="form-group">
          <label htmlFor="todo" className="form-label">
            Add a task:
          </label>

          <input
            type="text"
            id="todo"
            className="form-input"
            placeholder="E.g. Buy groceries..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <span className="form-label">Status:</span>

          <div className="radio-group">
            <label htmlFor="done" className="radio-label">
              <input
                type="radio"
                name="status"
                value="done"
                id="done"
                className="radio-input"
                checked={status === 'done'}
                onChange={() => setStatus('done')}
              />
              Done
            </label>

            <label htmlFor="notdone" className="radio-label">
              <input
                type="radio"
                name="status"
                value="notdone"
                id="notdone"
                className="radio-input"
                checked={status === 'notdone'}
                onChange={() => setStatus('notdone')}
              />
              Not Done
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="date" className="form-label">
            Due date:
          </label>

          <input
            type="date"
            id="date"
            className="form-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Task
        </button>
      </form>

      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="search-input"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error.length > 0 ? (
          <p>{error}</p>
        ) : alltodos.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          <div className="todos-list">
            <h1 className="home-title">Your Tasks</h1>

            {alltodos.map((todoo, index) => {
              const matchesSearch =
                todoo.todo
                  .replace(/\s+/g, '')
                  .toLowerCase()
                  .includes(search.replace(/\s+/g, '').toLowerCase()) ||
                search.trim() === '';

              if (!matchesSearch) {
                return null;
              }

              return (
                <div
                  key={todoo.todoid || index}
                  className={`todo-card ${todoo.status === 'done'
                    ? 'todo-done'
                    : 'todo-notdone'
                    }`}
                  onClick={() => handletodo(todoo.todoid)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handletodo(todoo.todoid);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="todo-number">
                    {index + 1}
                  </span>

                  <div className="todo-details">
                    <h3 className="todo-task">
                      {todoo.todo}
                    </h3>

                    <p className="todo-date">
                      📅 {todoo.date}
                    </p>
                  </div>

                  <span
                    className={`todo-status ${todoo.status === 'done'
                      ? 'status-done'
                      : 'status-notdone'
                      }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDone(todoo.todoid);
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {todoo.status === 'done'
                      ? '✅ Done'
                      : '⏳ Pending'}
                  </span>

                  <button
                    className="delete-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handledelete(todoo.todoid);
                    }}
                  >
                    Delete
                  </button>

                  <button
                    className="edit-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleedit(todoo.todoid);
                    }}
                  >
                    Edit
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

