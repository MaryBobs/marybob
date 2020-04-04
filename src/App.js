import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';

class App extends Component {
  state = {
    posts: [
      {id: 1,
      title: "1st blog post",
      content: "welcome to my blog"},
      {id: 2,
      title: "Me again!",
      content: "todays project"},
      {id: 3,
      title: "next blog",
      content: "look at what I made today!"}
    ]
  }
  render() {
    return (
      <div className="app">
        MARYBOBS
        <Header />
        <Posts posts={this.state.posts}></Posts>
      </div>
    );
  }
}

export default App;