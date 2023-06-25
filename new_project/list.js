import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import styles from './style';


export function ListView(){

    const [people, setPeople] = useState([
        { name: 'shaun', key: '1'},
        { name: 'yoshi', key: '2'},
        { name: 'mario', key: '3'},
        { name: 'luigi', key: '4'},
        { name: 'peach', key: '5'},
        { name: 'toad', key: '6'},
        { name: 'browser', key: '7'}
    ]);

    return (
        <View style={styles.container}>
            <Text>Hello List View</Text>
        </View>
    );
}