import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import '../App.css';
import BlogHeader from '../components/BlogHeader';
import Posts from '../components/Posts';
import Post from '../components/Post';
import NotFound from '../components/NotFound';
import PostForm from '../components/PostForm';
import Message from '../components/Message.js';
import SimpleStorage from 'react-simple-storage';
import Login from '../components/Login';
import firebase from '../firebase';

class Blog extends Component {
  state = {
    posts: [],
    message: null,
    isAuthenticated: false
  };

  componentDidMount() {
    const postsRef = firebase.database().ref("posts");
    postsRef.on("value", snapshot => {
      const posts = snapshot.val();
      const newStatePosts = [];
      for (let post in posts) {
        newStatePosts.push({
          key: post,
          slug: posts[post].slug,
          title: posts[post].title,
          content: posts[post].content
        });
      }
      this.setState({ posts: newStatePosts });
    });
  }

  getNewSlugFromTitle = (title) => 
    encodeURIComponent(title.toLowerCase().split(" ").join("-")
  );
  
  addNewPost = (post) => {
    const postsRef = firebase.database().ref("posts");
    post.slug = this.getNewSlugFromTitle(post.title);
    delete post.key;
    postsRef.push(post);
    this.setState({
      message: "saved"
    });
    setTimeout(() => {
      this.setState({ message: null})
    }, 1600);
  };

  updatePost = (post) => {
    const postRef = firebase.database().ref("posts/" + post.key);
    postRef.update({
      slug: this.getNewSlugFromTitle(post.title),
      title: post.title,
      content: post.content
    });
    this.setState({ message: "updated" });
    setTimeout(() => {
      this.setState({ message: null})
    }, 1600);
  };

  deletePost = (post) => {
    if (window.confirm(`Are you sure you want to Delete "${post.title}"?`)) {
      const postRef = firebase.database().ref("posts/" + post.key);
      postRef.remove();
      this.setState({ message: "deleted" });
      setTimeout(() => {
        this.setState({ message: null });
      }, 1600);
    }
  };

  onLogin = (email, password) => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => this.setState({ isAuthenticated: true }))
    .catch(error => console.error(error));
  }

  onLogout = () => {
    firebase
    .auth()
    .signOut()
    .then( () => {
      this.setState({ isAuthenticated: false });
          })
      .catch(error => console.error(error));
    };

  render() {
    return (
      <Router>
      <div className="app">
        MARYBOBS
        <SimpleStorage parent={this} />
        <BlogHeader isAuthenticated={this.state.isAuthenticated} onLogout={this.onLogout} />
        {this.state.message && <Message type={this.state.message} />}
        <Switch>
          <Route exact path="/"
          render={() => <Posts posts={this.state.posts} deletePost={this.deletePost} isAuthenticated={this.state.isAuthenticated}/>}
          />
          <Route path="/post/:postSlug"
          render={props => {
            const post = this.state.posts.find(post => post.slug === props.match.params.postSlug);
            if (post)
            return <Post post={post} />;
            else return <NotFound />;
          }}
          />
          <Route exact path="/login" render={() => !this.state.isAuthenticated ? (<Login onLogin={this.onLogin} />) : (
            <Redirect to="/" /> 
          ) } />
          <Route exact path="/new" render={() => this.state.isAuthenticated ? (
            <PostForm addNewPost={this.addNewPost} 
            post={{ key: null, slug: "", title: "", content: "" }} />) : (
              <Redirect to="/login" /> 
              ) } />
          <Route path="/edit/:postSlug" render={props => { 
            const post =this.state.posts.find(
              post => post.slug === props.match.params.postSlug
            );
            if (post && this.state.isAuthenticated) {
              return <PostForm post={post} updatePost={this.updatePost} />;
            } else if (post && !this.state.isAuthenticated) {
              return <Redirect to="/login" />;
            } else {
              return <Redirect to="/" />;
            }
          }} />
          <Route component={NotFound} />
        </Switch>
      </div>
      </Router>
    );
  }
}
export default Blog;