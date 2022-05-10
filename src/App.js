import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { AllMovies } from './components/AllMovies.js'

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://imdb-api.com/en/API/Top250Movies/k_sf83blu8')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data.items)
      })

  }, []);

  return (
    <div>
      {data && <AllMovies movies={data} />}
    </div>

  );
}

export default App;
