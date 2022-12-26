import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import * as D from '../data'

const person = D.createRandomPerson();
const ArrowComponent = () => {
    return <SafeAreaView>
        <Text>{JSON.stringify(person, null, 2)}</Text>
    </SafeAreaView>;
}
export default ArrowComponent
