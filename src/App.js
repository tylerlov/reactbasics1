import Header from "./Components/Header";
import Pokemon from "./Components/Pokemon";

function App() {
  return (
    <>
      <Header text="myFirstProp"/>
      <h3>List of Pokemon Below</h3>
        <br />
        <Pokemon />
    </>
  );
}

export default App;
