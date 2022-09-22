import './App.css';
import React from 'react';
import { Footer } from './components/Footer';
import Session from './components/Session';
import Register from './components/Register';
import Header from './components/Header'
import Orderlist from './components/Orderlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Createbutton from './components/Createbutton';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
import UserSession from './views/UserSession';

function App() {
  return (
      <div className='App'>
        <UserSession />
      </div>
  );
}

export default App;
