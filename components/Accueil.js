import react from "react";
import { View, StyleSheet, Pressable, Text } from 'react-native';


const Accueil = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.txt}>Bienvenue sur mon Application </Text>
            <Pressable onPress={() => {
                navigation.navigate('Recherche');
            }}>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%', paddingRight: 15 }}>
                    <View style={{ borderRadius: 15, backgroundColor: '#6CBAFC', padding: 5, top: 320 }}>

                        <Text style={styles.txtBouton}>
                            Entrer
                        </Text>

                    </View>
                </View>
            </Pressable >
        </View >

    );
};





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3DA6FF',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: "center",
    },
    txtBouton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

    }

});

export default Accueil