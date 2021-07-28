import React from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList, View, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getSkills } from '../../redux/Reducers/Skills';
import { updateUser } from '../../redux/Reducers/UserReducer';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from "react-native-bouncy-checkbox" ;
import { globantBright } from '../../assets/styles/colors';

export default function RoleEdit() {
    const user = useSelector(state => state.user);
    console.log(user.isMentee)
    const [ renderSkillsToLearn, setRenderSkillsToLearn ] = React.useState(user.isMentee);
    const [ renderSkillsToTeach, setRenderSkillsToTeach] = React.useState(user.isMentor);
    const [ role, setRole ] = React.useState('');
  
    const dispatch = useDispatch();
    const skills = useSelector(state => state.skills);
    const [ selection, setSelection ] = React.useState([]);
    
    React.useEffect(() => {
       if (!skills.length) dispatch(getSkills())
    }, [dispatch, user])

    const menteeCheck = () => {
            setRenderSkillsToTeach(false)
            setRenderSkillsToLearn(!renderSkillsToLearn)
            setRole('mentee');
    }
    
    const mentorCheck = () => {
            setRenderSkillsToLearn(false)
            setRenderSkillsToTeach(!renderSkillsToTeach)
            setRole('mentor');
    }
    
    const handleSubmit = () => {
        if ( role === "mentee" ) {
            if ( user.isMentee ) dispatch(updateUser({ url: `/api/users/skills/skillsToLearn`, data: { [property]: selection }}))
            else {
                return dispatch(updateUser({ url: `/api/users/${role}`, data: {} }))
                    .then(() => dispatch(updateUser({
                        url: `/api/users/skills/skillsToLearn`,
                        data: { [property]: selection },
                        }))
                    )
            } 
        } else if ( role === "mentor" ) {
            if ( user.isMentor ) dispatch(updateUser({ url: `/api/users/skills/skillsToTeach`, data: { [property]: selection }}))
            else {
                return dispatch(updateUser({ url: `/api/users/${role}`, data: {} }))
                    .then(() => dispatch(updateUser({
                        url: `/api/users/skills/skillsToTeach`,
                        data: { [property]: selection },
                        }))
                    )
            } 
        }
        setSelection([]);
    }

    return (
        <SafeAreaView style={{ flex:1, justifyContent: "space-between", alignItems: "center"}}>
            <View style={ styles.container }>
                <BouncyCheckbox 
                    disableBuiltInState={user.isMentee}
                    isChecked={user.isMentee}
                    text="Mentee"
                    fillColor= "#BFD732"
                    iconStyle={{ borderColor: "#BFD732" }}
                    onPress={() => menteeCheck()}
                />
                <BouncyCheckbox 
                    disableBuiltInState={user.isMentor}
                    isChecked={user.isMentor}
                    text="Mentor"
                    fillColor= "#BFD732"
                    iconStyle={{ borderColor: "#BFD732" }}
                    onPress={() => mentorCheck()}
                />
            </View> 
            { renderSkillsToLearn ? (
                <>
                    <Text>Que habilidades quieres aprender?</Text>
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
                            data={skills}
                            keyExtractor={skills => skills._id}
                            renderItem={({ item }) => (
                                <Pressable
                                    style={[styles.pressable]}
                                    onPress={() => console.log(item)}
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
       
            { renderSkillsToTeach ? (
                <>
                    <Text>Que habilidades quieres enseñar?</Text>
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
                            data={skills}
                            keyExtractor={skills => skills._id}
                            renderItem={({ item }) => (
                                <Pressable
                                    style={[styles.pressable]}
                                    onPress={() => console.log(item)}
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

            <TouchableOpacity style={styles.button}
                onPress={() => console.log("SUBMITT")}
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
        flex: 1,
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
})

