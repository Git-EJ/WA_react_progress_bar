import { useState } from "react"
import ProgressBar from "../molecules/ProgressBar"
import AddProgressBar from "../molecules/AddProgressBar"


const Main = () => {

  const firstName = "Eric"
  const name= "Jaillant"
  const date= "21/11/2023"

  const arrayOfProgressBarsData = [
    {
      progressBarTitle: 'Initialisation du test technique',
      progress: 50,
      isChecked: false
    },
    {
      progressBarTitle: 'Avancement de la phase de développement',
      progress: 25,
      isChecked: false
    }
  ]

  const [progressBars, setProgressBars] = useState(arrayOfProgressBarsData)

  /**
   * 
   * @description  This function is called when a checkbox is clicked, and update the state 
   *          
   */
  const handleCheckboxChange = (index) => {
    const newProgressBars = [...progressBars]
    newProgressBars[index].isChecked = !newProgressBars[index].isChecked
    setProgressBars(newProgressBars)
  }

  /**
   * 
   * @description  This function is called when the button "Remettre à zéro les compteurs" is clicked, 
   *               and update the progress of the progress bars to 0
   */
  const decreaseToZero = () => {
    const newProgressBars = [...progressBars]
    newProgressBars.forEach(progressBar => {
      if (progressBar.isChecked && progressBar.progress > 0) {
        progressBar.progress = 0
      }
    })
    setProgressBars(newProgressBars)
  }

  /**
   * 
   * @param {number} amount
   * @description  This function is called when the button "Ajouter 5%" or "Ajouter 10%" is clicked,
   *              and update the progress of the progress bars by the amount passed as an argument
   * 
   */
  const increaseByAmount = (amount) => {
    const newProgressBars = [...progressBars]
    newProgressBars.forEach(progressBar => {
      if (progressBar.isChecked && progressBar.progress < 100) {
        const result = progressBar.progress + amount
        result <= 100 ? progressBar.progress = result : progressBar.progress = 100
      }
    })
    setProgressBars(newProgressBars)
  }
  
  /**
   * 
   * @description  This function is called when the delete icon is clicked, and delete the progress bar
   * 
   */
  const deleteProgressBar = (indexToDelete) => {
    const newProgressBars = progressBars.filter((_, index) => index !== indexToDelete)
    setProgressBars(newProgressBars);
  }

  

  return (
    <main className="main_wrapper">
      <div className="main_title">
        <p>Test technique WEB-ATRIO réalisé par {name} {firstName}</p>
        <p>réalisé le {date}</p>
      </div>

      <div className="main_add_progress_bar_wrapper"><AddProgressBar setProgressBars={setProgressBars} progressBars={progressBars} /></div>

      <div className="main_progress_bar_wrapper">
        { progressBars.map((progressBar, index) => {
          return (
            <ProgressBar 
              key={`progressBar${index}`}
              progressBarTitle={progressBar.progressBarTitle}
              progress={progressBar.progress}
              handleCheckboxChange={() => handleCheckboxChange(index)}
              isChecked={progressBar.isChecked}
              deleteProgressBar={() => deleteProgressBar(index)}
            />
          )
        })}
      </div>

      <div className="main_buttons_container">
        <button className="main_button" onClick={decreaseToZero}>Remettre à zéro les compteurs</button>
        <button className="main_button" onClick={() => increaseByAmount(5)}>Ajouter 5%</button>
        <button className="main_button" onClick={() => increaseByAmount(10)}>Ajouter 10%</button>
      </div>
    </main>
  )
}

export default Main

