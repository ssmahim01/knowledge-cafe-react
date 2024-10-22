import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (id, time) => {
   setReadingTime(readingTime + time);
   const remaining = bookmarks.filter(bookmark => bookmark.id !== id);
   setBookmarks(remaining);
  };

  return (
    <>
      <Header></Header>
      <div className='lg:flex md:max-w-7xl w-11/12 mx-auto pt-5'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks}
      readingTime={readingTime}
      ></Bookmarks>
      </div>
    </>
  )
}

export default App