import React from 'react';
import ReactDOM from 'react-dom/client';

import BlogContextProvider from './context/BlogContextProvider';
import App from './App';

const Index = () => {
  return (
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Index />);
