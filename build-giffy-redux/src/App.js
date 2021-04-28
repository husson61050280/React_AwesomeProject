import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './containers/Search';
import ImageList from './containers/ImageList';

function App() {
  return (
    <div className="App">
        <Search/>
        <ImageList/>

    </div>
  );
}

export default App;
