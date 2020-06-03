import React from 'react';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {Provider} from 'react-redux'
import {store} from "./src/redux/store";

import {HomeScreen, PhotoScreen} from "./src/screens";

const {Navigator, Screen} = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigator initialRoute='Home' screenOptions={
                    {

                        headerStyle: {backgroundColor: '#8e44ad'},
                        headerTintColor: "#fff"
                    }
                }>
                    <Screen name='Home' component={HomeScreen} options={ {headerTitle: 'Главная'} }/>
                    <Screen name='Photo' component={PhotoScreen} options={{headerTitle: 'Фото'}}/>
                </Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App
