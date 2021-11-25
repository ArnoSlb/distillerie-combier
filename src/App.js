import Map from './Components/Map/Map';
import Video from './Components/Video/Video';
import Empty from './Components/Empty/Empty';
import Scene360 from './Components/Scene360/Scene360';
import BottleHub from './Components/BottleHub/BottleHub';


import { useState } from 'react';

import './App.css';

function App() {

  const getRandomColor = () => {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  return (
    <div className="App">
      <Map/>
      <Scene360/>
      <BottleHub/>
      <Empty randomColor={getRandomColor()}/>
      <Video/>
      <Empty randomColor={getRandomColor()}/>
    </div>
  );
}

export default App;
