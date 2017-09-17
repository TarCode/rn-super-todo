import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { RkButton, RkTextInput, RkText } from 'react-native-ui-kitten';



class supertodo extends Component {
    static navigationOptions = {
        title: 'List',
        headerTintColor: '#FFF',
        headerStyle: {
            backgroundColor: "#1B5E20"
        }
    };
    constructor(props) {
        super(props)
        this.state = {
            todo: ""
        }
    }

    render() {
        const { todos, onTodoClick, addTodo } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.inputHolder}>
                    <RkTextInput style={{
                        width: '50%',

                    }} value={this.state.todo} onChangeText={value => {
                        this.setState({ todo: value })
                    }} label='Name' />
                    <RkButton style={{
                        backgroundColor: "#FF8F00"
                    }} onPress={() => {
                        addTodo(this.state.todo)
                        this.setState({ todo: "" })
                    }}>Add</RkButton>
                </View>
                <View style={styles.listContainer}>
                    {
                        todos && todos.length > 0 ?
                            todos.map((todo, index) => (
                                <RkText onPress={() => {
                                    onTodoClick(todo.id)
                                }} style={{
                                    fontSize: 22,
                                    color: '#fff',
                                    textDecorationLine: todo.completed ? 'line-through' : null
                                }} key={index}>{todo.text}</RkText>
                            )) :
                            <RkText style={{
                                fontSize: 22,
                                color: '#fff'
                            }}>No Items Yet</RkText>
                    }
                </View>
            </View>

        );
    }
}

import { connect } from 'react-redux'
import { toggleTodo, addTodo } from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = state => {
    console.log("STATE", state);
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        },
        addTodo: todo => {
            dispatch(addTodo(todo))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(supertodo)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#2E7D32',
    },
    inputHolder: {
        flex: 0.25,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        borderRadius: 25
    },
    listContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#2E7D32',
    }
});