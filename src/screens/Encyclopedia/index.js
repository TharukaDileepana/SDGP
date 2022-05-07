import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Encyclopedia = ({ navigation }) => {
    const [snakes, setSnakes] = useState([])

    useEffect(() => {
        axios.get("https://naaga-api.herokuapp.com/snake")
            .then(res => {
                const allSnakes = res?.data
                setSnakes(allSnakes?.snakes)
            }).catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <ImageBackground
            style={styles.background}
            source={require("../../img/Encyclopedia.png")}>
            <SafeAreaView>
                <ScrollView>
                    <Text style={styles.topic}> Select the Snake {"\n"} </Text>
                    {snakes?.map(item => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                                <View key={item?._id} style={styles.btnContainer}>
                                    <Text style={styles.btnText}>{item?.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </SafeAreaView>

        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
    },

    topic: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold'
    },

    btnContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#4EA582',
    },

    btnText: {
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 10,
        marginVertical: -10
    }
})

export default Encyclopedia;