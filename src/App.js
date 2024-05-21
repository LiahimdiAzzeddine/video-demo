import Navbar from './components/navbar';
import ProgressBar from './components/ProgressBar';
import Section from './components/Section';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mouse-circle"></div>
      <div className="mouse-dot"></div>
      <div className="container">
        <div className="page-bg"></div>
        <Navbar />
        <Section/>
      </div>
    </div>
  );
}

export default App;
