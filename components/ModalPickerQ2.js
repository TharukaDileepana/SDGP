import React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView
} from 'react-native'


const OPTIONS_Q2 = ["Triangular", "Oval", "Hooded"]
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPickerQ2 = (props) => {

    const onPressItems = (optionQ2) => {
        props.changeModalVisibilityQ2(false);
        props.setDataQ2(optionQ2);
    }

    const optionQ2 = OPTIONS_Q2.map((item, index) => {
        return(
            <TouchableOpacity
                style={styles.optionQ2}
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
            onPress={() => props.changeModalVisibilityQ2(false)}
            style={styles.container}
        >
            <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT / 2}]}>
                <ScrollView>
                    {optionQ2}
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

    optionQ2: {
        alignItems: 'flex-start'
    },

    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 1,
    }
})


export { ModalPickerQ2 }