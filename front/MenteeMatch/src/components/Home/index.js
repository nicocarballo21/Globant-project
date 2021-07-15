import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'



export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hola, [userName]. {"\n"}Estos son tus posibles matches:</Text>
            {/* MAPEO, SI EXISTEN, BLOCKES DE USUARIOS DE POSIBLES MATCH */}
            
            <Text style={{ textAlign: "center"}}>{"\n"}User 1</Text>
            <Text style={{ textAlign: "center"}}>{"\n"}User 2</Text>
        </View>
    )
}
