
import './App.css';
import Header from './components/Header.jsx';
import { useState, useEffect } from 'react';
import TeamScreen from './screens/TeamScreen';
import DexScreen from './screens/DexScreen';
import axios from 'axios';

function App() {
  const [teamPage, setTeamPage] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  
  const changePage = (value) => {
    if (teamPage === value) return
    setTeamPage(value)
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`).then(res => {
        let newState = res.data.results.map((item, index) => {
            item.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            return item
        })
        setPokemon(newState)
        console.log(newState)
    })
}, [])

  return (
    <div className="App">
      <Header></Header>
      <div className='row-container'>
        <button onClick={() => changePage(true)}>Team</button>
        <button onClick={() => changePage(false)}>Dex</button>
      </div>
      {teamPage ? <TeamScreen /> : <DexScreen pokemon={pokemon} />}
    </div>
  );
}

export default App;
