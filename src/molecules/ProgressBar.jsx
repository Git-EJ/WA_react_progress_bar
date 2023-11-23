import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const ProgressBar = ({  progressBarTitle, 
                        progress, 
                        handleCheckboxChange,
                        isChecked,
                        deleteProgressBar,
                      }) => {

  const [color, setColor] = useState('') //for the progress bar filler and percentage color
  const [animate, setAnimate] = useState(false) //for the displayed percentage
  
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
    setAnimate(true)

    const timer = setTimeout(() => setAnimate(false), 500) //timer for the animation of the displayed percentage
    return () => clearTimeout(timer);

  }, [progress])


  return (
    <div className="progress_bar_title_and_bar_container">

      <div className="progress_bar_title"> {progressBarTitle} </div>
      <div className="progress_bar_container">

        <div className={`progress_bar_percentage${animate ? ' animate' : ''}`} style={animate ? { color: `${color}` } : {}}>
          {progress}%
        </div>

        <div className="progress_bar_bg_container">
          <div className="progress_bar_filler" style={{ width: `${progress}%`, backgroundColor:`${color}` }}></div>
        </div>
        
        <input className="progress_bar_checkbox" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> 
        <div className='progress_bar_delete_icon_container'>
          <img className='progress_bar_delete_icon' src="/src/assets/icons/remove_icon.png" alt="delete icon" onClick={deleteProgressBar} />
        </div>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  progressBarTitle: PropTypes.string,
  progress: PropTypes.number,
  handleCheckboxChange: PropTypes.func,
  isChecked: PropTypes.bool,
  deleteProgressBar: PropTypes.func,
}

export default ProgressBar