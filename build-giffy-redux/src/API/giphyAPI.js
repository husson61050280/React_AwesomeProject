import axios from 'axios';

const giphyApi = word => {

    const search = word;
    const key =  "41kznFc76zW1NhioAdorKHlBTC6bP0Ox"  ;
    const limit = 50;
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

    return axios.get(url);
};


export default giphyApi;