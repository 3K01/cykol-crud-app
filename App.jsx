import { useState } from "react";

import AddPost from "./components/AddPost";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";


function App() {

  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);


  const postsPerPage = 10;


  const addPost = (post) => {

    setPosts([post, ...posts]);

  };


  const deletePost = (id) => {

    setPosts(
      posts.filter(post => post.id !== id)
    );

  };


  const updatePostState = (updatedPost) => {

    setPosts(
      posts.map((post) =>
        post.id === updatedPost.id
          ? updatedPost
          : post
      )
    );

  };


  const lastPostIndex = currentPage * postsPerPage;

  const firstPostIndex = lastPostIndex - postsPerPage;


  const currentPosts = posts.slice(
    firstPostIndex,
    lastPostIndex
  );


  const totalPages = Math.ceil(
    posts.length / postsPerPage
  );


  return (

    <div className="app">

      <h1>Cykol Solutions</h1>

      <p>CRUD API Management System</p>


      <AddPost 
        addPost={addPost}
      />


      <PostList

        posts={currentPosts}

        setPosts={setPosts}

        deletePost={deletePost}

        updatePostState={updatePostState}

      />


      <Pagination

        currentPage={currentPage}

        totalPages={totalPages}

        setCurrentPage={setCurrentPage}

      />


    </div>

  );

}


export default App;