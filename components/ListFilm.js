import React, { useState } from "react";
import { View, FlatList, Pressable, StyleSheet } from "react-native";
import ItemRow from "./Items";

const ListFilm = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();//données Film
    const url = `http://www.omdbapi.com/?s=${myValueFilm}&apikey=5edd8232`;

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
        <View style={styles.mainContainer}>
            <View style={styles.card}>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{ flex: 1, padding: 30 }}>
                    {isLoading ? <Text>chargement en cours ....</Text> :
                        <FlatList
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
                                    <ItemRow item={item}></ItemRow>
                                </Pressable>
                            }>
                        </FlatList>
                    }
                </View>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'blue',
    },
    card: {
        flexDirection: 'column',
        alignItems: 'center',
        shadowColor: 'black',
        padding: 30,

    }
})

export default ListFilm