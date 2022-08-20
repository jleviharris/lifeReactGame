import logo from "./logo.svg";
import "./App.css";
import ButtonBoard from "./Components/ButtonBoard";
import BoardContainer from "./Components/BoardContainer";
import GenerationCounter from "./Components/GenerationCounter";

function App() {
  return (
    <div className="App">
      <ButtonBoard />
      <BoardContainer />
      <GenerationCounter />
    </div>
  );
}

export default App;
