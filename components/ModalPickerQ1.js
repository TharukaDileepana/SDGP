import React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView
} from 'react-native'


const OPTIONS = ["Whitish zigzag band across the spine", "Two circular  patterns connected by a curved line on the Hood", "White bands across the spine", "Brown spots with black border along the spine and sides of the body", "Dark spots near the spine", "Black pattern alone the spine", "Brown bands across the spine", "Black stripe patter across the body", "Black network pattern along the body", "White band at the base of the head and more across the spine", "Yellow band at the base of the head and more across the spine", "Brown marks both side of the body", "Two yellowish stripes along the length with black stripes across the spine", "Big brown patches", 
"Brown zigzag band along the spine", "Large dark brown spots along the spine", "None"]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPickerQ1 = (props) => {

    const onPressItems = (optionQ1) => {
        props.changeModalVisibilityQ1(false);
        props.setDataQ1(optionQ1);
    }

    {/*pass the options from the above list*/}
    const optionQ1 = OPTIONS.map((item, index) => {
        return(
            <TouchableOpacity
                style={styles.optionQ1}
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

    {/*creating the dropdown*/}  
    return (
        <TouchableOpacity
            onPress={() => props.changeModalVisibilityQ1(false)}
            style={styles.container}
        >
            <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT / 2}]}>
                <ScrollView>
                    {optionQ1}
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

    optionQ1: {
        alignItems: 'flex-start',
        
    },

    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        color: "#000"
    }
})


export { ModalPickerQ1 }