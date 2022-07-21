import Header from "./Components/Header";
import Pokemon from "./Components/Pokemon";
import PokemonList from "./Components/PokemonList";

function App() {
  return (
    <>
      <Header text="myFirstProp"/>
      <h3>List of Pokemon Below</h3>
        <br />
      <PokemonList />
    </>
  );
}

export default App;
