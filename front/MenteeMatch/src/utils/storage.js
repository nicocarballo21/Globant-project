import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (value, key) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(`${key}`, jsonValue)
    }
    catch (e) {
        console.log(e)
    }
};

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(`${key}`)
        return value != null ? JSON.parse(value) : null;
    }
    catch(e) {
        console.log(e)
    }
}
