import React from 'react'
import {connect} from 'react-redux'

import PhotoScreen from "../index";

import {setSelectedPhotoThunk} from "../../../redux/thunks/galleryThunks";
import {ScrollView} from "react-native";
import {Loading} from "../../../components";

import {useRoute} from '@react-navigation/native';

const mapStateToProps = ({gallery}) => ({
    selectedPhoto: gallery.selectedPhoto,
    isLoading: gallery.isLoading
})

export default connect(mapStateToProps, {setSelectedPhotoThunk})(({isLoading, selectedPhoto: photo, setSelectedPhotoThunk}) => {

    const route = useRoute()
    const {photoId} = route.params

    React.useEffect(() => {
        setSelectedPhotoThunk(photoId)
    }, [photoId])

    return (
        isLoading
            ? <Loading/>
            : !!Object.keys(photo).length && <ScrollView>
                <PhotoScreen photo={photo}/>
            </ScrollView>

    )
})


