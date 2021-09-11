/*
React App to collect a spesific exposed JSON no-auth-APIs and filter the returned value.
For more no-auth-APIs go here:
https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
*/
import React from 'react';
import './App.css';
import SearchPage from './Components/SearchPage.js';

function App() {
  return (
    <div className="App">
      <SearchPage />
    </div>
  );
  
}

export default App;