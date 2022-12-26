import React from 'react';
import {Alert, Button, SafeAreaView, Text, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';

// chapter 3
// const person = D.makeArray(100).map(D.createRandomPerson)
// export default function App() {
//     const children = person.map((person) => (
//         // key는 랜더링시 필요함
//         <Person key={person.id} person={person}/>
//     ))
//
//     return (
//         <SafeAreaView>
//             <ScrollView>{children}</ScrollView>
//         </SafeAreaView>
//     )
// }

export default function App() {
    let onPress = () => Alert.alert('home pressed', 'message');
    return (
        <SafeAreaView>
            <Button title='Home' onPress={onPress} />
            {/*// TouchableOpacity가 조금더 은은한게 이벤트가 발생*/}
            <TouchableOpacity onPress={onPress}>
                <Text>TouchableOpacity</Text>
            </TouchableOpacity>
            <TouchableHighlight onPress={onPress}>
                <Text>TouchableHighLight</Text>
            </TouchableHighlight>
            <TextInput placeholder="enter your name"
                       onChangeText={(text:string) => console.log(text)}
                       onFocus={() => console.log('onFocus')}
                       onBlur={() => console.log('onBlur')}
                       onEndEditing={() => console.log('onEndEditing')}
           ></TextInput>
        </SafeAreaView>

    )
}
