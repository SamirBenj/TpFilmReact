import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View, Image, Text } from "react-native";

export const ItemRow = (props) => {
    const onPressItemList = () => {
        props.navigate.navigation.navigate('ListFilm', { item: props.item })
    }

    return (
        <TouchableWithoutFeedback onPress={onPressItemList}>
            <View style={styles.container}>

                <Image
                    styles={{ width: 40, height: 40 }}
                    source={{ uri: 'http://www.omdbapi.com/?i=$id&apikey=5edd8232' + props.item.id + '.png' }}

                />

                <Text>{props.item.Title}</Text>

            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        borderBottomWidth: 2
    }
});

export default ItemRow