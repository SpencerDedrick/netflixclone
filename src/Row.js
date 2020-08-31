import React, { useState, useEffect } from "react";
import ScrollContainer from 'react-indiana-drag-scroll'
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";



function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [movieInfo, setMovieInfo] = useState('');
  const [movieBackground, setMovieBackground] = useState('');
  const [movieName, setMovieName] = useState('');



  //A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    //if [], run once when the row loads, and don't run again
    //if [movies], run once then run when movies changes
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


const handleClick = (movie) => {
  if (movieName === movie.title || movieName === movie.name || movieName === movie.original_name) {
    clearMovie()
    console.log('test')
  }else{
    setMovieInfo(movie.overview)
    setMovieBackground(movie.backdrop_path)
    setMovieName(movie?.title || movie?.name || movie?.original_name)
  }

}

const clearMovie =()=>{
    setMovieInfo("")
    setMovieBackground("")
    setMovieName("")
}

function truncate(str, n) {
  return str?.length > n? str.substr(0, n-1) + "..." : str;
}


  return (
    <div className="row" >
      <h2>{title}</h2>
      <ScrollContainer  className="row__posters scroll-container" >
        {movies.map((movie) => {
          if(movie.backdrop_path !== null){
          return(
                    <img
                    key={movie.id}
                    onClick={()=> handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                  ></img>)
          }
        }
  )}
      </ScrollContainer>

      {movieInfo && <div className="row__info"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieBackground}")`,
        backgroundPosition: "",
        backgroundRepeat: "no-repeat"}}>
          <h1 className="row__info--x"
          onClick={()=> clearMovie()}>x</h1>
           <div className="row__info--fadeBottom"></div>
      <div className="row__info_contents">
          <h1 className="row__info_title">{movieName}</h1>
          <div className="row__info_buttons">
          {/* <button className="row__info_button">Play</button> */}
          <button className="row__info_button">Add to My List</button>
      </div>
      <h1 className="row__info_description">
          {truncate(movieInfo)}
      </h1>
      </div>
    </div>}
    </div>
  );
}

export default Row;
