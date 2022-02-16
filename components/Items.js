import React from 'react';
import { View, StyleSheet } from 'react-native';

const ItemRow = ({ item }) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            margin: 20,
            width: 300,
            borderRadius: 30,
            backgroundColor: '#3DA6FF',
        }}>

            <Image
                style={styles.afficheFilm}
                source={{ uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.item.imdbID}.png` }}></Image>
            <View style={{ flexDirection: 'column', padding: 10, borderRadius: 20 }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{item.item.Title}</Text>
                <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 20 }}>{item.item.Year}</Text>
                <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 20 }}>{item.item.Type}</Text>
                <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 20 }}>{item.item.Poster}</Text>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    afficheFilm: {
        width: 40,
        height: 40,


    }
});
export default ItemRow;