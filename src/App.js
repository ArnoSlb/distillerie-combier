import React, {
  lazy,
  Suspense,
  useRef,
  useState
} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useIntersectionObserver from './useIntersectionObserver';
import useDeviceDetect from './useDeviceDetect';

import Map from './Components/Map/Map';
import Video from './Components/Video2/Video2';
import VideoMobile from './Components/VideoMobile/VideoMobile';
import Empty from './Components/Empty/Empty';
// import Scene360 from './Components/Scene360/Scene360';
import Scene360Loader from './Components/Scene360_Loader/Scene360Loader';
import BottleHub from './Components/BottleHub/BottleHub';
import Header from './Components/Header/Header';
import AcceptOver18 from './Components/AcceptOver18/AcceptOver18';
import Scene360Mobile from './Components/Scene360/Scene360';
import MentionsLegales from './Components/MentionsLegales/MentionsLegales';

import { disablePageScroll, enablePageScroll, clearQueueScrollLocks } from 'scroll-lock';

import './App.css';

const Scene360 = lazy(() => import('./Components/Scene360/Scene360'))

function App() {

  const Scene360Section = useRef(null);
  const isScene360Visible = useIntersectionObserver(Scene360Section);
  const { isMobile } = useDeviceDetect();

  // console.log(isMobile)

  const getRandomColor = () => {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  const [langSelected, setLangSelected] = useState('FR')

  const modifySetLangSelected = (lang) => {
    setLangSelected(lang)
  }

  // const {scrollTop, scrollHeight, clientHeight} = document.documentElement

  // console.log(scrollTop, clientHeight, scrollHeight, document.documentElement, window.pageYOffset)

  // window.scrollTo({
  //   top: 0,
  //   left: 0,
  // });

  // console.clear();

  return (
    <Routes>
          <Route path="/mentionslegales" element={<MentionsLegales langSelected={langSelected}/>}></Route>
          <Route path="*" element={
            <div className="App">
            <Header func={modifySetLangSelected}/>
      
            {!isMobile && <AcceptOver18 langSelected={langSelected}/>}
      
            {isMobile == true ?
            <VideoMobile langSelected={langSelected}/>
            : 
            <Map langSelected={langSelected}/>
            // <Video langSelected={langSelected}/>
            }
      
            {isMobile == true ?
              <Scene360Mobile langSelected={langSelected}/>
            : 
              <section ref={Scene360Section}>
                {isScene360Visible && (
                    <Suspense fallback={<Scene360Loader langSelected={langSelected}/>}>
                      <Scene360 langSelected={langSelected}/>
                    </Suspense>
                )}
              </section>
            }
            
            <BottleHub langSelected={langSelected}/>
            {/* <Video/> */}
            {/* <Empty randomColor={getRandomColor()}/> */}
          </div>
          }
          ></Route>
    </Routes>
  );
}

export default App;
