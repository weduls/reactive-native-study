module.exports = {
    project: {
        ios: {},
        android: {}
    },
    assets: ['./src/assets/fonts']
}
// native 자원인 font등을 사용할 때 필요한 정의이고 npx react-native link (npx react-native-asset 대체됨) 명령어와 ios는 npx pod-install를 실행해서 적용을 해줘야 반영된다.
