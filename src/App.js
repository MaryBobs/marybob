import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';
import NotFound from './components/NotFound';


class App extends Component {
  state = {
    posts: [
      {id: 1,
      slug: "hello-post",
      title: "1st blog post",
      content: "welcome to my blog"},
      {id: 2,
      slug: "hello-again",
      title: "Me again!",
      content: "todays project"},
      {id: 3,
      slug: "hello-blog",
      title: "next blog",
      content: "look at what I made today!"}
    ]
  }
  render() {
    return (
      <Router>
      <div className="app">
        MARYBOBS
        <Header />
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
          <Route component={NotFound} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;