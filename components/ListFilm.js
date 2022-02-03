import React, { useState } from "react";
import { View, FlatList, Pressable } from "react-native";


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
        <View>
            {isLoading ? <Text>chargement en cours ....</Text> :
                <FlatList
                    renderItem={(item) =>
                        <Pressable
                            onPress={() => {
                                navigation.navigate('DetailsFilm', {});
                            }}>
                        </Pressable>
                    }>
                </FlatList>}
        </View>
    );

}

export default ListFilm