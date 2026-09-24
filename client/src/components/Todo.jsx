import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Context from '../context.js';
import './todo.css';

const Todo = () => {
  const {
    object,
    setObject,
    setTodo,
    setDate,
    setStatus,
    setId
  } = useContext(Context);

  const { todoid, userName } = useParams();
  const navigate = useNavigate();

  const handleEdit = () => {
    if (!object) return;

    setTodo(object.todo || '');
    setDate(object.date || '');
    setStatus(object.status || 'notdone');
    setId(Number(todoid) || todoid);

    navigate('/home');
  };

  const handleDone = (todoid) => {
    axios
      .put(`http://localhost:3001/updatestatus/${todoid}/${userName}`)
      .then(() => {
        alert('updated successfully');
        setObject((prev) => ({
          ...prev,
          status: prev.status === 'done' ? 'notdone' : 'done'
        }));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!todoid || !userName) return;

    if (object?.todoid === todoid && object?.userName === userName) {
      return;
    }

    axios
      .get(`http://localhost:3001/todo/${todoid}/${userName}`)
      .then((res) => {
        setObject(res.data);
      })
      .catch((err) => console.log(err));
  }, [todoid, userName, object, setObject]);

  return (
    <div className="todo-page">
      <button
        className="back-btn"
        onClick={() => navigate('/home')}
      >
        ← Back to Tasks
      </button>

      <div className="todo-detail-card">
        <div className="todo-detail-header">
          <span
            className={`todo-status ${object.status === 'done'
              ? 'status-done'
              : 'status-notdone'
              }`}
            onClick={(e) => {
              e.stopPropagation();
              handleDone(todoid);
            }}
            style={{ cursor: 'pointer' }}
          >
            {object.status === 'done'
              ? '✅ Done'
              : '⏳ Pending'}
          </span>
        </div>

        <h1 className="todo-detail-title">
          {object?.todo || 'Loading...'}
        </h1>

        <div className="todo-detail-info">
          <div className="todo-detail-row">
            <span className="todo-detail-label">
              📅 Due Date
            </span>

            <span className="todo-detail-value">
              {object?.date || '...'}
            </span>
          </div>

          <div className="todo-detail-row">
            <span className="todo-detail-label">
              👤 Assigned to
            </span>

            <span className="todo-detail-value">
              {object?.userName || userName}
            </span>
          </div>
        </div>

        <button
          className="delete-btn"
          onClick={() => {
            axios
              .delete(
                `http://localhost:3001/deleteTodo/${todoid}/${userName}`
              )
              .then(() => {
                alert('Deleted successfully');
                navigate('/home');
              })
              .catch((err) => console.log(err));
          }}
        >
          Delete
        </button>

        <button
          className="edit-btn"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Todo;

