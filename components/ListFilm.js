import React, { useState, useEffect } from "react";
import { View, FlatList, Pressable, StyleSheet, Text } from "react-native";
import { ItemsCard } from './Items';

const ListFilm = ({ route }, { navigation }) => {
    const { nomFilm } = route.params;
    console.log(nomFilm);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();//données Film
    const url = `http://www.omdbapi.com/?s=${nomFilm}&apikey=5edd8232`;

    useEffect(() => {

        const recupFilm = async () => {
            try {
                const response = await fetch(url);
                const dataJson = await response.json();
                setData(dataJson);
                setLoading(false);

            } catch (e) {
                console.log(e);
                setLoading(true)
            }
        }
        recupFilm();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text>Ceci est un teste</Text>
            </View>
            <View style={styles.container2}>
                <View style={{ flex: 1, padding: 30 }}>
                    {isLoading ? <Text>chargement en cours ....</Text> :
                        <FlatList
                            data={data}
                            renderItem={(item) =>
                                <Pressable
                                    onPress={() => {
                                        navigation.navigate('DetailsPage', {
                                            id: item.item.imdbID,
                                            nomFilm: item.item.Title,
                                            anneeFilm: item.item.Year,
                                            genreFilm: item.item.Type
                                        }
                                        )
                                    }}>
                                    <Text></Text>
                                </Pressable>
                            }>
                        </FlatList>
                    }
                </View>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },
    card: {
        flexDirection: 'column',
        alignItems: 'center',
        shadowColor: 'black',
        padding: 30,

    },
    container2: {
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        alignItems: 'center',
        backgroundColor: 'white',

    }
})

export default ListFilm