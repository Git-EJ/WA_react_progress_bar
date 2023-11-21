import { useState } from "react"
import ProgressBar from "../molecules/ProgressBar"


const Main = () => {

  const firstName = "Eric"
  const name= "Jaillant"
  const date= "21/11/2023"

  const [progress1, setProgress1] = useState(50)
  const [progress2, setProgress2] = useState(25)

  const decreaseToZero = () => {
    if (progress1 === 0 && progress2 === 0) {
      return 
    }
    setProgress1(0)
    setProgress2(0)
    console.log('decreaseToZero')
  }

  const increaseByFive = () => {
    if (progress1 >= 100 && progress2 >= 100) {
      return
    }
    if (progress1 === 95 && progress2 === 95) {
      setProgress1(100)
      setProgress2(100)
    }

    setProgress1(prevProgress => prevProgress + 5)
    setProgress2(prevProgress => prevProgress + 5)
    console.log('increaseByFive')
  }

  const increaseByTen = () => {
    if (progress1 >= 100 && progress2 >= 100) {
      return
    }

    if (progress1 === 95 && progress2 === 95) {
      setProgress1(100)
      setProgress2(100)
    }

    if (progress1 === 90 && progress2 === 90) {
      setProgress1(100)
      setProgress2(100)
    }
    
    setProgress1(prevProgress => prevProgress + 10)
    setProgress2(prevProgress => prevProgress + 10)
    console.log('increaseBy10')
  }


  return (
    <main className="main_wrapper">
      <div className="main_title">
        <p>Test technique WEB-ATRIO réalisé par {name} {firstName}</p>
        <p>réalisé le {date}</p>
      </div>

      <div className="main_progress_bar_wrapper">
        <ProgressBar progressBarTitle= {'Initialisation du test technique'} progress={progress1} />
        <ProgressBar progressBarTitle= {'Avancement de la phase de développement'} progress={progress2} />
      </div>

      <div className="main_buttons_container">
        <button className="main_button" onClick={decreaseToZero}>Remettre à zéro les compteurs</button>
        <button className="main_button" onClick={increaseByFive}>Ajouter 5%</button>
        <button className="main_button" onClick={increaseByTen}>Ajouter 10%</button>
      </div>
    </main>
  )
}

export default Main

