import './App.css';
import MovieList from './components/MovieList';
import Navb from './components/Navb';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {
  return (
    <div className="App">
      <Navb />
      <MovieList />
    </div>
  );
}

export default App;
