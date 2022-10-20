import './App.css';
import {Timer} from './Timer';
import { useEffect, useState } from 'react';
import App from './App';

function Rounds() {

let [currentRound, setCurrentRound] = useState(0)
let [roundPaused, setRoundPaused] = useState(true)
let [listTimers, setListTimers] = useState([])
let [listRounds, setListRounds] = useState([<div className="rounds" id="0"><App></App></div>])

function addRounds(){
    setListRounds(listRounds.concat([<div className="rounds" id={`${listRounds.length}`}><App></App></div>]))
}

function deleteRounds(){
    if (listRounds.length>0){
      setListRounds(listRounds.splice(0, listRounds.length))
}
}

  return (
      <div>
      <button id="addbutton" onClick={()=>addRounds()}>Add Round</button>
      <button id="deletebutton" onClick={()=>deleteRounds()}>Delete Round</button>
      {listRounds.map(elem=>elem)}
      </div>
  );
}

export default Rounds;
