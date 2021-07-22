import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import { block } from '../UserBlock/styles'
import { UserBlock } from '../'
import { getMatches } from '../../redux/Reducers/matchesReducer'
import { likeMessage, doubleMatch } from '../../utils'

export default function Matcher() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    let possiblesBack = useSelector(store => store.matches)
    if(!user) possiblesBack = []

    const roleToFind = user.isMentee ? "mentors" : "mentees"

    let [likes, setLikes] = useState([])
    let [myMatches, setMymatches] = useState([])
    let [num, setNum] = useState(3)
    let [possibles, setPossibles] = useState([])

    console.log("Matches: ", possiblesBack)
    //matches, match
    const twoPossibleMatches = (possiblesServer, matchArr) => {
        let doubleArr = [], j=0
        if(!matchArr.length && possiblesServer.length) {
            doubleArr[0] = possiblesServer[0]
            doubleArr[1] = possiblesServer[1]
            console.log("Se copió igual")
            return setPossibles(doubleArr)
        }
        for(let i=0 ; i<possiblesServer.length && j<2; i++){
            if(possiblesServer[i] && matchArr.indexOf(possiblesServer[i]) === -1) {
                doubleArr[j] = possiblesServer[i]
                j++
                console.log("FOR")
            }
        }
        console.log("setPossibles", doubleArr)
        return setPossibles(doubleArr)
    }

    const handlePress = (userPressed) => {
        console.log("UserPressed: ", userPressed)
        if(likes.length){
            if(likes[0]._id === userPressed._id) {
                setMyMatches([...myMatches, userPressed])
                setLikes([])
                console.log("MatchesDoubles :", myMatches)
                return doubleMatch()
                // return setNum(3)
            }
        }
        // setNum(n)
        likeMessage()
        console.log("Likes: ", likes)
        setLikes([...likes, userPressed])
    }

    
    // seed inicial
    useEffect(() => {
        const token = user.token
        dispatch(getMatches({roleToFind, token}))
            .then(({ payload }) => setPossibles(payload))
    }, [dispatch])

    useEffect(() => {
        const token = user.token
        dispatch(getMatches({roleToFind, token}))
            .then(data => data.payload)
            .then((data) => twoPossibleMatches(data, myMatches))
            // .then(() => console.log("myMatches: ", myMatches))
    }, [likes])


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hola, {user.name}.</Text> 
            <Text style={styles.subtitle}>Elije entre tus posibles matches:</Text>
            {possibles.length > 1 ? 
                <View>
                    <Pressable onPress={() => handlePress(likes.length ? likes[0] : possibles[0])}>
                        <UserBlock key={likes.length ? likes[0]._id : possibles[0]._id} 
                                    user={likes.length ? likes[0] : possibles[0]}/>
                    </Pressable>
                    <Pressable onPress={() => handlePress(possibles[1])}>
                        <UserBlock key={possibles[1]._id} 
                                    user={possibles[1]}/>
                    </Pressable>
                </View>
            : 
            <Text style={
                { 
                    textAlign: "center", 
                    paddingTop: "70%",
                    fontSize: 20
                    }}>Cargando...</Text>}
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