import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState, useEffect } from 'react';
import sound from "./sound.mp3"

export default function Timer(props){
     {/*
      FUNCTIONS/HOOKS
      1. useEffect()
      2. pauseTimer()
      3. resetTimer()
      4. playSound()
      */}

    {/*
      PROPERTIES
      1. numSecondsLeft, setNumSecondsLeft
      2. isPaused, setIsPaused
      3. initialSeconds, setInitialSeconds
      */}

      let [numSecondsLeft, setNumSecondsLeft] = useState(30)
      let [isPaused, setIsPaused] = useState(true)
      let [initialSeconds, setInitialSeconds] = useState(30)
      
      function pauseTimer(){
        setIsPaused(true)
        setNumSecondsLeft(numSecondsLeft)
        return () => clearTimeout(numSecondsLeft);
      }

      function resetTimer(){
        setIsPaused(true)
        setNumSecondsLeft(initialSeconds)
        return () => clearTimeout(numSecondsLeft);
      }

      function playSound(){
        let audio = new Audio(sound);
        audio.play()
      }

      useEffect(()=>{
        if (isPaused){
            pauseTimer()
            setNumSecondsLeft(numSecondsLeft)
        }else{
            if (numSecondsLeft>0){
              setTimeout(() => {
                setNumSecondsLeft(numSecondsLeft-1)
              }, 1000)
            }else{
              setIsPaused(!isPaused)
              return clearTimeout(numSecondsLeft)
            }
        }

        if (numSecondsLeft==0){
            setIsPaused(true)
            playSound("large.stanford.edu/courses/2007/ph210/otey2/wav/a2.wav")
        }
    }, [numSecondsLeft, isPaused])

      return (<>
      <br/>
      <input type="text" defaultValue="Exercise Name"></input>
      <p className="timerDisplay">{numSecondsLeft}</p>
      <button disabled={!isPaused?true:false} onClick={()=>setNumSecondsLeft(numSecondsLeft+1)}>+</button><button disabled={!isPaused?true:false} onClick={()=>numSecondsLeft>0?setNumSecondsLeft(numSecondsLeft-1): setNumSecondsLeft(0)}>-</button>
      <button className="startButton" onClick={()=>setIsPaused(!isPaused)}>{isPaused?"Start":"Pause"}</button>
      <button disabled={!isPaused?true:false} onClick={resetTimer}>Reset</button>
      <br/>
      <br/>
      </>)

}