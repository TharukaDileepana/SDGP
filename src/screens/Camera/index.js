import React from 'react';
import{View, StyleSheet, TouchableOpacity, Text, Button} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

export default function Camera(){

const [{ cameraRef }, {takePicture}] = useCamera(null);
const captureHandle = async () => {try {
            const data = await takePicture();
            console.log(data.uri);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <View style={styles.body}>
            <RNCamera ref={cameraRef} type={RNCamera.Constants.Type.back} style={styles.preview}>
                <TouchableOpacity style={styles.btn} onPress={() => captureHandle()}>
                    <Text style={styles.txt}>
                        Capture
                    </Text>
                </TouchableOpacity>
            </RNCamera>
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
    },
     preview:{
         flex: 1,
         alignItems: 'center',
     },
     btn:{
         backgroundColor: '#fff',
         marginTop: '160%',
         borderRadius: 10,
     },
     txt: {
         color: '#000',
         fontSize:20,
         padding: 15,
         fontWeight: 'bold',
     }
})


