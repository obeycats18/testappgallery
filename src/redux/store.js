import {applyMiddleware, combineReducers, createStore} from 'redux'
import {galleryReducer} from "./reducers/gallery";
import reduxThunk from 'redux-thunk'

export const store = createStore(
    combineReducers({
        gallery: galleryReducer
    }),
    applyMiddleware(reduxThunk)
)
