import React, {useState} from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import styles from './styles'

import userImage from '../../assets/static/user_img.png'
import { useSelector } from 'react-redux';


export default () => {
    const[toggleCheckBox, setToggleCheckBox] = useState (false)
    const[toggleCheckBox1, setToggleCheckBox1] = useState (false)
    const now = new Date()
    const hour = now.toLocaleTimeString()
    const date = now.toLocaleDateString()
    const nowMili = Date.now()
    const user = useSelector(state => state.user)
    const { mentor } = user

    return(
        <View style={styles.background}>
            <Text style={styles.text}>Mentor</Text>
            <Image source={{uri: mentor.img}} style={styles.foto}/>
            <Text style={styles.text}>{`${mentor.name} ${mentor.surname}`}</Text>

            <View style={styles.recuadro}>
                <ScrollView style={{margin: 9}}>
                    <Text>Objetivos</Text>
                    <View style={{flexDirection: "row"}}>
                        <CheckBox disabled={false} value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
                        <Text style={styles.inScrollViewText}>Aprender React-Native</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <CheckBox disabled={false} value={toggleCheckBox1}
                        onValueChange={(newValue) => setToggleCheckBox1(newValue)}/>
                        <Text style={styles.inScrollViewText}>Consolidar React-Redux</Text>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.recuadro}>
                <ScrollView style={{margin: 9}}>
                    <Text>Reuniones Programadas</Text>
                    <View>   
                        <View style={styles.inScrollViewDate}>
                            <Text>{date} ---- </Text><Text>{hour}</Text>
                        </View>
                        <View style={styles.inScrollViewObjetive}>
                            <Text style={styles.inScrollViewText}>loremssssssssssssssssssssssssssssss Reunion coooooooooon el mentoraaaaaaaaaaaaa rrrrrr</Text>
                        </View>
                        
                        <View style={styles.inScrollViewDate}>
                            <Text>{date} ---- </Text><Text>{hour}</Text>
                        </View>
                        <View style={styles.inScrollViewObjetive}>
                            <Text style={styles.inScrollViewText}>loremssssssssssssssssssssssssssssss Reunion coooooooooon el mentoraaaaaaaaaaaaa rrrrrr</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
      </View>
    )
};
