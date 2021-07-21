import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { block } from '../UserBlock/styles';
import { UserBlock } from '../';
import { getMatches } from '../../redux/Reducers/matchesReducer';
import { likeMessage, doubleMatch } from '../../utils';

export default function Matcher() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const roleToFind = user.isMentee ? 'mentors' : 'mentees';

  let [liked, setLiked] = useState([]); // user liked
  let [possibles, setPossibles] = useState([]); // array de los posibles users ordenado de mayor coincidencia a menor
  let [originalArr, setOriginalArr] = useState([]);
  let [myMatches, setMymatches] = useState([]);
  let [index, setIndex] = useState(0);

  // let [num, setNum] = useState(3)

  // primer render sin likes
  // matcharr = 0
  // possible = [posibles users]
  // doublearr = [ posiible[0], possible[1] ]

//   const twoPossibleMatches = (possiblesServer, matchArr) => {
//     let doubleArr = [],
//       j = 0;

//     if (!matchArr.length && possiblesServer.length) {
//       doubleArr[0] = possiblesServer[0];
//       doubleArr[1] = possiblesServer[1];

//       return setPossibles(doubleArr);
//     }

//     for (let i = 0; i < possiblesServer.length && j < 2; i++) {
//       if (possiblesServer[i] && matchArr.indexOf(possiblesServer[i]) === -1) {
//         doubleArr[j] = possiblesServer[i];
//         j++;
//         console.log('FOR');
//       }
//     }
//     console.log('setPossibles', doubleArr);
//     return setPossibles(doubleArr);
//   };

//   const handlePress = userPressed => {
//     console.log('UserPressed: ', userPressed);
//     // likes = [users={}]
//     if (likes.length) {
//       if (likes[0]._id === userPressed._id) {
//         setMyMatches([...myMatches, userPressed]);
//         setLikes([]);
//         console.log('MatchesDoubles :', myMatches);
//         return doubleMatch();
//         //CORTAR VISTA ACA
//         // return setNum(3)
//       }
//     }
//     // setNum(n)
//     likeMessage();
//     // console.log("Likes: ", likes)
//     setLikes([...liked, userPressed]);
//   };

  // seed inicial
  useEffect(() => {
    const token = user.token;
    dispatch(getMatches({ roleToFind, token })).then(({ payload }) =>
      setOriginalArr(payload),
    );
  }, [dispatch]);

//   useEffect(() => {
//     twoPossibleMatches(originalArr, myMatches);
//   }, [liked]);

  const handleLike = () => {
    console.log('like');
  };

  const handleDislike = () => {
    console.log('dislike');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola, {user.name}.</Text>
      <Text style={styles.subtitle}>Elije entre tus posibles matches:</Text>
      {originalArr.length ? ( 
        // hay likeado uno
        //VISTA DE UNA USERCARD
        <View>
          <Pressable>
            <UserBlock
            //   key={originalArr[0]._id}
              user={originalArr[index]}
              handleLike={handleLike}
              handleDislike={handleDislike}
            />
          </Pressable>
        </View>
      ) : (
        <View>
          {/* <Pressable
            onPress={() => handlePress(liked.length ? liked[0] : possibles[0])}>
            <UserBlock
              key={liked.length ? liked[0]._id : possibles[0]._id}
              user={liked.length ? liked[0] : possibles[0]}
            />
          </Pressable>

          <Pressable onPress={() => handlePress(possibles[1])}>
            <UserBlock key={possibles[1]._id} user={possibles[1]} />
          </Pressable> */}
        </View>
      )}
    </View>
  );
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
