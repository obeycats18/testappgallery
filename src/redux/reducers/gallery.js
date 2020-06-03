import {actionTypes} from "../actions/gallery";

const initialState = {
    photos: [],
    selectedPhoto: {},
    isLoading: false
}

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PHOTOS: {
            return {
                ...state,
                photos: action.photos
            }
        }
        case actionTypes.SET_SELECTED_PHOTO: {
            return {
                ...state,
                selectedPhoto: action.selectedPhoto
            }
        }
        case actionTypes.SET_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state
    }
}


