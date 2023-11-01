import Header from "./Components/Header/Header"
import './App.css'
import Blogs from "./Components/Blogs/Blogs"
import BookMarks from "./Components/BookMarks/BookMarks"
import { useState } from "react"
function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [ readingTime , setReadingTime] = useState(0);

  const handleMarkAsRead = (time, id)=>{
    const newReadingTime = readingTime + time ;
    setReadingTime(newReadingTime)
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmark)


    //  remove the read blog read  

  }
  const handleAddToBookmark = (blog) =>{
     const newBookMarks = [...bookmarks, blog]
     setBookmarks(newBookMarks)
  }

  return (
    <>
     <Header></Header>
     <div className="md:flex max-w-7xl mx-auto">
      <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
      <BookMarks readingTime={readingTime} bookmarks={bookmarks}></BookMarks>
     </div>
    </>
  )
}

export default App


// 7-30
// 