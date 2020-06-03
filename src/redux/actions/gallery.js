
export const actionTypes = {
    SET_PHOTOS: 'SET_PHOTOS',
    SET_LOADING: 'SET_LOADING',
    SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO',
}

export const setPhotos = ( photos ) => ({ type: actionTypes.SET_PHOTOS, photos })
export const setSelectedPhoto = ( selectedPhoto ) => ({ type: actionTypes.SET_SELECTED_PHOTO, selectedPhoto })

export const setLoading = ( isLoading ) => ({ type: actionTypes.SET_LOADING, isLoading })
