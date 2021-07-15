import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles'



export default function Matcher() {

    const shiftBestTwo = (arr) => {

    }

    let { isLoggedIn, user, users } = useSelector(store => store);
    // let posibles = shiftBestTwo(users, user)

    const handlePressBlock = () => {
        console.log("Presionaste en UserBlock")
        //Pushear
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hola, [userName]. {"\n"}Estos son tus posibles matches:</Text>
            {/* MAPEO, SI EXISTEN, BLOQUES DE USUARIOS DE POSIBLES MATCH */}
            <Button onPress={handlePressBlock}>

            </Button>

            <Text style={{ textAlign: "center"}}>{"\n"}User 1</Text>
            <Text style={{ textAlign: "center"}}>{"\n"}User 2</Text>
        </View>
    )
}
