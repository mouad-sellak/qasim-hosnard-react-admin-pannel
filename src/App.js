
import React, {useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import {AiFillSetting} from 'react-icons/ai'
import { TooltipComponent} from '@syncfusion/ej2-react-popups';
function App() {
  return (
    <div> 
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg" >
        <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}} >
          <TooltipComponent content="Settings" position="Top">
            <button type="button" 
            className="text-3xl p-3 hover:drop-shadow-xl 
            hover:bg-light-gray text-white
            " style={{backgroundColor:'blue', borderRadius:'50%' }} >
              <AiFillSetting />
            </button>
          </TooltipComponent>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
