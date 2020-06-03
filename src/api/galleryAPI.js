import axiosBase from 'axios'

const ACCESS_TOKEN = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'

const axios = axiosBase.create({
    baseURL: 'https://api.unsplash.com'
});

export const galleryAPI = {
    getPhotos: () => axios.get(`/photos/random?client_id=${ACCESS_TOKEN}&count=5`).then(response => response.data),
    getSelectedPhoto: (id) => axios.get(`/photos/${id}?client_id=${ACCESS_TOKEN}`).then(response => response.data)
}
