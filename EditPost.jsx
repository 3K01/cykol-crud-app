import { useState } from "react";
import { updatePost } from "../api/postApi";


function EditPost({ post, updatePostState }) {

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);


  const handleUpdate = async () => {

    const updated = await updatePost(post.id, {
      title,
      body,
      userId: 1
    });


    updatePostState(updated);

  };


  return (
    <div className="edit-post">

      <h3>Edit Post</h3>


      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />


      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />


      <button onClick={handleUpdate}>
        Save
      </button>


    </div>
  );
}


export default EditPost;