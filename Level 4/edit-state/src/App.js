import React, {useState} from 'react';
import Post from './Post';
import Form from './Form';

function App() {
  const [blogPost, setBlogPost] = useState([
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
  console.log("updateBlog function in app.js was called")
  console.log("the id of the item is: ", id)
  console.log("the object is: ", updateBlog)

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

  const addNewItem = (newItem) => {
    setBlogPost(prevState=>[...prevState, newItem])
  }

  const list = blogPost.map((post, index) => <Post
    key = {index+post.title}
    title = {post.title}
    description = {post.description}
    updateBlog={updateBlog}
    id={index}
   />)


  return (
    <div className="app">
      <h2>Add New Blog Post</h2>
      <Form submit={addNewItem}/>
      <h2>List of Blogs</h2>
      {list}
    </div>
  );
}

export default App;
