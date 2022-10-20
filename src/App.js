import './App.css';
import Timer from './Timer';
import { useEffect, useState } from 'react';

function App() {
let [listElementsTimer, setListElementsTimer] = useState([<Timer className="timer" id="id0"></Timer>])
let [listRounds, setListRounds] = useState([])
let [roundStarted, setRoundStarted] = useState(false)

function addElem(){
    setListElementsTimer(listElementsTimer.concat([<Timer className="timer" id={`id${listElementsTimer.length}`}></Timer>]))
}

function deleteElem(){
    if (listElementsTimer.length>0){
      setListElementsTimer(listElementsTimer.splice(0, listElementsTimer.length-1))
}
}

function handleClick(){
  setRoundStarted(true)
}


  return (
    <>
    <div className="App">
      {/*
      COMPONENTS
      1. Timer component INSIDE Add/Delete Buttons component with seconds display and add or delete buttons with title as props
      3. Exercise Rounds component which renders and groups the Timers together with list of Timer components as props
      4. Repeat Button which repeats Rounds
      */}
      <button onClick={handleClick}>Start Round</button>
      <button id="addbutton" onClick={()=>addElem()}>Add Exercise</button>
      <button id="deletebutton" onClick={()=>deleteElem()}>Delete Exercise</button>
      <div>{listElementsTimer.map(elem=><div>{elem}</div>)}</div>
      </div>
      </>
  );
}

export default App;
