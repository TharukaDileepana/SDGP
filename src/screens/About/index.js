import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';

{/*created an array list for the team members*/ }
const teamDetails = [
    {
        id: 1,
        name: "Tharuka Amarasinghe",
        imageUrl: "https://media-exp1.licdn.com/dms/image/C5603AQFEYVztVrOhNQ/profile-displayphoto-shrink_800_800/0/1647679381012?e=1652918400&v=beta&t=0CTBmhKMRmmIJsLv--9BHrO6B4KV41jdZqsXV8_TWTM"
    },
    {
        id: 2,
        name: "Ranul Hewage",
        imageUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQH-GyHlhdyRKg/profile-displayphoto-shrink_800_800/0/1571324393658?e=1652918400&v=beta&t=3kfwSH-Ja3EdEn_vEyDFCum2iDi7dCLlnHtgXLWy194"
    },
    {
        id: 3,
        name: "Imesh Herath",
        imageUrl: "https://media-exp1.licdn.com/dms/image/C5603AQFJNlHbpIx8iA/profile-displayphoto-shrink_800_800/0/1651860931936?e=1657152000&v=beta&t=mSR-ohYy-9HDOcjkZOsMinn29u-r-dtA8R7ctPCqc1k"
    },
    {
        id: 4,
        name: "Vihanga Palihakkara",
        imageUrl: "https://media-exp1.licdn.com/dms/image/D4E03AQE0HU4CMegbOQ/profile-displayphoto-shrink_800_800/0/1648024229984?e=1653523200&v=beta&t=kP6ks84Kp2OnjLDN4Rtp4PjgaWyFg64TWj72BBra3Xg"
    },
    {
        id: 5,
        name: "Chathumi Rubasinghe",
        imageUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQFNwVuzuv6MMQ/profile-displayphoto-shrink_800_800/0/1621837356028?e=1653523200&v=beta&t=tKsd5hr43ucknOFplroT7TWiItdg7rIOSr_Yn5sluvw"
    },
    {
        id: 6,
        name: "Isuka Premathilake",
        imageUrl: "https://media-exp1.licdn.com/dms/image/C5603AQFTcOAjJASiDg/profile-displayphoto-shrink_800_800/0/1648018414081?e=1653523200&v=beta&t=ijXrLObZc73Dw_kxmzsMvqSGwnuZ-nq2mH5zm7G-fus"
    },
]

function About(props) {
    return (

        <ImageBackground
            style={styles.background}
            source={require("../../img/Background.png")}>

            <SafeAreaView style={styles.about}>
                {/* Header Content */}
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        About Us
                    </Text>
                    <Text style={styles.headerContent}>
                        VICTRIC is a group of 2nd year undergraduate students who are following BEng (Hons) Software Engineering degree program at Informatics Institute of Technology (IIT),
                        associated with the University of Westminster.
                    </Text>
                </View>

                {/* Sub Header Content */}
                <View style={styles.subHeader}>
                    <Text style={styles.subHeaderText}>
                        Developer Team
                    </Text>

                    {/*pass the team names and the images from the array*/}
                    <View style={styles.subHeaderContent}>
                        {teamDetails.map((item, index) => {
                            const names = item?.name.split(" ")
                            return (
                                <View key={index} style={styles.card}>
                                    <Image style={styles.devImg} source={{ uri: item.imageUrl }} />
                                    <Text style={styles.teamName}>{names[0]}</Text>
                                    <Text style={styles.teamName}>{names[1]}</Text>
                                </View>
                            )
                        })}
                    </View>
                </View>
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
    about: {
        flex: 1,
        marginHorizontal: 15,
        marginTop: '7%',
        marginBottom: 0,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10
    },
    headerContent: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center'
    },
    subHeader: {
        marginTop: '18%', // adjust
        alignItems: 'center',
        justifyContent: 'center',
    },
    subHeaderText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 15
    },
    subHeaderContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '33%',
        height: '44%'
    },
    devImg: {
        height: 50,
        width: 50,
        borderRadius: 50,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'green',
    },
    teamName: {
        color: '#000'
    }
})
export default About;