import React, { useState } from "react";
import {View,FlatList , Pressable} from "react-native";

const ListFilm = ({navigation}) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [isShowWidget, setShowData] = useState();
    const url = "http://www.omdbapi.com/?s=${myValueFilm}&apikey=5edd8232'";
    const showData = () => {
        if (isShowWidget == true) {
            console.log('true')
            setShowData(false);
        }
        else {
            console.log('false');
            setShowData(true);
        }
    }
    useEffect(() => {

        const fetchCryptoData = async () => {
            try {
                const response = await axios.get(url, {
                    headers: {
                        'X-CMC_PRO_API_KEY': '5edd8232',
                        "Accept": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((json) => setData(json.data))
                    .catch((error) => console.error(error))
                    .finally(() => setLoading(true));

            } catch (e) {
                console.log(e);
            }
        }
        fetchCryptoData();
    }, []);

    return (
        <View>
            <FlatList
                data={data ?? 0}
                renderItem={(item) =>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('DetailsFilm', {

                            }
                            )
                        }}>
                    </Pressable>
                }>
            </FlatList>
        </View>
    );

}
