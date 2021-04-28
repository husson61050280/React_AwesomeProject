import React from "react";

//material UI
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

//React Reveal
import Fade from "react-reveal/Fade";

import "./_movie.scss";


class Movie extends React.Component {
  render(){
    return (
      <div className="results">
        <ul>
          <Grid container spacing={3}>
            {this.props.movies.map((movie) => (
              <Grid item sm={12} md={4}>
                <Fade>
                  <Card>
                    <li key={movie.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      />
                      <div className="detial">
                        <h3>{movie.original_title}</h3>
                        <p>Date: {movie.release_date}</p>
                        <p>Rating: {movie.vote_average}/10</p>
                        <p>{movie.overview}</p>
                      </div>
                    </li>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </ul>
      </div>
    );
  }
}

export default Movie;
