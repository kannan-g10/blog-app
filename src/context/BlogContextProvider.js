import { useEffect, useState } from 'react';

import { BlogContext as context } from './BlogContext';
import { API_URL } from '../constants/api-url';

const BlogContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [blogs, setBlogs] = useState([]);
  const [isPosting, setIsPosting] = useState(-1);
  const [putId, setPutId] = useState('');

  const changeModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const changePosting = (id, edit) => {
    setPutId(id);
    setIsPosting(edit);
  };

  const getAllBlogs = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      console.log(err);
    }
  };

  const postBlog = async (title, imageUrl, description) => {
    try {
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

  const putBlog = async (title, imageUrl, description) => {
    try {
      await fetch(API_URL + '/' + putId, {
        method: 'put',
        body: JSON.stringify({ title, imageUrl, description }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      getAllBlogs();
      changePosting('', -1);
    } catch (err) {
      console.log(err);
    }
  };

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
      value={{
        isModalOpen,
        changeModal,
        blogs,
        postBlog,
        putBlog,
        deleteBlog,
        isPosting,
        changePosting,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default BlogContextProvider;
