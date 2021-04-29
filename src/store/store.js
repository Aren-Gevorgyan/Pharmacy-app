import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import headerReducer from '../store/reducer/headerReducer';

const reduce = combineReducers({
    header: headerReducer,
    form: formReducer,
})

const store = createStore(reduce, applyMiddleware(thunk));

export default store;
window.store = store;