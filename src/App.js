import React from 'react';
import Palette from './Palette';
import Seedcolor from './seedColor';

function App() {
  return (
    <div className="App">
     <Palette {...Seedcolor[2]}/>
    </div>
  );
}

export default App;
