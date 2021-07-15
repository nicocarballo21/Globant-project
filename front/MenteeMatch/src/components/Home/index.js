import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles'



export default function Home() {

    const shiftBestTwo = (arr) => {

    }

    const user = useSelector(store => store.user)
    const users = useSelector(store => store.users)
    let posibles = shiftBestTwo(users, user)

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
