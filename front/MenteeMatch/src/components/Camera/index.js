import React from "react";
import { RNCamera } from "react-native-camera";
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useCamera } from 'react-native-camera-hooks';
export default function Camera ( { onPicture } )  {
    const [{cameraRef}, { takePicture }] = useCamera(null);
    
    const takePhoto = async () => {
            try {
                const data = await takePicture();
                onPicture(data.uri)
                console.log(data.uri)
            }
            catch (err) {
                console.log(err)
            }

    }
    
    return (
        <View style={{flex:1}}>
            <RNCamera
                ref={cameraRef} 
                captureAudio={false}    
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
            >
            <TouchableOpacity
                style={styles.capture}
                onPress={() => takePhoto()}>
                    <Text>CAMERA</Text>
            </ TouchableOpacity>
            </RNCamera>
        </View>
        ); 
}

const styles = StyleSheet.create({
    capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  }, 
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});

