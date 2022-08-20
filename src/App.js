import './app.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieDetail from './components/movieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
       <Router>
         <Header title={ 'Movie Catalog' }></Header>
          <Routes>
            <Route exact path="/movie-website/" element ={<Home/>} />
            <Route path='/movie-website/movie/:imdbID' element ={<MovieDetail/>} />
          </Routes>
         <Footer ></Footer>
       </Router>
    </div>
  );
}

export default App;
