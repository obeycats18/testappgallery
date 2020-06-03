import React from 'react'
import {Image} from "react-native";

const PhotoImage = ({urls, size}) => {
    return <Image
        style={ {width: 500, height: 500, backgroundColor: '#bbb'} }
        source={ {uri: urls[(size === 'full' || 'small') ? size: 'full'].toString() } }
        resizeMode='cover'
    />
}

export default PhotoImage
