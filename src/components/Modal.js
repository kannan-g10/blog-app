import React, { useContext, useState } from 'react';
import ReactDom from 'react-dom';
import { BlogContext } from '../context/BlogContext';

const Modal = ({ onClose }) => {
  const { postBlog, putBlog, isPosting, changePosting } =
    useContext(BlogContext);

  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const handlePost = () => {
    onClose();
    if (isPosting == -1) {
      postBlog(title, imageUrl, description);
    } else {
      putBlog(title, imageUrl, description);
    }

    setTitle('');
    setImageUrl('');
    setDescription('');
  };

  const handleClose = () => {
    onClose();
    changePosting('', -1);
  };

  return ReactDom.createPortal(
    <>
      <div className="bg-black/60 h-screen" onClick={handleClose}></div>
      <div className="absolute w-full lg:w-1/3 bg-white top-1/4 lg:left-1/3">
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Title.."
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            className="border-2 border-zinc-400 outline-none p-1 m-2 text-lg"
          />
          <input
            type="text"
            placeholder="ImageUrl.."
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            required
            className="border-2 border-zinc-400 outline-none p-1 m-2 text-lg"
          />
          <input
            type="text"
            placeholder="description.."
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            className="border-2 border-zinc-400 outline-none p-1 m-2 text-lg"
          />
          <div>
            <button
              className="m-3 w-24 h-10 bg-amber-400 text-white font-semibold px-3 py-1 rounded"
              onClick={handlePost}
            >
              {isPosting ? 'Post' : 'Update'}
            </button>
            <button
              className="m-3 w-24 h-10 bg-rose-500 text-white font-semibold px-3 py-1 rounded"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('overlays')
  );
};

export default Modal;
