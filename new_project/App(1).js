import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

// export default ListView;

export default function App(){

    /// Video 6
    const [people, setPeople] = useState([
        { name: 'shaun', key: '1'},
        { name: 'yoshi', key: '2'},
        { name: 'mario', key: '3'},
        { name: 'luigi', key: '4'},
        { name: 'peach', key: '5'},
        { name: 'toad', key: '6'},
        { name: 'browser', key: '7'}
    ]);
    
    /// Video 7
    const pressHanlder = (id) => {
      console.log(id);
      setPeople( (prevPeople) =>  prevPeople.filter( person => person.key != id) );
    }

    return (
        <View style={styles.container}>
          {/* Video 7 */}
          <FlatList
            numColumns={3}
            keyExtractor={ (item) => item.key }
            data={people}
            renderItem={ ({item}) => (
              <TouchableOpacity onPress={ () => pressHanlder(item.key)}>
                <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

          {/* { people.map( (item) => {
            return (
                <View key={item.key}>
                    <Text style={styles.itemp}>{item.name}</Text>
                </View>
            );
          })} */}
        </View>
    );

    /// Video 5
//   const [name, setName] = useState('Corn');
//   const [age, setAge] = useState('30');
//   const [person, setPerson] = useState({name: 'Ravin', age: 40});

//   const clickHanlder = () => {
//     setName('Daveat');
//     setPerson({name: "Sokhom", age: 45});
//   }

//   (
//     <View style={styles.container}>

//       <Text>Enter name:</Text>
//       <TextInput 
//         multiline
//         style={styles.input}
//         placeholder='e.g. John Doe'
//         onChangeText={ (val) => setName(val) }
//       />

//       <Text>Enter age:</Text>
//       <TextInput 
//         style={styles.input}
//         keyboardType='numberic'
//         onChangeText={ (val) => setAge(val) }
//       />

//       <Text>His name is {name} and age {age}</Text>

//       <Text>His name is {person.name} and age {person.age}</Text>

//       <View style={styles.buttonContainer}>
//         <Button title="Update state" onPress={clickHanlder} />
//       </View>

//     </View>
//   );

}

const styles = StyleSheet.create({
    // View 6
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,
        marginHorizontal: 10
    },

    // Video 5
    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200 
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
      backgroundColor: 'pink',
      padding: 20
    },
    boldText: {
      fontWeight: 'bold'
    },
    body: {
      backgroundColor: 'yellow',
      padding: 20
    },
    buttonContainer: {
      marginTop: 20
    }
  
  })

// export styles;