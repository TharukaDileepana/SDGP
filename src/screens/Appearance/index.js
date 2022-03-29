import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ModalPickerQ1 } from '../../../components/ModalPickerQ1';
import { ModalPickerQ2 } from '../../../components/ModalPickerQ2';
import { ModalPickerQ3 } from '../../../components/ModalPickerQ3';

const Appearance = ({navigation}) => {

    {/*add a state to the answer dropdown*/}
    const [chooseDataQ1, setchooseDataQ1] = useState('Select Pattern');
    const [chooseDataQ2, setchooseDataQ2] = useState('Select Head Shape');
    const [chooseDataQ3, setchooseDataQ3] = useState('Select Skin Colour');

    {/*when user click the answer dropdown, above states will hide and show the answers*/}
    const [isModelVisibleQ1, setisModelVisibleQ1] = useState(false)
    const [isModelVisibleQ2, setisModelVisibleQ2] = useState(false)
    const [isModelVisibleQ3, setisModelVisibleQ3] = useState(false)


    const changeModalVisibilityQ1 = (bool) => {
        setisModelVisibleQ1(bool)
    }

    const changeModalVisibilityQ2 = (bool) => {
        setisModelVisibleQ2(bool)
    }

    const changeModalVisibilityQ3 = (bool) => {
        setisModelVisibleQ3(bool)
    }

    const setDataQ1 = (optionQ1) => {
        setchooseDataQ1(optionQ1)
    }

    const setDataQ2 = (optionQ2) => {
        setchooseDataQ2(optionQ2)
    }

    const setDataQ3 = (optionQ3) => {
        setchooseDataQ3(optionQ3)
    }


    return (
        <ImageBackground
            style={styles.background}
            source={require("../../img/Background.png")} >

            <SafeAreaView style={styles.container}>
                {/*Header content*/}    
                <Text style={styles.topic}>Answer the below questions to identify the snake{"\n"} </Text>

                {/*1st question*/}    
                <Text style={styles.q1}>1. What kind of pattern does the snake have?</Text>
                <Text style={styles.ans}
                    onPress={() => changeModalVisibilityQ1(true)}>  {/*get the answers as a dropdown*/}   
                    {chooseDataQ1}
                </Text>

                <Text style={styles.q1}>{"\n"}2. What is the shape of the Head?</Text>
                <Text style={styles.ans}
                    onPress={() => changeModalVisibilityQ2(true)}>  {/*get the answers as a dropdown*/}  
                    {chooseDataQ2}
                </Text>

                <Text style={styles.q1}>{"\n"}3. What is the skin colour of the snake?</Text>
                <Text style={styles.ans}
                    onPress={() => changeModalVisibilityQ3(true)}>  {/*get the answers as a dropdown*/}  
                    {chooseDataQ3}
                </Text>

                {/*get the model picker for the dropdown*/}  
                <Modal
                    transparent={true}
                    animationType={'fade'}
                    visible={isModelVisibleQ1}
                    nRequestClose={() => changeModalVisibilityQ1(false)}
                >
                    <ModalPickerQ1
                        changeModalVisibilityQ1={changeModalVisibilityQ1}
                        setDataQ1={setDataQ1}
                    />
                </Modal>

                <Modal
                    transparent={true}
                    animationType={'fade'}
                    visible={isModelVisibleQ2}
                    nRequestClose={() => changeModalVisibilityQ2(false)}
                >
                    <ModalPickerQ2
                        changeModalVisibilityQ2={changeModalVisibilityQ2}
                        setDataQ2={setDataQ2}
                    />
                </Modal>

                <Modal
                    transparent={true}
                    animationType={'fade'}
                    visible={isModelVisibleQ3}
                    nRequestClose={() => changeModalVisibilityQ3(false)}
                >
                    <ModalPickerQ3
                        changeModalVisibilityQ3={changeModalVisibilityQ3}
                        setDataQ3={setDataQ3}
                    />
                </Modal>
                
                {/*submit button*/}  
                <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                    <View style={styles.btnContainer}>
                        <Text style={styles.btnText}> Submit </Text>
                    </View>

                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    )
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

    q1: {
        color: '#000',
        fontSize: 18,
    },

    ans: {
        backgroundColor: '#D3D3D3',
        color: '#000',
        marginVertical: 20,
        fontSize: 14,
        borderColor: '#000',
        borderRadius: 50,
        borderWidth: 1,
        padding: 10
    },

    container: {
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        marginHorizontal: 9
    },

    btnContainer: {
        marginHorizontal: 100,
        marginVertical: 40,
        height: 40,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#4EA582'
    },

    btnText: {
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }

})

export default Appearance;