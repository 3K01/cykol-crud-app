import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/postApi";
import EditPost from "./EditPost";
import { useState } from "react";


function PostList({ posts, setPosts, deletePost, updatePostState }) {

  const [editingPost, setEditingPost] = useState(null);


  const {
    data,
    isLoading,
    isError
  } = useQuery({

    queryKey: ["posts"],

    queryFn: getPosts

  });


  if (isLoading) {
    return <p>Loading posts...</p>;
  }


  if (isError) {
    return <p>Error loading posts</p>;
  }


  if (posts.length === 0 && data) {
    setPosts(data);
  }


    return (
    <div className="post-container">

      <h2>Posts</h2>

      {posts.map((post) => (

        <div key={post.id} className="post-card">

          <h3>{post.title}</h3>

          <p>{post.body}</p>


          <button onClick={() => deletePost(post.id)}>
            Delete
          </button>


          <button onClick={() => setEditingPost(post)}>
            Edit
          </button>

        </div>

      ))}


      {editingPost && (

        <EditPost
          post={editingPost}
          updatePostState={updatePostState}
        />

      )}

    </div>
  );
}


export default PostList;