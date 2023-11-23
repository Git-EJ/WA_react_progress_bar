import { useState } from "react"
import ProgressBar from "../molecules/ProgressBar"


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
  const [addProgressBarTitle, setAddProgressBarTitle] = useState('')
  const [addProgressBarProgress, setAddProgressBarProgress] = useState('')

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

  /**
   * 
   * @description This function is called when the input "Titre de la barre de progression" is added or modified,
   * 
   */
  const addProgressBarTitleChange = (event) => {

    const userInput = event.target.value.trim()

    if (!/^[a-zA-Z0-9-_#* ]*$/.test(userInput)) return alert('Caractères non autorisés')
  
    if (userInput.length > 50) return alert('Le titre de la barre de progression ne doit pas dépasser 50 caractères')
    
    setAddProgressBarTitle(userInput)
  }

  /**
   * 
   * @description This function is called when the input "Pourcentage de progression (nombre)" is added or modified,
   * 
   */
  const addProgressBarProgressChange = (event) => {

    const userInput = event.target.value.trim()

    if (!/^[0-9]*$/.test(userInput)) return alert('Caractères non autorisés')

    if (event.target.value > 100) return alert('Le pourcentage de progression ne doit pas dépasser 100%')

    setAddProgressBarProgress(userInput)
  }


  /**
   * 
   * @description  This function is called when the button "Ajouter une barre de progression" is clicked,
   * 
   */
  const addProgressBar = () => {
    const newProgressBars = [...progressBars]
    newProgressBars.push({
      progressBarTitle: addProgressBarTitle ? addProgressBarTitle : `Nouvelle barre de progression ${newProgressBars.length + 1}`,
      progress: addProgressBarProgress ? addProgressBarProgress : 0,
      isChecked: false
    })
    setProgressBars([...newProgressBars])
    setAddProgressBarTitle('')
    setAddProgressBarProgress('')
  }



  return (
    <main className="main_wrapper">
      <div className="main_title">
        <p>Test technique WEB-ATRIO réalisé par {name} {firstName}</p>
        <p>réalisé le {date}</p>
      </div>

      <div className="main_add_progress_bar_wrapper">
        <button className="main_add_progress_bar_button" onClick={addProgressBar}>+</button>
        <input  className="main_add_progress_bar_input_title" 
                type="text" 
                placeholder="Titre de la barre de progression" 
                value={addProgressBarTitle} 
                onChange={addProgressBarTitleChange}
                // pattern="^[a-zA-Z0-9-_#\\* ]+$"
        />
        <input  className="main_add_progress_bar_input_progress" 
                type="text" 
                placeholder="Pourcentage de progression (nombre)" 
                value={addProgressBarProgress} 
                onChange={addProgressBarProgressChange}
        />
      </div>

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

