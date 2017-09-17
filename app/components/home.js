import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { RkButton, RkCard } from 'react-native-ui-kitten';



export default class supertodo extends Component {
    static navigationOptions = {
        title: 'SuperTodo',
        headerTintColor: '#FFF',
        headerStyle: {
            backgroundColor: "#1B5E20"
        }
    };
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to SuperTodo</Text>
                <Text style={styles.instructions}> Built with React Native!</Text>
                <RkButton onPress={() => { navigate('Todo') }}>Enter</RkButton>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2E7D32',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff'
    },
    instructions: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: 5,
    },
});