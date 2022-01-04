import Map from './Components/Map/Map';
import Video from './Components/Video/Video';
import Empty from './Components/Empty/Empty';
import Scene360 from './Components/Scene360/Scene360';
import BottleHub from './Components/BottleHub/BottleHub';
import Header from './Components/Header/Header';

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

  const scrollCount = () => {
    console.log(window.scrollY)
  }

  const [langSelected, setLangSelected] = useState('FR')

  const modifySetLangSelected = (lang) => {
    setLangSelected(lang)
  }

  return (
    <div className="App" onChange={scrollCount}>
      <Header func={modifySetLangSelected}/>
      <Map langSelected={langSelected}/>
      <Scene360 langSelected={langSelected}/>
      <BottleHub langSelected={langSelected}/>
      {/* <Video/>
      <Empty randomColor={getRandomColor()}/> */}
    </div>
  );
}

export default App;
