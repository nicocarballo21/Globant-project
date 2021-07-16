import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { View, Text } from 'react-native'
// import { useHistory } from 'react-router-dom'
import { useHistory } from 'react-router-native'
import styles from './styles'
import { UserBlock } from '../'


const users = [
    {
        id: 1,
        name: "Elon",
        surname: "Musk",
        email: "elonmusk@tesla.com",
        img: "https://i.dailymail.co.uk/i/newpix/2018/09/07/08/4FD1F62300000578-6142193-image-m-9_1536304932759.jpg",
        skills: [
            "Diseño (UX/VD)",
            "Back-End",
            "Front-End",
            "Testing",
            "QA",
            "PHP",
            "Python",
            "Leadership"
        ]
    },
    {
        id: 2,
        name: "Britney",
        surname: "Spears",
        email: "freebritney@scalabritney.com",
        img: "https://i.pinimg.com/originals/44/72/3e/44723ec062349202981fc2b389e84ada.jpg",
        skills: [
            "Full-Stack",
            "AWS",
            ".NET",
            "Tech Support",
            "Data Analyst",
            "SalesForce",
            "Costumer Service",
            "Executive"
        ]
    }
]


export default function Matcher() {

//   const { user } = useSelector(state => state);
    // let [displayUsers, setDisplayUsers] = useState([])
    // let history = useHistory()
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getTwoUserBySkills(user.skills))
    //         .then(matches => setDisplayUsers(matches))
    // }, [dispatch])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hola, User Name.</Text> 
            <Text style={styles.subtitle}>Elije entre tus posibles matches:</Text>
            {users.length ? users.map(user => 
                    <UserBlock key={user.id} user={user}/>
            ) : <Text style={{ textAlign: "center", paddingTop: "50%" }}>No se encontraron matches.</Text>}
        </View>
    )
}
