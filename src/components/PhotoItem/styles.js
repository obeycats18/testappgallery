import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    photoItem: {
        flex: 1,
        marginVertical: 10
    },
    photoInfo: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    photoInfoText: {
        fontSize: 16
    },
    photoInfoLike: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})
