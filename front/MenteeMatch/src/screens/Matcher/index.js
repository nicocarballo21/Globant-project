import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { View, Text } from 'react-native'
import styles from './styles'
import { UserBlock } from '../'
import { getMatches } from '../../redux/Reducers/matchesReducer'


export default function Matcher() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const roleToFind = user.isMentee ? "mentors" : "mentees"

    const handlePress = (e) => {
        console.log("Press: ", e)
    }

    useEffect(() => {
        dispatch(getMatches(roleToFind))
            .then(matches => matches.payload)
    }, [dispatch, matches])

    let matches = useSelector(store => store.matches)
    if(!user) matches = []

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hola, {user.name}.</Text> 
            <Text style={styles.subtitle}>Elije entre tus posibles matches:</Text>
            {matches.length ? matches.map(match => 
                    <Pressable onPress={handlePress}>
                        <UserBlock key={match.id} user={match}/>
                    </Pressable>
            ) : <Text style={{ textAlign: "center", paddingTop: "50%" }}>No hay matches :(</Text>}
        </View>
    )
}








// const users = [
    //     {
    //         id: 1,
    //         name: "Elon",
    //         surname: "Musk",
    //         email: "elonmusk@tesla.com",
    //         img: "https://i.dailymail.co.uk/i/newpix/2018/09/07/08/4FD1F62300000578-6142193-image-m-9_1536304932759.jpg",
    //         skills: [
    //             "Diseño (UX/VD)",
    //             "Back-End",
    //             "Front-End",
    //             "Testing",
    //             "QA",
    //             "PHP",
    //             "Python",
    //             "Leadership"
    //         ]
    //     },
    //     {
    //         id: 2,
    //         name: "Britney",
    //         surname: "Spears",
    //         email: "freebritney@scalabritney.com",
    //         img: "https://i.pinimg.com/originals/44/72/3e/44723ec062349202981fc2b389e84ada.jpg",
    //         skills: [
    //             "Full-Stack",
    //             "AWS",
    //             ".NET",
    //             "Tech Support",
    //             "Data Analyst",
    //             "SalesForce",
    //             "Costumer Service",
    //             "Executive"
    //         ]
    //     }
    // ]