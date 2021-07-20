import React from "react";
import { RNCamera } from "react-native-camera";
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { useCamera } from 'react-native-camera-hooks';

export default function Camera( {  route, navigation } ) {
    const [ { cameraRef }, { takePicture } ] = useCamera(null);
    const [ imgCache, setImgCache ] = React.useState("");
    
    React.useEffect(() => {

    }, [imgCache])
    
    const takePhoto = async () => {
        try {
            const data = await takePicture();
            setImgCache(data.uri)
        }
        catch (err) {
            console.log(err)
        }
    };
    const setProfile = () => {
        route.params.onPicture(imgCache)
        setImgCache("")
        navigation.navigate("UserDetails")
    }
    
    return (
        <View style={{flex:1}}>
        { imgCache ? (
            <>
                <Image source={{uri: imgCache}} style={styles.preview} />
                <TouchableOpacity
                    style={styles.capture}
                    onPress={() => setImgCache("")}
                >
                    <Text>Tomar otra foto</Text>
                </ TouchableOpacity>
                <TouchableOpacity
                    style={styles.capture}
                    onPress={() => setProfile()}
                >
                    <Text>Confirmar</Text>
                </ TouchableOpacity>
            </>
            ) : (
            <RNCamera
                ref={cameraRef} 
                captureAudio={false}    
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
            >
            <TouchableOpacity
                style={styles.capture}
                onPress={() => takePhoto()}
            >
                <Text>CAMERA</Text>
            </ TouchableOpacity>
            </RNCamera>
            )
        }
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
