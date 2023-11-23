import PropTypes from 'prop-types'
import { useState } from "react"

const AddProgressBar = ({setProgressBars, progressBars}) => {

  const [addProgressBarTitle, setAddProgressBarTitle] = useState('')
  const [addProgressBarProgress, setAddProgressBarProgress] = useState('')

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
  <>
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
  </>
  )
}

AddProgressBar.propTypes = {
  setProgressBars: PropTypes.func,
  progressBars: PropTypes.array,
}


export default AddProgressBar