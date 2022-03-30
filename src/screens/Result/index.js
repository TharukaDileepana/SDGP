import React from "react";
import { ImageBackground, StyleSheet, Text, Image, View } from 'react-native';

const Result = () => {
    return (
        <ImageBackground style={styles.background} source={require('../../img/Encyclopedia.png')}>
            <Text style={styles.heading}>Result</Text>
            <Image style={styles.img} source={require('../../img/King_Cobra.jpg')}></Image>
            <Text style={styles.sname}>King Cobra</Text>
            <Text style={styles.scname}>Ophiophagus Hannah</Text>
            <View style={styles.lineStyle} />
            <Text style={styles.dheading}>Description</Text>
            <Text style={styles.dparagraph}>The king cobra is a venomous snake species of elapids endemic
                to jungles in Southern and Southeast Asia. The sole member of
                the genus Ophiophagus, it is distinguishable from other cobras,
                most noticeably by its size and neck patterns.  The king cobra is
                the world's longest venomous snake. Its skin color varies across
                the habitats, from black with white stripes to unbroken brownish
                grey.  It preys chiefly on other snakes, including its own species.
                Unlike other snakes, it rarely hunts non-reptile vertebrates, such
                as rodents and lizards.
            </Text>
            <View style={styles.lineStyle} />
            <Text style={styles.dheading}>First Aid</Text>
            <Text style={styles.dparagraph}>
                Bandage and Immobilize the bitten limb with crepe bandages
                and splint as described in the Immediate First Aid section. Rest
                this extremity below the level of the patient's heart {'\n'}{'\n'}Transport to a medical center emergency because the Antivenom
                is the only effective antidote for snake venom.
            </Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },

    heading: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginTop: "8%"
    },

    img: {
        width: '45%',
        height: '20%',
        marginTop: '8%',
        marginLeft: "8%",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    sname: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: "58%",
        marginTop: "38%",
        color: "black",
        position: 'absolute',

    },
    scname: {
        fontSize: 15,
        marginLeft: "5%",
        color: "#4EA582",
        marginLeft: "58%",
        marginTop: "45%",
        fontStyle: "italic",
        position: 'absolute',
    },

    lineStyle: {
        borderWidth: 0.8,
        borderColor: 'black',
        margin: 20,
    },

    dheading: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
        color: "black"
    },

    dparagraph: {
        textAlign: "justify",
        color: "black",
        fontSize: 13,
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: "5%"
    }

})

export default Result;