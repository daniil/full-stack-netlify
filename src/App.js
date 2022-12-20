import { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import { apiBasePath } from './utils';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${apiBasePath}/posts`);
      const posts = res.data;
      setPosts(posts);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <main>
      <Posts posts={posts}/>
      <CreatePost fetchPosts={fetchPosts}/>
    </main>
  );
}

export default App;
