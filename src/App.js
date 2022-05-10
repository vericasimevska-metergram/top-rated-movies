import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Movies } from './components/movie/Movies.js'

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://imdb-api.com/en/API/Top250Movies/k_sf83blu8')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data)
      })

  }, []);

  return (
    <div>
      {data && <Movies data={data} />}
    </div>

  );
}

export default App;
