import React, {FC} from 'react'
import {Alert, Image, Text, View} from 'react-native';
import * as D from '../data'
import {styles} from './Person.style'
import moment from 'moment-with-locales-es6'
import {Avatar, IconText} from '../components/intex';
import {MD2Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

moment.locale('ko')
export type PersonProps = {
    person: D.IPerson
}

const avatarPressed = () => Alert.alert('avatar pressed')
const deletePressed = () => Alert.alert('delete pressed')
const countIconPressed = (name: string) => () => Alert.alert(`${name} pressed.`)
const Person: FC<PersonProps> = ({person}) => {
    return (
        <View style={[styles.view]}>
            <View style={[styles.leftView]}>
                <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarPressed}/>
            </View>

            <View style={[styles.rightView]}>
                <Text style={[styles.name]}>{person.name}</Text>
                <Text style={[styles.email]}>{person.email}</Text>
                <View style={[styles.dateView]}>
                    <Text style={[styles.text]}>
                        {moment(person.createdDate).startOf('day').fromNow()}
                    </Text>
                    <Icon name='trash-can-outline' size={26} color={MD2Colors.lightBlue500} onPress={deletePressed}/>
                </View>
                <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>{person.comments}</Text>
                <Image style={[styles.image]} source={{uri: person.image}}/>
                <View style={[styles.countsView]}>
                    <IconText viewStyle={[styles.touchableIcon]}
                              onPress={countIconPressed('comment')}
                              name="comment" size={24} color={MD2Colors.blue500}
                              textStyle={[styles.iconText]} text={person.counts.comment}/>
                    <IconText viewStyle={[styles.touchableIcon]}
                              onPress={countIconPressed('retweet')}
                              name="twitter-retweet" size={24} color={MD2Colors.blue500}
                              textStyle={[styles.iconText]} text={person.counts.retweet}/>
                    <IconText viewStyle={[styles.touchableIcon]}
                              onPress={countIconPressed('heart')}
                              name="heart" size={24} color={MD2Colors.blue500}
                              textStyle={[styles.iconText]} text={person.counts.heart}/>
                </View>
            </View>
        </View>
    )
}
export default Person

