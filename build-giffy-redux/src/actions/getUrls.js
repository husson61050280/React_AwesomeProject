import giphyApi from '../API/giphyAPI';

const startRequest = () => {
    return { 
        type : "START_REQUEST"
    };
};

//action creator 

const receiveData = data => {
    return {
        type : "RECEIVE_DATA",
        payload : data
    };
};

//thunk action creator 

const getUrls = word => {
    return dispatch => {
        dispatch(startRequest());
        giphyApi(word).then(res => {
            const data = res.data.data
            const ImageUrlList = data.map(item => item.images.downsized.url)
            dispatch(receiveData(ImageUrlList));
        });
    };
};

export default getUrls;