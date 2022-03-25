import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Topbar from "./components/Topbar"
import Home from "./pages/Home"
import More from "./pages/More"
import Download from './pages/Download'
import PatchNotes from './pages/PatchNotes'


ReactDOM.render(
  <>
    <Router>
      <Topbar/>
      <Route exact path="/" component={Home}/>
      <Route path="/download" component={Download}/>
      <Route path="/more" component={More}/>
      <Route path="/patchnotes" component={PatchNotes}/>
    </Router>
  </>,
  document.getElementById('main')
);