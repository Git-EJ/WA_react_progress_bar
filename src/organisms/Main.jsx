import ProgressBar from "../molecules/ProgressBar"

const Main = () => {

  const firstName = "Eric"
  const name= "Jaillant"
  const date= "21/11/2023"

  return (
    <main className="main_wrapper">
      <div className="main_title">
        <p>Test technique WEB-ATRIO réalisé par {name} {firstName}</p>
        <p>réalisé le {date}</p>
      </div>

      <div className="main_progress_bar_wrapper">
        <ProgressBar progressBarTitle= {'Initialisation du test technique'} />
        <ProgressBar progressBarTitle= {'Initialisation du test technique'} />
      </div>

      <div className="main_buttons_container">
        <button className="main_button">Remettre à zéro les compteurs</button>
        <button className="main_button">Ajouter 5%</button>
        <button className="main_button">Ajouter 10%</button>
      </div>
    </main>
  )
}

export default Main

