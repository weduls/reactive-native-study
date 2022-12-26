import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ClassComponent from './src/screens/ClassComponent';
import ArrowComponent from './src/screens/ArrowComponent';
import * as D from './src/data'
import Person from './src/screens/Person';

const person = D.makeArray(100).map(D.createRandomPerson)
export default function App() {
    const children = person.map((person) => (
        // key는 랜더링시 필요함
        <Person key={person.id} person={person}/>
    ))

    return (
        <SafeAreaView>
            <ScrollView>{children}</ScrollView>
        </SafeAreaView>
    )
}
