import React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView
} from 'react-native'


const OPTIONS_Q3 = ["Brown", "Gray", "Orange", "Black", "Yellow", "Tan", "Reddish", "Bluish Black", "Olive Brown", "Green", "Reddish Brown", "Pinkish Brown", "Yellowish Olive", "Pale Gray ", "Light Brown ", "Olive-Brown  ", "Dark brown"]
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPickerQ3 = (props) => {

    const onPressItems = (optionQ3) => {
        props.changeModalVisibilityQ3(false);
        props.setDataQ3(optionQ3);
    }

    const optionQ3 = OPTIONS_Q3.map((item, index) => {
        return(
            <TouchableOpacity
                style={styles.optionQ3}
                key={index}
                onPress={() => onPressItems(item)}
            >
                <Text
                    style={styles.text}>
                        {item}
                    </Text>
            </TouchableOpacity>
        )
    })

    return (
        <TouchableOpacity
            onPress={() => props.changeModalVisibilityQ3(false)}
            style={styles.container}
        >
            <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT / 2}]}>
                <ScrollView>
                    {optionQ3}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    modal: {
        backgroundColor :'white',
        borderRadius: 10,
        borderColor:'#000',
        borderWidth: 1,
    },

    optionQ3: {
        alignItems: 'flex-start'
    },

    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 1,
    }
})


export { ModalPickerQ3 }