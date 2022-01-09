import React from 'react';
import { Image, ImageBackground, View, StyleSheet } from 'react-native';

const Loading = ({navigation}) => {

    setTimeout(() => {
        navigation.navigate('Main');
    },2000);

    return (
        <View>
            <ImageBackground style={styles.bgi} source={require('../../img/loadingBanner.png')}>
                <Image style={styles.logo} source={require('../../img/Logo.png')}></Image>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({

    bgi: {
        width: '100%',
        height: '100%',
    },
    logo: {
        width: '52%',
        height: '30%',
        alignSelf: 'center',
        marginTop: '40%',
    },
})

export default Loading;