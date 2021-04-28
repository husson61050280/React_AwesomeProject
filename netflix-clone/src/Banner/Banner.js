import React, { useState, useEffect } from "react";
import axios from "../Api/axios";
import requests from "../Api/requests";
import "./Banner.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //ดึงข้อมูลหนังมาแสดง
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        //random_movie
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  console.log("Movie =  ", movie);

  //function ตัดข้อความกรณีข้อความยาวเกิน str ส่ง movie.overview เข้ามา
  // n = จำนวนตัวอักษรที่ต้องการแสดง
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  //check Trailer movie
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      //find video on youtube
      movieTrailer(movie?.name || "")
        //url = ลิ้งจาก Youtube
        .then((url) => {
          //https://www.youtube.com/watch?v=XtMThy8QKqU
          //search หลัง ? เพื่อหาคลิปวีดีโอ
          const urlParams = new URLSearchParams(new URL(url).search);
          //เอาเลข id คลิป youtube มาแสดง ค่า value ของ v
          //set id video ลงไปที่ trailerUrl
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  //pop up trailer
  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
        backgroundPosition: "top center",
      }}
    >
      {/* Trailer Movies */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* Trailer Movies */}


      <div className="banner__content">
        <h1 className="banner__title">
          {/* Check ว่าหนังมีชื่อไหม ถ้ามีก็แสดง */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button" onClick={() => handleClick(movie)}>
            Play
          </button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
