import './App.css';
import Cardfunction from './Component/card/cardfunction';
import Navbar from './Component/navigation/navbar';
import Questions from './Component/questions/questions';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Cardfunction></Cardfunction>
      <Questions
        q1="How React Work?"
        q1Ans="React components work similarly to JavaScript
         functions as they accept arbitrary inputs 
         called properties or props."
      ></Questions>
        <Questions
        q1="Props Vs State?"
        q1Ans="Props are use pass data one component to other component. The State is a local data Storage.🧑"
      ></Questions>
        <Questions
        q1="Use cases of use effect?"
        q1Ans="fetch API data.validating input field.
        live filtering.
        trigger animation on new array value.
        update paragraph list on fetched API data update."
      ></Questions>
    </div>
  );
}

export default App;
