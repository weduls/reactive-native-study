import React from 'react';
import {Image, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import * as D from './src/data';

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

// chapter 4 - compnent event
// export default function App() {
//     let onPress = () => Alert.alert('home pressed', 'message');
//     return (
//         <SafeAreaView>
//             <Button title='Home' onPress={onPress} />
//             {/*// TouchableOpacity가 조금더 은은한게 이벤트가 발생*/}
//             <TouchableOpacity onPress={onPress}>
//                 <Text>TouchableOpacity</Text>
//             </TouchableOpacity>
//             <TouchableHighlight onPress={onPress}>
//                 <Text>TouchableHighLight</Text>
//             </TouchableHighlight>
//             <TextInput placeholder="enter your name"
//                        onChangeText={(text:string) => console.log(text)}
//                        onFocus={() => console.log('onFocus')}
//                        onBlur={() => console.log('onBlur')}
//                        onEndEditing={() => console.log('onEndEditing')}
//            ></TextInput>
//         </SafeAreaView>
//
//     )
// }


// chapter 4 - style
// // 현재 폰 사이즈
// const {width, height} = Dimensions.get('window');
// // 현재 실행중인 OS확인
// let platform = Platform.OS;
// export default function App() {
//     return (<SafeAreaView style={[styles.safeAreaView, {backgroundColor: 'blue'}]}>
//         <Text style={[styles.text, {color: 'white'}]}>OS: {platform}</Text>
//         <Text style={[styles.text, {color: 'white'}]}>width: {width}px</Text>
//         <Text style={[styles.text, {color: 'white'}]}>height: {height}px</Text>
//
//         <View style={[styles.box, styles.border]}></View>
//         <View style={[styles.box, styles.border, {borderRadius: 20}]}></View>
//         <View style={[styles.box, styles.border, {borderTopLeftRadius: 40, borderBottomLeftRadius: 40}]}></View>
//     </SafeAreaView>);
// }
//
//
//
// // StyleSheet를 만들어서 사용하는게 더 효율적. 인라인으로 그냥 사용할 경우 매번 그려질때 마다 style객체가 생성되어 느려짐
// // 우선순위가 width, height가 flex보다 높다.
// // margin은
// const styles = StyleSheet.create({
//     safeAreaView: {
//         backgroundColor: MD2Colors.blue500,
//         flex: 1,
//         paddingLeft: Platform.select({ios: 0, android: 20})
//     },
//     text: {marginBottom: 10, marginLeft: 50, marginTop: 20, fontSize: 20, color: MD2Colors.blue200},
//     box: {height: 100, width: '70%', backgroundColor: 'white', marginBottom: 10,
//         marginLeft: Platform.select({ios: 20, android: 0})
//     },
//     border: {borderWidth: 10, borderColor: MD2Colors.blue900}
// });


// chapter 4 - font, image
const text = 'Almost before we knew it, we had left the ground'
export default function App() {
    return<SafeAreaView style={styles.flex}>
        <ImageBackground
            style={[styles.backgroundImage]}
            source={require('./src/assets/images/bg.jpg')}>
            <Image source={{uri: avatarUrl}} style={[styles.image]} />
            <View style={[styles.flex, styles.padding10]}>
                <Text style={[styles.text, styles.regular]}>{text} [regular]</Text>
                <Text style={[styles.text, styles.medium]}>{text} [medium]</Text>
                <Text style={[styles.text, styles.semiBold]}>{text} [semiBold]</Text>
                <Text style={[styles.text, styles.bold]}>{text} [bold]</Text>
            </View>
        </ImageBackground>
    </SafeAreaView>
}

const avatarSize = 50;
const avatarUrl = D.randomAvatarUrl()
const styles = StyleSheet.create({
    flex: {flex: 1},
    backgroundImage: {flex: 1},
    image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2},
    padding10: {padding: 10},
    text: {textAlign: 'center', fontSize: 25, color: 'white', marginBottom: 10},

    regular: {fontFamily: 'DancingScript-Regular', fontWeight: '400'},
    medium: {fontFamily: 'DancingScript-Medium', fontWeight: '500'},
    semiBold: {fontFamily: 'DancingScript-SemiBold', fontWeight: '600'},
    bold: {
        fontFamily: 'DancingScript-Bold',
        fontWeight: Platform.select({ios: '700', android: '600'})
    }
})
