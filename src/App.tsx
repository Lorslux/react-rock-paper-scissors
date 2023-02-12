import "./App.css";
import { Header } from "./components/Header";
import { Instructions } from "./components/Instructions";

function App() {
  function handleInstructionsButton() {
    document.body.classList.add("show-instructions");
  }

  return (
    <>
      <div className="main-container">
        <Header />
        <main>
          <nav className="main-nav">
            <div className="main-nav-item">
              <a href="playervspc.html" className="button">
                Player vs PC
              </a>
            </div>
            <div className="main-nav-item">
              <a href="pcvspc.html" className="button">
                PC vs PC
              </a>
            </div>
            <div className="main-nav-item">
              <button
                onClick={handleInstructionsButton}
                id="instructions-button"
                className="button"
                type="button"
              >
                How to play
              </button>
            </div>
          </nav>
        </main>
        <footer>🎀 &copy; 2023 Lorena de la Luz Mondini 🎀</footer>
      </div>
      <div className="mask"></div>
      <Instructions />
    </>
  );
}

export default App;
