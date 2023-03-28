import React, {useState} from 'react';
import Post from './Post';

function App() {
  const [blogPost, setBlogPost] = React.useState([
    {
    title: "Title 1",
    description: "description 1"
  }, 
  {
    title: "Title 2",
    description: "description 2"
  }

])

  const list = blogPost.map((post, index) => <Post
    key = {index+post.title}
    title = {post.title}
    description = {post.description}
   />)


  return (
    <div className="app">
      {list}
    </div>
  );
}

export default App;
