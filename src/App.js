
import './App.css';
import Header from './components/Header.jsx';
import { useState, useEffect } from 'react';
import TeamScreen from './screens/TeamScreen';
import DexScreen from './screens/DexScreen';

function App() {
  const [teamPage, setTeamPage] = useState(false);
  
  const changePage = (value) => {
    if (teamPage === value) return
    setTeamPage(value)
  }

  return (
    <div className="App">
      <Header></Header>
      <div className='row-container'>
        <button onClick={() => changePage(true)}>Team</button>
        <button onClick={() => changePage(false)}>Dex</button>
      </div>
      {teamPage ? <TeamScreen /> : <DexScreen />}
    </div>
  );
}

export default App;
