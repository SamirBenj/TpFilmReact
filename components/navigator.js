import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from './Accueil';
import Recherche from './Recherche';
import ListFilm from './ListFilm';
import DetailsFilm from './DetailsFilm';


const Stack = createNativeStackNavigator();

export default class HomeNavigator extends React.Component {

    render() {
        return (
            <Stack.Navigator

            >

                <Stack.Screen

                    name="Home"
                    component={Accueil}
                    options={{ title: 'Accueil', headerShown: false }}
                />
                <Stack.Screen

                    name="Recherche"
                    component={Recherche}
                    options={{ title: 'Recherche de Film', headerShown: false }}
                />
                <Stack.Screen

                    name="ListFilm"
                    component={ListFilm}
                    options={{ title: 'Liste Des Film Rechercher', headerShown: false }}
                />
                <Stack.Screen

                    name="DetailsFilm"
                    component={DetailsFilm}
                    options={{ title: 'Details Film', headerShown: false }}
                />


            </Stack.Navigator>
        )
    }
}

