import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Modal from './components/Modal';
import { BlogContext } from './context/BlogContext';

const App = () => {
  const { isModalOpen, changeModal, blogs } = useContext(BlogContext);

  return (
    <>
      {isModalOpen ? (
        <Modal onClose={changeModal} />
      ) : (
        <>
          <Header onClose={changeModal} />
          {blogs.map(blog => (
            <Body blog={blog} key={blog._id} />
          ))}
        </>
      )}
    </>
  );
};

export default App;
