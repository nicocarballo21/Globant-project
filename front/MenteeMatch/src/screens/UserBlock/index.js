import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { styles } from './styles';
import user_img from '../../assets/static/user_img.png';

export default function UserBlock({ user }) {
  // const dispatch = useDispatch();
  //let history = useHistory();
  // !user.img ? user.img = user_img : user.img

  // !user.img ? user.img = user_img : user.img
  const handlePress = () => {};

    const handlePress = () => {
        console.log("Press")
        // dispatch(setSelectedUser(user))
        // .then(() => history.push('/matcher'))
    }
    
    return (
        <Pressable style={styles.container} onPress={handlePress}>
            {
                user ?
                <View style={styles.block}>
                   <View style={{flexDirection: "row" }}>
                        <Image 
                        style={styles.img} 
                        source={user.img ? {uri: user.img} : user_img}
                        />
                        <View>
                            <Text style={styles.title}>{user.name} {user.surname}</Text>
                            <Text style={styles.text}>{user.email}</Text>
                        </View>
                    </View>
                    <View style={styles.skillsContainer}>
                        <Text style={styles.skills}>
                        •{ user.skills.length ? user.skills.map(skill =>  '  ' + skill + "  •") : "Sin Skills" }
                        {/* { user.abilities.length ? user.abilities.map(ability => { <Text>{ability}</Text> }) : "Sin Habilidades" } */}
                        </Text>
                    </View>
                </View> 
                    : 
                <Text style={{ textAlign: "center"}}>...</Text>
            }
        </Pressable>
    )
}
