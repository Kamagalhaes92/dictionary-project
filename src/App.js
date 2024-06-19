import './App.css';
import Dictionary from './Dictionary';
import Blob from "./Blob"; // Import the Blob component

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        WORDWAVE
      </header>
      <div className="main-content">
        <div className="vertical-menu">
          <div className="vertical-line-container">
            <div className="vertical-line"></div>
            <div className="menu-item">
              <a href="#main">MAIN</a>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className="headline-container">
            <h2 className='headline'>Revolutionize <br/> Your Vocabulary  <br/>with WordWave</h2>
            <Blob /> 
          </div>
          <main>
            <Dictionary defaultKeyword="hello"/>
          </main>
          <footer className='text-center'>
            Coded by Karine Magalhaes.
          </footer>
        </div>
      </div>
    </div>
  );
}
