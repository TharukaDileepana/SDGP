import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text } from 'react-native';

const About = () => {
    return (
        <ImageBackground 
        style = {styles.background}
        source={require('../../img/Background.png')}>

            <SafeAreaView style = {styles.about}>
                <Text style = {styles.head}>
                    About Us
                </Text>
                <Text style = {styles.txt}>
                    VICTRIC is a group of 2nd year undergraduate students who are following BEng (Hons) Software Engineering degree program at Informatics Institute of Technology (IIT),
                    associated with the University of Westminster
                </Text>

                <Text style = {styles.head2}>
                    Development Team
                </Text>

                <Text style = {styles.tm1}>
                    Tharuka {'\n'} Amarasinghe
                </Text>

                <Text style = {styles.tm2}>
                    Ranul {'\n'} Hewage
                </Text>

                <Text style = {styles.tm3}>
                    Imesh {'\n'} Herath
                </Text>

                <Text style = {styles.tm4}>
                    Vihanga {'\n'} Palihakkara
                </Text>

                <Text style = {styles.tm5}>
                    Chathumi {'\n'} Rubasinghe
                </Text>

                <Text style = {styles.tm6}>
                    Isuka {'\n'} Premathilake
                </Text>
            </SafeAreaView>
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    about: {
        flex: 1,
        overflow: 'visible',
    },

    background: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
    },

    head: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        marginTop: '13%',
    },

    head2: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        marginTop: '30%',
        marginBottom: '70%',
    },

    txt: {
        flex: 1,
        textAlign: 'justify',
        marginTop: '25%',
        marginBottom: '55%',
        padding: '5%',
        fontSize: 17,
        color: 'black',
        position: 'absolute',
    },

    tm1: {
        flex:1,
        textAlign: 'center',
        marginLeft: '2%',
        marginTop: '109.5%',
        marginBottom: '100%',
        fontSize: 16,
        color: 'black',
        position: 'absolute',
    },

    tm2: {
        flex:1,
        textAlign: 'center',
        marginLeft: '32%',
        marginTop: '109.5%',
        marginBottom: '100%',
        fontSize: 16,
        color: 'black',
        position: 'absolute',
    },

    tm3: {
        flex:1,
        textAlign: 'center',
        marginLeft: '70%',
        marginTop: '109.5%',
        marginBottom: '100%',
        fontSize: 16,
        color: 'black',
        position: 'absolute',
    },

    tm4: {
        flex:1,
        textAlign: 'center',
        marginLeft: '2%',
        marginTop: '148%',
        marginBottom: '100%',
        fontSize: 16,
        color: 'black',
        position: 'absolute',
    },

    tm5: {
        flex:1,
        textAlign: 'center',
        marginLeft: '32%',
        marginTop: '148%',
        marginBottom: '100%',
        fontSize: 16,
        color: 'black',
        position: 'absolute',
    },

    tm6: {
        flex:1,
        textAlign: 'center',
        marginLeft: '70%',
        marginTop: '148%',
        marginBottom: '100%',
        fontSize: 16,
        color: 'black',
        position: 'absolute',
    },


})
export default About;