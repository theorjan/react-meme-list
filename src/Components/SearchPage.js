/**
* Fetches JSON content from URL, and returnes the complete list to the SearchBar onChange
**/

import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MemeList from './MemeList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [memeListDefault, setMemeMetaListDefault] = useState();
  const [memeList, setMemeMetaList] = useState();

  const fetchData = async () => {
    return await fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(memeData => {
         // Spesific JSON child required
         setMemeMetaList(memeData.data.memes) 
         setMemeMetaListDefault(memeData.data.memes)
       });}

  const updateInput = async (input) => {
     const filtered = memeListDefault.filter(test => {
      return test.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setMemeMetaList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Meme List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <MemeList memeList={memeList}/>
    </>
   );
}

export default SearchPage

