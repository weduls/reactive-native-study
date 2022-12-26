import React from 'react'
import type {FC} from 'react'
import {SafeAreaView, Text} from 'react-native';
import * as D from '../data'

export type PersonProps = {
    person: D.IPerson
}

// typescript code를 javascript로 바꾸고 싶을 때 사용하는 것
// parameter는 가변 속성
const Person: FC<PersonProps> = ({person}) => {
    return <SafeAreaView>
        <Text>{JSON.stringify(person, null, 2)}</Text>
    </SafeAreaView>;
}
export default Person
