import React, { useEffect } from 'react';
import Header from './components/Header';
import getPokemonList from './services/apiPokemon';

function App() {
  useEffect(() => {
    getPokemonList().then((response) => {
      console.log(response.results);
    });
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
