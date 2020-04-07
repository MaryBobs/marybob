import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';
import NotFound from './components/NotFound';
import PostForm from './components/PostForm';
import Message from './components/Message.js';


class App extends Component {
  state = {
    posts: [],
    message: null
  };

  addNewPost = (post) => {
    post.id = this.state.posts.length + 1;
    post.slug = encodeURIComponent( post.title.toLowerCase().split(" ").join("-"));
    this.setState({
      posts: [...this.state.posts, post],
      message: "saved"
    });
    setTimeout(() => {
      this.setState({ message: null});
    }, 1600);
  };

  render() {
    return (
      <Router>
      <div className="app">
        MARYBOBS
        <Header />
        {this.state.message && <Message type={this.state.message} />}
        <Switch>
          <Route exact path="/"
          render={() => <Posts posts={this.state.posts} />}
          />
          <Route path="/post/:postSlug"
          render={props => {
            const post = this.state.posts.find(post => post.slug === props.match.params.postSlug);
            if (post)
            return <Post post={post} />;
            else return <NotFound />;
          }}
          />
          <Route exact path="/new" render={() => (<PostForm addNewPost={this.addNewPost}/>)} />
          <Route component={NotFound} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;