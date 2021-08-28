import React, { useEffect } from 'react';
import io from "socket.io-client";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import Home from './pages/home';

function App() {
  useEffect(() => {
    const socket = io('http://localhost:4000')
    console.log(socket);
  }, []);

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
