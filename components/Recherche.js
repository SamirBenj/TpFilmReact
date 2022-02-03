import React, { useState } from "react";
import { StyleSheet, View, TextInput, Pressable } from 'react-native';

const Form = ({ navigation }) => {
    const [myValueFilm, setValueFilm] = useState('');
    return (

        <View style={styles.Container}>

            <TextInput style={styles.txtInput}
                placeholder='Entrer votre film '
                onChangeText={(value) => { setValueFilm(value); }}
            />

            <Pressable onPress={() => {
                navigation.navigate('ListFilm', {
                    nomFilm: myValueFilm,
                })
            }}>
            </Pressable>
        </View >
    );
}

const styles = StyleSheet.create({
    txtInput: {
        borderRadius: 15,
        fontWeight: 'bold',
    },
    Container: {
        flex: 1,
        backgroundColor: '#3DA6FF',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    }
})

export default Form