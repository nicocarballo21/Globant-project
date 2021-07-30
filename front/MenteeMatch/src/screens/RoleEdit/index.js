import React from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList, View, Pressable, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getSkills } from '../../redux/Reducers/Skills';
import { updateUser } from '../../redux/Reducers/UserReducer';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from "react-native-bouncy-checkbox" ;
import { globantBright } from '../../assets/styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function RoleEdit({ navigation }) {
    const user = useSelector(state => state.user);
    const [ menteeBox, setMenteeBox] = React.useState(user.isMentee);
    const [ mentorBox, setMentorBox] = React.useState(user.isMentor);
    const [ role, setRole ] = React.useState('');
  
    const dispatch = useDispatch();
    const skills = useSelector(state => state.skills);
    
    React.useEffect(() => {
       if (!skills.length) dispatch(getSkills())
    }, [dispatch, user.isMentor, user.isMentee])

    const menteeCheck = () => {
        setMenteeBox(!menteeBox)
        if (menteeBox) setRole('mentee');
    }
    
    const mentorCheck = () => {
        setMentorBox(!mentorBox)
        if (mentorBox) setRole('mentor');
    }
    
    const handleSubmit = () => {
        if ( role === "mentee" && !user.isMentee ) {
            return dispatch(updateUser({ url: `/api/users/${role}`, data: {} }))
                .then(() => ToastAndroid.showWithGravityAndOffset("Ahora tambien sos Mentee!", ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50))
        }
        else if ( role === "mentor" && !user.isMentor) {
                return dispatch(updateUser({ url: `/api/users/${role}`, data: {} }))
                    .then(() => ToastAndroid.showWithGravityAndOffset("Ahora tambien sos Mentor!", ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50))
        } 
    }

    return (
        <SafeAreaView style={{ flex:1, justifyContent: "space-around", alignItems: "center"}}>
            <View >
                <BouncyCheckbox 
                    disableBuiltInState={user.isMentee}
                    isChecked={user.isMentee}
                    text="Mentee"
                    fillColor= "#BFD732"
                    iconStyle={{ borderColor: "#BFD732" }}
                    onPress={() => user.isMentee ? ToastAndroid.showWithGravityAndOffset("No puedes desmarcar esta opcion", ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50): menteeCheck()}
                />
            { user.isMentee ? (
                <>
                <TouchableOpacity style={styles.editButton}
                    onPress={() => navigation.navigate("Skills", { name: "Mentee", learnOrTeach: "learn", property:"skillsToLearn"})}
                >
                    <Text style={styles.editText} >editar</Text>
                </TouchableOpacity>
                    <View style={styles.btnsContainer}>
                        <FlatList
                            scrollEnabled={true}
                            contentContainerStyle={{
                                alignSelf: 'center',
                                alignItems: 'center',
                            }}
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={user.skillsToLearn}
                            keyExtractor={skills => skills._id}
                            renderItem={({ item }) => (
                                <Pressable
                                    style={[styles.pressable]}
                                >
                                <Text style={styles.pressableTxt}>{item.name}</Text>
                                </Pressable>
                            )}
                        />
                    </View>
                </>

            ) : (
                null
            )}

            </View> 
                <BouncyCheckbox 
                    disableBuiltInState={user.isMentor}
                    isChecked={user.isMentor}
                    text="Mentor"
                    fillColor= "#BFD732"
                    iconStyle={{ borderColor: "#BFD732" }}
                    onPress={() => mentorCheck()}
                    onPress={() => user.isMentor ? ToastAndroid.showWithGravityAndOffset("No puedes desmarcar esta opcion", ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50): mentorCheck()}
                />

       
            { user.isMentor ? (
                <>
                <TouchableOpacity style={styles.editButton}
                    onPress={() => navigation.navigate("Skills", { name: "Mentor", learnOrTeach: "teach", property:"skillsToTeach"})}
                >
                    <Text style={styles.editText} >editar</Text>
                </TouchableOpacity>
                    <View style={styles.btnsContainer}>
                        <FlatList
                            scrollEnabled={true}
                            contentContainerStyle={{
                                alignSelf: 'center',
                                alignItems: 'center',
                            }}
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={user.skillsToTeach}
                            keyExtractor={skills => skills._id}
                            renderItem={({ item }) => (
                                <Pressable
                                    style={[styles.pressable]}
                                >
                                <Text style={styles.pressableTxt}>{item.name}</Text>
                                </Pressable>
                            )}
                        />
                    </View>
                </>

            ) : (
                <Text>Todavia no eres Mentor</Text>
            )}

            <TouchableOpacity style={styles.button}
                onPress={() => handleSubmit()}
            >
                <LinearGradient
                    colors={['#D9E021', '#8CC63f']}
                    useAngle={true} angle={40} angleCenter={{x:0.5,y:0.5}}
                    style={styles.gradient}
                >
                    <Text style={styles.text} >Confirmar</Text>
                </LinearGradient>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    gradient: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    button: {
        width: "30%",
        height: 50,
    },
    text: {
        color: "white",
        fontSize: 16,
    },
    btnsContainer: {
        flexDirection: 'row',
        position: 'relative',
        borderColor: globantBright.blackPearl,
        backgroundColor: globantBright.lightgray,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        elevation: 1,
    },
    pressable: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: globantBright.bg,
        paddingHorizontal: 16,
        height: 50,
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: globantBright.charade,
        margin: 5,
        elevation: 5,
        width: 120,
        height: 75,
    },
    pressableTxt: {
        color: globantBright.text,
    },
    editButton: {
        alignItems: "center",
        justifyContent: "center",
        height: "5%",
        width: "15%",
        backgroundColor: "#BFD732",
        borderRadius: 10
    },
    editText: {
        fontSize: 16,
        color: "#FFF"
    }
})

