import { useState } from "react"
import ProgressBar from "../molecules/ProgressBar"


const Main = () => {

  const firstName = "Eric"
  const name= "Jaillant"
  const date= "21/11/2023"


  /**
   * 
   * @param {boolean} isChecked1
   * @param {boolean} isChecked2
   * @description state of the checkboxes for the progress bars, 
   *              when not check button not increase/decrease the progress bar
   * 
   */
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  }

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  }


  /**
   * 
   * @param {number} progress1
   * @param {number} progress2
   * @description state of the progress bars
   * 
  **/
  const [progress1, setProgress1] = useState(50)
  const [progress2, setProgress2] = useState(25)



  const decreaseToZero = () => {
    if ((progress1 && isChecked1 === 0)) {
      return 
    }

    if ((progress2 && isChecked2 === 0)) {
      return 
    }

    if (isChecked1) {
      setProgress1(0);
    }

    if (isChecked2) {
      setProgress2(0);
    }
  }


  const increaseByFive = () => {
    if (isChecked1 && progress1 >= 100) {
      return;
    }
  
    if (isChecked1) {
      const newProgress = progress1 + 5 > 100 ? 100 : progress1 + 5;
      setProgress1(newProgress);
    }

    if (isChecked2 && progress2 >= 100) {
      return;
    }
  
    if (isChecked2) {
      const newProgress = progress2 + 5 > 100 ? 100 : progress2 + 5;
      setProgress2(newProgress);
    }
  }


  const increaseByTen = () => {
    if (isChecked1 && progress1 >= 100) {
      return;
    }
  
    if (isChecked1) {
      const newProgress = progress1 + 10 > 100 ? 100 : progress1 + 10;
      setProgress1(newProgress);
    }

    if (isChecked2 && progress2 >= 100) {
      return;
    }
  
    if (isChecked2) {
      const newProgress = progress2 + 10 > 100 ? 100 : progress2 + 10;
      setProgress2(newProgress);
    }
  }


  return (
    <main className="main_wrapper">
      <div className="main_title">
        <p>Test technique WEB-ATRIO réalisé par {name} {firstName}</p>
        <p>réalisé le {date}</p>
      </div>

      <div className="main_progress_bar_wrapper">
  
        <ProgressBar  progressBarTitle= {'Initialisation du test technique'} 
                      progress={progress1} 
                      handleCheckboxChange={handleCheckboxChange1}
                      isChecked={isChecked1}
        />

        <ProgressBar  progressBarTitle= {'Avancement de la phase de développement'} 
                      progress={progress2} 
                      handleCheckboxChange={handleCheckboxChange2}
                      isChecked={isChecked2}
        />

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

