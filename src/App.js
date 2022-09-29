import './App.css';
import Cardfunction from './Component/card/cardfunction';
import Navbar from './Component/navigation/navbar';
import Questions from './Component/questions/questions';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Cardfunction></Cardfunction>
      <Questions q1="How React Work?"></Questions>
    </div>
  );
}

export default App;
