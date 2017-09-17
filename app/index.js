import React from 'react';
import {
    AppRegistry,
    Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/home'

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return <Text>Hello, Navigation!</Text>;
    }
}

export default StackNavigator({
    Home: { screen: HomeScreen, title: "SuperTodo" },
});
