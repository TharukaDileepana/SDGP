import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


{/*created an array list for the Snakes names*/}
const snakes = [
    {
        id: 1,
        name: "Saw - Scaled Viper"
    },

    {
        id: 2,
        name: "Ceylon Krait"
    },

    {
        id: 3,
        name: "Cobra"
    },

    {
        id: 4,
        name: "Common Krait"
    },

    {
        id: 5,
        name: "Russell Viper"
    },

    {
        id: 6,
        name: "Merrem's Hump - Nosed Viper"
    },

    {
        id: 7,
        name: "Ceylon Pit Viper"
    },

    {
        id: 8,
        name: "Forsten's cat snake"
    },

    {
        id: 9,
        name: "Sri Lankan Green Vine Snakera"
    },

    {
        id: 10,
        name: "Ceylonese Cylinder Snake"
    },

    {
        id: 11,
        name: "Lowland's hump-nosed pit viper"
    },

    {
        id: 12,
        name: "Sri Lanka cat snake"
    },

    {
        id: 13,
        name: "Indian Wolf Snake"
    },

    {
        id: 14,
        name: "Common Cat Snake"
    },

    {
        id: 15,
        name: "Dumeril's Kukri Snake"
    },

    {
        id: 16,
        name: "Buff Striped Keelback"
    },

    {
        id: 17,
        name: "Indian Python"
    },

    {
        id: 18,
        name: "Rat Snake"
    },

    {
        id: 19,
        name: "Sand Boa"
    },

    {
        id: 20,
        name: "Little Wart"
    },
]


const Encyclopedia = ({navigation}) => {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../../img/Encyclopedia.png")}
        >
            <SafeAreaView>
                <ScrollView>
                    <Text style={styles.topic}> Select the Snake {"\n"} </Text>

                    {/*pass the team names from the array*/}
                    {snakes.map((item, index) => {
                        const names = item?.name.split("\n")
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                            <View key={index} style={styles.btnContainer}>
                                <Text style={styles.btnText}>{names[0]}</Text>
                                <Text style={styles.btnText}>{names[1]}</Text>
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
        marginBottom: 10,
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
        paddingTop: 25,
        marginHorizontal: 10,
        marginVertical: -10
    }
})

export default Encyclopedia;