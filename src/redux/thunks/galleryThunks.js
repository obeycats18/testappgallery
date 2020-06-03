import {setLoading, setPhotos, setSelectedPhoto} from "../actions/gallery";
import {galleryAPI} from "../../api/galleryAPI";

export const setPhotosThunk = () => {
    return dispatch => {

        dispatch(setLoading(true))

        //Функиця, которая отправляет запрос на сервер unsplash для получения фото.
        galleryAPI.getPhotos().then(response => {
            if (response) {
                //Выбираю из объекта response только те поля, которые нужны для отрисовки
                const photos = response.map(photo => ({
                    id: photo.id,
                    likes: photo.likes,
                    urls: photo.urls,
                    user: photo.user,
                    description: photo.description

                }))
                dispatch(setPhotos(photos))
                dispatch(setLoading(false))
            }
        })


    }
}

export const setSelectedPhotoThunk = id => {
    return dispatch => {
        dispatch(setLoading(true))
        galleryAPI.getSelectedPhoto(id).then( response => {
            if(response) {
                dispatch(setSelectedPhoto(response))
                dispatch(setLoading(false))
            }
        })

    }
}
