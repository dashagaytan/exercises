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

//to update a blog item
//param updateItem will take in whatever new value the user wants to assign it to 
function updateBlog(id, updatedItem){
  setBlogPost(prevState => {
    return prevState.map((item, index)=> {
      if(index === id){
        return updatedItem
      }else{
        return item
      }
     })
  })
}

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
