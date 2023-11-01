import Header from "./Components/Header/Header"
import './App.css'
import Blogs from "./Components/Blogs/Blogs"
import BookMarks from "./Components/BookMarks/BookMarks"
import { useState } from "react"
function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) =>{
     const newBookMarks = [...bookmarks, blog]
     setBookmarks(newBookMarks)
  }

  return (
    <>
     <Header></Header>
     <div className="md:flex max-w-7xl mx-auto">
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <BookMarks bookmarks={bookmarks}></BookMarks>
     </div>
    </>
  )
}

export default App


// 7-30
// 