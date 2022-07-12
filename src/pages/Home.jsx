import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import requests from "../request"
const Home = () => {
  const style = {
    maxHeight: "400px"
  }
  return (
    <div className="home-main">
      <div >
        <Header />
        <Banner />
        <Row title="Netflix Originals" fetchURL={requests.fetchNetfixOriginals} style={style}/>
        <Row title="Most Trending" fetchURL={requests.fetchTrending} />
        <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
        <Row title="Documentries" fetchURL={requests.fetchDocumentries} />
      </div>
    </div>
  );
};

export default Home;
