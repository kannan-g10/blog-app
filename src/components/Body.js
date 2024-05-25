import { useContext } from 'react';
import emptyImg from '../assets/image.png';
import { BlogContext } from '../context/BlogContext';

const Body = ({ blog, onClose }) => {
  const { title, imageUrl, description, _id } = blog;
  const { deleteBlog, changePosting } = useContext(BlogContext);

  const handleEdit = () => {
    onClose();
    changePosting(_id, 0);
  };

  return (
    <div className="flex flex-col items-center border w-full lg:w-1/4 mx-auto p-5">
      <h2 className="text-3xl font-mono font-semibold my-2">{title}</h2>
      <img
        src={imageUrl || emptyImg}
        alt="blog-image"
        className="my-2 w-40 h-20"
      />
      <p className="text-lg font-medium m-2">{description}</p>
      <div>
        <button
          className="w-20 bg-indigo-500 px-3 py-1 rounded-md text-white font-medium mx-2"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="w-20 bg-yellow-400 px-3 py-1 rounded-md text-white font-medium mx-2"
          onClick={() => deleteBlog(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Body;
