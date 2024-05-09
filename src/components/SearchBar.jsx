import React from 'react'

function SearchBar({ searchInput, setSearch }) {
	function handleSearch(event){
		setSearch(event.target.value)
	  } 

    return (
		<div className='  text-left md:text-center p-5 ui large  icon input '>
			
		
			<input 
		
				type="text"
				placeholder="Search News"
				className="border-b-2 border-blue-600 outline-none  form-control me-2"
				value={searchInput}
				onChange= {handleSearch}
				
			/>

       <button className="ui button" type="submit">
          search
        </button>
			  
		</div>
	);
}



export default SearchBar