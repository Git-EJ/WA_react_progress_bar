import PropTypes from 'prop-types'

const ProgressBar = ({ progressBarTitle, progress }) => {

  const displayProgress = progress > 100 ? 100 : progress

  return (
    <div className="progress_bar_title_and_bar_container">

      <div className="progress_bar_title"> {progressBarTitle} </div>

      <div className="progress_bar_container">
        <div className="progress_bar_percentage"> {displayProgress}% </div>
        <div className="progress_bar_bg_container">
          <div className="progress_bar_filler" style={{ width: `${progress}%` }}></div>
        </div> 
      </div>

    </div>
  )
}

ProgressBar.propTypes = {
  progressBarTitle: PropTypes.string,
  progress: PropTypes.number,
}

export default ProgressBar