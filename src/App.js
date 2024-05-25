import Navbar from './components/navbar';
import Section from './components/Section';
import Section2 from './components/Section2';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mouse-circle"></div>
      <div className="mouse-dot"></div>
      <div className="containeraz">
        <Navbar />
        <Section/>
        <Section2/>
      </div>
    </div>
  );
}

export default App;
