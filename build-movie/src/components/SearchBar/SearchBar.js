import React from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Movie from '../../Movie/Movie';

//css
import "./_search-bar.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userSearchItem: "",
      movies: [],
    };
  }

  //set ค่าที่พิมเข้ามา
  onInputChange = (e) => {
    this.setState({ userSearchItem: e.target.value });
  };

  onInputSubmit = (e) => {
    e.preventDefault();

    const movieName = this.state.userSearchItem;
    //api KEY
    const KEY = "3d2b65a2f387f7184cc14c1be5735677";

    //query
    const searchQuery = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${movieName}&page=10"`;

    //add movie data to state
    axios.get(searchQuery).then((res) => {
      this.setState({ movies: res.data.results });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onInputSubmit}>
          <TextField
            label="Search for amovie and hit enter"
            margin="normal"
            className="search-bar"
            onChange={this.onInputChange}
          />
          
          {/* ส่งค่า Movie ไปแสดง ที่ component Movie */}
          <Movie movies={this.state.movies}/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
