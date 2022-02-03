import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeNavigator from './components/navigator';

const App = () => {

  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );

};

export default App;