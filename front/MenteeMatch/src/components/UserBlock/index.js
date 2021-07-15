import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import user_img from '../../assets/static/user_img.png'

export default function UserBlock({ user }) {

    return (
        <View>
            {
                user ?
                <View>
                    <Image 
                        style={{ borderWidth: 2,
                                borderRadius: 20,
                                borderColor: "black",
                                resizeMode: "stretch",
                                width: 90,
                                height: 90,
                            }} 
                        source={user_img}
                        />
                        <View>
                            <Text style={styles.title}>{user.name}" "{user.surname}</Text>
                            <Text style={styles.text}>{user.algo}</Text>
                            { user.skills.length ? user.skills.map(skill => { <Text>{skill}</Text> }) : "Sin Skills" }
                            { user.abilities.length ? user.abilities.map(ability => { <Text>{ability}</Text> }) : "Sin Habilidades" }
                        </View>
                </View> 
                    : 
                <Text style={{ textAlign: "center"}}>...</Text>
            }
        </View>
    )
}

