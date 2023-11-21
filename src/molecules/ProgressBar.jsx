import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const ProgressBar = ({  progressBarTitle, 
                        progress, 
                        handleCheckboxChange,
                        isChecked 
                      }) => {

  const [color, setColor] = useState('')
  
  useEffect(() => {
    
    const changeColor = () => {
      if (progress>= 75 && progress <= 100) {
        setColor('#30DB63')
      }
      
      if (progress >= 50 && progress <= 74) {
        setColor('#60E8B6')
      }
      
      if (progress>= 25 && progress <= 49) {
        setColor('#60ADE8')
      }
      
      if (progress>= 0 && progress <= 24) {
        setColor('#7160E8')
      }
    } 
    
    changeColor()

  }, [progress])


  return (
    <div className="progress_bar_title_and_bar_container">

      <div className="progress_bar_title"> {progressBarTitle} </div>

      <div className="progress_bar_container">
        <div className="progress_bar_percentage"> {progress}% </div>
        <div className="progress_bar_bg_container">
          <div className="progress_bar_filler" style={{ width: `${progress}%`, backgroundColor:`${color}` }}></div>
        </div>
        <input className="progress_bar_checkbox" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> 
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  progressBarTitle: PropTypes.string,
  progress: PropTypes.number,
  handleCheckboxChange: PropTypes.func,
  isChecked: PropTypes.bool,
}

export default ProgressBar