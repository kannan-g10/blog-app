import { useEffect, useState } from 'react';

import { BlogContext as context } from './BlogContext';
import { API_URL } from '../constants/api-url';

const BlogContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [blogs, setBlogs] = useState([]);

  const changeModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const getAllBlogs = async () => {
    try {
      console.log('getting post');
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setBlogs(data);
    } catch (err) {
      console.log(err);
    }
  };

  const postBlog = async (title, imageUrl, description) => {
    try {
      console.log('Post');
      await fetch(API_URL, {
        method: 'post',
        body: JSON.stringify({ title, imageUrl, description }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      getAllBlogs();
    } catch (err) {
      console.log(err);
    }
  };
  const putBlog = () => {};

  const deleteBlog = async id => {
    try {
      await fetch(API_URL + '/' + id, { method: 'delete' });
      getAllBlogs();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <context.Provider
      value={{ isModalOpen, changeModal, blogs, postBlog, deleteBlog }}
    >
      {children}
    </context.Provider>
  );
};

export default BlogContextProvider;
