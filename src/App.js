import './App.css';
import MovieList from './components/MovieList';
import Navb from './components/Navb';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Route, Routes } from 'react-router-dom';
import Trailer from './components/Trailer';
import moviesData from './components/Data';

function App() {
  return (
    <div className="App">
      <Navb />
      <Routes>
        <Route path='/' element={<MovieList />}/>
        <Route path='/Trailer/:id' element={<Trailer Data={moviesData} />}/>
      </Routes>
    </div>
  );
}

export default App;
