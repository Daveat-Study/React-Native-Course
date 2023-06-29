import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/add_todo';

export default function App(){

    const [todos, setTodo] = useState([
        {text: 'buy coffee', key: 1},
        {text: 'create an app', key: 2},
        {text: 'play on the switch', key: 3},
    ]);

    const pressHanlder = (key) => {
        setTodo( (prevTodos) => {
            return prevTodos.filter( (todo) => todo.key != key);
        });
    }

    const submitHandler = (text, key) => {
        console.log(key);
        setTodo( (prevTodos) => {
            return [
                ...prevTodos,
                {text: text, key: key}
            ]
        });
    };

    return (
        <View style={style.container}>
            <Header />
            <View style={style.content}>
                <AddTodo submitHandler={submitHandler} length={todos.length}/>
                <FlatList 
                    data= {todos}
                    renderItem={ ({item}) => (
                        <TodoItem item={item} pressHandler={pressHanlder}/>
                    )}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        padding: 40,
    },
    list: {

    }
});