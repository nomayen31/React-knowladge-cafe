import Header from "./Components/Header/Header"
import './App.css'
import Blogs from "./Components/Blogs/Blogs"
import BookMarks from "./Components/BookMarks/BookMarks"
function App() {

  return (
    <>
     <Header></Header>
     <div className="md:flex">
      <Blogs></Blogs>
      <BookMarks></BookMarks>
     </div>
    </>
  )
}

export default App


// 7-30
// 