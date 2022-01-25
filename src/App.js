import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import React from 'react';
import { useState }from 'react';
import { moviesData } from './Data';
import MovieList from './Components/MovieList';
import AddNMovie from './Components/AddNMovie';
import FilterByRate from './Components/FilterByRate';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(1);
  const addNewMovies=(x)=>{
    return setMovies([...movies,x])
  }
  return (
    <div className="App">
      <NavBar search={search} setSearch={setSearch} /> 
      <FilterByRate isRating={false} rate={rate} setRate={setRate} />
      <h1> Movie App </h1>
      <AddNMovie addNewMovie={addNewMovies} />
      <MovieList movies={movies} search={search} rating={rate}/>
     
    </div>
  );
}

export default App;
