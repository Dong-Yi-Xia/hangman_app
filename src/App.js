import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import Notification from './components/Notification'
import Popup from './components/Popup'
import {showNotification as show} from './helpers/helpers'



// const words = ['app', 'programming', 'interface', 'wizard'];
// let selectedWord = words[Math.floor(Math.random() * words.length)];

// https://random-word-api.herokuapp.com/word



function App() {
  const [selectedWord, setSelectedWord] = useState('')
  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false)


  const getRandomWord = async () => {
      let res = await fetch('https://random-word-api.herokuapp.com/word')
      let data = await res.json()
      console.log(data[0])
      setSelectedWord(data[0])
  }

  useEffect(() => {
      getRandomWord()
  }, [])


  useEffect(() => {
    const handleKeydown = evt => {
      const { key, keyCode } = evt
      // console.log(key)
      if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              //create a new array, by spreading in the currentLetters
              setCorrectLetters(currentLetters => [...currentLetters, letter])
            } else {
              show(setShowNotification)
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              //create a new array, by spreading in the currentLetters
              setWrongLetters(currentLetters => [...currentLetters, letter])
            } else {
              show(setShowNotification)
            }
          }
        }
       
        else if(key === 'Enter') playAgain()
     }

    window.addEventListener('keydown', handleKeydown)

    //cleanup so there is only 1 event listner when rerender
    return () => window.removeEventListener('keydown', handleKeydown)

    //empty [] will be render on inital render. Having dependences when updated, this function will be called
  }, [selectedWord, correctLetters, wrongLetters, playable])


  function playAgain(){
    setPlayable(true)
    setCorrectLetters([])
    setWrongLetters([])
    getRandomWord()
  }

 

  return (
    <div className='main'>
      <Header />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
        <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
        <Notification showNotification={showNotification}/>
    </div>
  );
}

export default App;
