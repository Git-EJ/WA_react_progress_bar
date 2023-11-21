import { useState } from "react"
import PropTypes from 'prop-types'

const ProgressBar = ({ progressBarTitle }) => {

  const [progress, setProgress] = useState(0)

  return (
    <div className="progress_bar_title_and_bar_container">

      <div className="progress_bar_title"> {progressBarTitle} </div>

      <div className="progress_bar_container">
        <div className="progress_bar_percentage"> {progress}% </div>
        <div className="progress_bar_bg_container">
          <div className="progress_bar_filler" style={{ width: `${progress}%` }}></div>
        </div> 
      </div>

    </div>
  )
}

ProgressBar.propTypes = {
  progressBarTitle: PropTypes.string,
}

export default ProgressBar