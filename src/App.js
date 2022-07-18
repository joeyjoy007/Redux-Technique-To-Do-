import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Card } from 'antd';
import 'antd/dist/antd.css'; 

import SiderDemo from './components/Sider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">

<Router>
<SiderDemo/>
  

</Router>
    </div>
  );
}

export default App;
