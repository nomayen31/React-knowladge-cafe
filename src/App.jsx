import Header from "./Components/Header/Header"
import './App.css'
import Blogs from "./Components/Blogs/Blogs"
import BookMarks from "./Components/BookMarks/BookMarks"
import { useState } from "react"
function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) =>{
      console.log('bookmark adding soon');
  }

  return (
    <>
     <Header></Header>
     <div className="md:flex max-w-7xl mx-auto">
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <BookMarks></BookMarks>
     </div>
    </>
  )
}

export default App


// 7-30
// 