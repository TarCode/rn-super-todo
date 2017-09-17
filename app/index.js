import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import store from './store'

import HomeScreen from './components/home'
import TodoScreen from './components/todo'

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Todo: { screen: TodoScreen }
});

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}