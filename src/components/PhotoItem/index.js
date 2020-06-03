import React from 'react'
import {View, TouchableOpacity, Text} from "react-native";
import {PhotoImage} from "../index";
import { Ionicons } from '@expo/vector-icons';

import {styles} from './styles'

const PhotoItem = ({photo, navigate}) => {
    return (
        <View style={styles.photoItem}>
            <TouchableOpacity
                onPress={() => {
                    navigate('Photo', {photoId: photo.id})
                }}
            >
                <PhotoImage urls={photo.urls} size='small'/>
            </TouchableOpacity>
            <View style={styles.photoInfo}>
                <Text style={styles.photoInfoText}>
                    <Text style={{fontWeight: 'bold'}}>Автор: </Text>
                    {photo.user.first_name + ' ' + photo.user.last_name}
                </Text>
                <View style={styles.photoInfoLike}>
                    <Ionicons name="ios-heart" size={20} color="red" />
                    <Text style={ {marginLeft: 10} }>
                        {photo.likes || 0}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default PhotoItem
