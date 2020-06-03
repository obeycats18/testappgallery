import React from 'react'
import {View, Text} from 'react-native'
import {PhotoImage} from "../../components";
import {styles} from './styles'

const PhotoScreen = ({photo}) => {
    return(
        <View>
            <PhotoImage urls={photo.urls} size='full'/>
            <View style={styles.photoInfoBlock}>
                <Text style={styles.photoInfoText}>
                    <Text style={styles.photoInfoTitle}>Автор: </Text>
                    {photo.user.first_name + ' ' + photo.user.last_name}
                </Text>

                <Text style={styles.photoInfoText}>
                    <Text style={styles.photoInfoTitle}>Загрузок: </Text>
                    {photo.downloads}
                </Text>

                {
                    photo.description && (
                        <Text style={styles.photoInfoText}>
                            <Text style={styles.photoInfoTitle}>Описание: </Text>
                            {photo.description}
                        </Text>
                    )
                }

                <Text style={styles.photoInfoText}>
                    <Text style={styles.photoInfoTitle}>Понравилось: </Text>
                    {photo.likes}
                </Text>
            </View>
        </View>
    )

}

export default PhotoScreen


