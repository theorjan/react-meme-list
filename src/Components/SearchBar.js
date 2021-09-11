/**
* Returns the inputted words to the SearchPage
**/

import React from 'react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="thekey"
     value={keyword}
     placeholder={"Search for a solid meme"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar