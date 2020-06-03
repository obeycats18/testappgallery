import React from 'react'
import {FlatList} from "react-native";
import {PhotoItem} from "../../components";


const HomeScreen = ({photos, setRefreshing, refreshing, navigate}) => {
    return(
        <FlatList
            data={photos}
            refreshing={refreshing}
            onRefresh={ () => setRefreshing(true) }
            renderItem={ ({item, index}) => (
                <PhotoItem
                    key={index.toString()}
                    navigate={navigate}
                    photo={item}
                />
            ) }
            keyExtractor={ (item, index) => index.toString()}
        />

    )
}

export default HomeScreen
