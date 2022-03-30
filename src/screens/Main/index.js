import React from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { ImageBackground, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, BackHandler } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';

const Main = ({navigation}) => {

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                Alert.alert('', 'Are you sure want to quit ?', [
                    {
                        text: 'Cancel',
                        onPress: () => null,
                    },
                    {
                        text: 'Yes',
                        onPress: () => BackHandler.exitApp(),
                    }
                ]);
                return true;
            };
            // Add event listner to hardware back press
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () => {
                // once the screen gets blur remove event listner
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
            };
        }, []),
    );

    const takePhoto = () =>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
    }

    const choosePhoto = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
    }


    return (
        <ImageBackground style={styles.bgi} source={require("../../img/Background.png")}>
            <SafeAreaView style={styles.area}>
                <TouchableOpacity style={styles.btn1} onPress={takePhoto}><Text style={styles.name1}>Take a Picture</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={choosePhoto}><Text style={styles.name1}>Upload an Image</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Appearance')}><Text style={styles.name1}>Appearance</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Encyclopedia')}><Text style={styles.name1}>Encyclopedia</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn3} onPress={() => navigation.navigate('About')}><Text style={styles.name2}>About Us</Text></TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    area: {
        flex: 1,
        overflow: 'visible',
    },

    btn1: {
        padding: '2.5%',
        backgroundColor: '#4EA582',
        borderRadius: 30,
        width: '80%',
        borderColor: '#fff',
        borderWidth: 3,
        alignSelf: 'center',
        marginTop: '60%',
    },
    btn2: {
        padding: '2.5%',
        backgroundColor: '#4EA582',
        borderRadius: 30,
        borderColor: '#fff',
        borderWidth: 3,
        width: '80%',
        alignSelf: 'center',
        marginTop: '5%',
    },
    btn3: {
        padding: '3%',
        width: '30%',
        alignSelf: 'center',
        marginTop: '30%',
    },
    name2: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: '#000',
    },
    name1: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
    },
    bgi: {
        width: '100%',
        height: '100%',
    }
})

export default Main;