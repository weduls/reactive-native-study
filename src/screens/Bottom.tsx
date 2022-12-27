import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSize = 30, iconColor = 'white';
const icons = ['home', 'table-search', 'ab-testing', 'account-settings'];
export default function BottomBar() {
    const childrun = icons.map((name) => (
        <Icon key={name} name={name} size={iconSize} color={iconColor}/>
    ));
    return <View style={styles.view}>{childrun}</View>;
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10,
        backgroundColor: MD2Colors.blue900,
    },
    text: {fontSize: 20, color: 'white'},
});
