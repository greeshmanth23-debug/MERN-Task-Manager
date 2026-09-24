import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import NotFound from './components/NotFound';
import Todo from './components/Todo';
import './App.css';
import Home from './components/home';
import Usercontext from './context';
import Protectedroute from './components/protectedroute';


const App = () => {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [id, setId] = useState('');
  const [object, setObject] = useState({});
  const [todo, setTodo] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('notdone');

  return (
    <Usercontext.Provider value={{ userName, setUserName, id, setId, object, setObject, todo, setTodo, date, setDate, status, setStatus }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Protectedroute><Home /></Protectedroute>} />
          <Route path="/todo/:todoid/:userName" element={<Protectedroute><Todo /></Protectedroute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Usercontext.Provider>
  );
};

export default App;