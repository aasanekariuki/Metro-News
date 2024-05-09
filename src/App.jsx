<<<<<<< HEAD
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
=======
import React from 'react'
import SearchBar from './components/SearchBar'
import NewsItem from './components/NewsItem'
import NewsList from './components/NewsList'
>>>>>>> origin

const App = () => {
  return (
<<<<<<< HEAD
    <div>
      <Navbar/>
      <NewsBoard/>

    </div>
=======
    <>
    <SearchBar /><NewsItem />

    <div>
      <h1>News App</h1>
      <NewsList /> 
    </div>
    
    </>
    

>>>>>>> origin
  )
}
export default App;