import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { RkButton, RkCard } from 'react-native-ui-kitten';



export default class supertodo extends Component {
    render() {
        return (
            <RkCard>
                <View rkCardHeader>
                    <Text>Header</Text>
                </View>
                <View rkCardContent>
                    <Text> quick brown fox jumps over the lazy dog</Text>
                </View>
                <View rkCardFooter>
                    <Text>Footer</Text>
                </View>
            </RkCard>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});