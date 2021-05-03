import {connect} from 'react-redux';
import {getUserDataThunk} from '../../store/reducer/headerReducer';
import Header from './header/Header';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

const mapStateToProps = (state) => {
    return {}
}

export default compose(
    connect(mapStateToProps, {getUserDataThunk}),
    withRouter,
)(Header);