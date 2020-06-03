import React from 'react'
import {View, ActivityIndicator} from "react-native";

import {styles} from './styles'

const Loading = () => {
    return <View style={styles.loadingBlock}><ActivityIndicator size="large" color="#8e44ad" /></View>
}

export default Loading
