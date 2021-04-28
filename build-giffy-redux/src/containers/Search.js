import { connect } from 'react-redux';
import Search from '../components/Search';

import getUrls from '../actions/getUrls';

const MapStateToProps = state => {
    return {
        buttonText : state.buttonText
    };
};

const MapDispatchToProps = dispatch => {
    return {
        getUrls : word => {
            dispatch(getUrls(word));
        }
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(Search);