import React from 'react';
import {
    AppRegistry,
    Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/home'

export default StackNavigator({
    Home: { screen: HomeScreen },
});
