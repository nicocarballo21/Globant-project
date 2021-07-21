import React from 'react';
import { Text, View, Image, Pressable, Button, Alert } from 'react-native';
import { styles } from './styles';
import user_img from '../../assets/static/user_img.png';

export default function UserBlock({ user, handleDislike}) {
  // const dispatch = useDispatch();
  //let history = useHistory();
  // !user.img ? user.img = user_img : user.img
    let userType = ""
    if(user.length > 1){
        user.skillsToLearn.length ? userType = "mentee" : userType = "mentor"
    }

  // !user.img ? user.img = user_img : user.img

    const handleLike = () => {
        console.log("Press")
        // dispatch(setSelectedUser(user))
        // .then(() => history.push('/matcher'))
    }

    // console.log("User en userBlock: ", user)
    
    return (
        <View style={styles.container}>
            {
                user._id ?
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
                        •{ userType === 'mentee' ? user.skillsToTeach.map(skill =>  '  ' + skill + "  •")
                        :
                        user.skillsToLearn.map(skill =>  '  ' + skill.name + "  •")}
                        </Text>
                    </View>

                    <Button title="Like" onPress={() => Alert.alert("Like")}/>
                    <Button title="Dislike" onPress={handleDislike}><Text>Dislike</Text></Button>
                

                </View> 
                    : 
                <Text style={{ textAlign: "center"}}>...</Text>
            }
        </View>
    )
}
