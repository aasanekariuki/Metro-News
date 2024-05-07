import React from 'react'

function SearchBar({ searchInput, setSearchInput }) {

    return (
		<div className='text-center p-5'>
			<h4 className="font-bold text-xl"></h4>
			<input 
				type="text"
				placeholder="Search News"
				className="border-b-2 border-gray-600 outline-none focus:border-green-500"
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
			/>
		</div>
	);
}



export default SearchBar