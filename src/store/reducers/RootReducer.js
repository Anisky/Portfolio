
import {combineReducers} from 'redux'
import navbarReducer from './navbarReducer';
import projectReducer from './projectReducer';

const rootReducer = combineReducers(
    {
     project : projectReducer,
     navabar:  navbarReducer,
    }
)
export default rootReducer ;