import React from 'react';
import axios from 'axios';
import { apiBasePath } from '../utils';

const CreatePost = ({ fetchPosts }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${apiBasePath}/posts`, {
        title: e.target.title.value,
        content: e.target.content.value
      });
      fetchPosts();
      e.target.reset();
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="input-field">
        <label htmlFor="title">Post Title</label>
        <input type="text" name="title" id="title"/>
      </div>
      <div className="input-field">
        <label htmlFor="content">Post Content</label>
        <textarea name="content" id="content"></textarea>
      </div>
      <div>
        <button type="submit">Create a Post</button>
      </div>
    </form>
  );
};

export default CreatePost;