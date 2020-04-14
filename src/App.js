import React from 'react';
// import HomePageContainer from './containers/HomePageContainer';
import Blog from './containers/Blog';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <HomePageContainer></HomePageContainer> */}
     <Blog>Blog</Blog>
    </div>
  );
}

export default App;