import {connect} from 'react-redux';
import ImageList from '../components/ImageList';

const MapStateToProps = state => {
    return {
        urlList: state.imageUrls
    };
};

export default connect (MapStateToProps , null)(ImageList)