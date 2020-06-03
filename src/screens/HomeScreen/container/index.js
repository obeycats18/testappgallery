import React from 'react'
import {connect} from 'react-redux'

import HomeScreen from "../index";
import {setPhotosThunk} from "../../../redux/thunks/galleryThunks";
import {Loading} from "../../../components";

import { useNavigation } from '@react-navigation/native';

const mapStateToProps = ( {gallery} ) => ({
    photos: gallery.photos,
    isLoading: gallery.isLoading
})

export default connect( mapStateToProps, {setPhotosThunk} )( ({isLoading, setPhotosThunk, photos}) => {

    //Получение метода navigate для перехода между экранами
    const {navigate} = useNavigation()

    //Управние состоянием обновления ленты фотографий
    const [refreshing, setRefreshing] = React.useState(false)

    React.useEffect( () => {
        setPhotosThunk()
        setRefreshing(false)
    }, [refreshing])

    return isLoading ? <Loading/> : <HomeScreen
        navigate={navigate}
        refreshing={refreshing}
        setRefreshing={setRefreshing}
        photos={photos}
    />
} )
