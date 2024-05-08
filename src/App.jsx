import React from 'react'
import SearchBar from './components/SearchBar'
import NewsItem from './components/NewsItem'
import NewsList from './components/NewsList'

function App() {
  return (
    <>
    <SearchBar /><NewsItem />

    <div>
      <h1>News App</h1>
      <NewsList /> 
    </div>
    
    </>
    

  )
}

export default App