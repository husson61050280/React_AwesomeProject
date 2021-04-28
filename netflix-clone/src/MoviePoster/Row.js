import React, { useState, useEffect } from "react";
import axios from "../Api/axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // "https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213"
      setMovies(request.data.results);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  //pop up trailer
  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

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

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* row__poster */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            //function trailer
            onClick={() => handleClick(movie)}
            // ถ้ามี isLargeRow เข้ามา ให้ เพิ่มคลาส row__posterLarge เข้าไป
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {/* Trailer Movies */}
      {/* opt = ขนาดของ youtube */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
  );
}

export default Row;
