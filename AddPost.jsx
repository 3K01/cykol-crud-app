import { useState } from "react";
import { createPost } from "../api/postApi";


function AddPost({ addPost }) {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  const handleSubmit = async (e) => {

    e.preventDefault();


    if (!title || !body) {
      alert("Please fill in all fields");
      return;
    }


    const newPost = await createPost({
      title,
      body,
      userId: 1
    });


    addPost(newPost);


    setTitle("");
    setBody("");

  };


  return (

    <form 
      className="add-post"
      onSubmit={handleSubmit}
    >

      <h2>Add New Post</h2>


      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />


      <textarea
        placeholder="Post description"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />


      <button type="submit">
        Add Post
      </button>


    </form>

  );

}


export default AddPost;