//netflix-clone-cc4ff.web.app
//Api key - fab7dce4a8aea5c240eb4ce8594cb915
//Youtube API Key AIzaSyDZnNJeQYCBrsCyQ_lZcgufXM5UxLSXICo


import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner"
import requests from "./requests";
import Nav from "./Nav"
import List from './List'

function App() {
  return (
    <div className="app">
      <Nav />
      <List />
     {/*  <Banner /> */}
    {/*   <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> */}
    </div>
  );
}

export default App;
