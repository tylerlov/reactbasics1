import Header from "./Components/Header";
import Pokemon from "./Components/Pokemon";
import PokemonList from "./Components/PokemonList";
import { PokeProvider } from "./context/poke/PokeContext";

function App() {
  return (
    <PokeProvider>
    <>
      <Header text="myFirstProp"/>
      <h3>List of Pokemon Below</h3>
        <br />
      <PokemonList />
    </>
    </PokeProvider>
  );
}

export default App;
