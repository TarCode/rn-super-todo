import React from 'react';
import {
    AppRegistry,
    Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'


import HomeScreen from './components/home'
import TodoScreen from './components/todo'

export default StackNavigator({
    Home: { screen: HomeScreen },
    Todo: { screen: TodoScreen }
});

// export default <Provider store={store}>

// </Provider>