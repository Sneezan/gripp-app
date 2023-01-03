import React, {useEffect, useState} from 'react';
// import styled from 'styled-components/native'
import Swiper from 'react-native-deck-swiper'
import styled from 'styled-components/native'
import { View, StyleSheet } from 'react-native';
import { API_URL } from "../utils/utils.js";


export const GamePage = () => {
  const [statements, setStatement] = useState([""]);
  const fetchStatements = () => {
   fetch(API_URL('statements'))  //statements can't be on local host when viewing expo IOS
  .then((res) => res.json())
  .then((data) => {
    setStatement(data.body)
  })
  .catch((error) => error)
}

  useEffect(() => {
    fetchStatements()
    },[]);


    // const cards = [{ "statementId": 1, "statement": "How are you, really?", "level": 1},
    //  {"statementId": 2, "statement": "What would you tell Karen if actions didn't have consequences?", "level": 3 },]; 

  return (
<View style={styles.container}>
        <Swiper 
            cards={statements} // need to loop this?   showcases every lettor on ONE slide{`${statements.body}`}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            cardIndex={0}
            infinite={false}
            showSecondCard={true}
            backgroundColor={'#2d2d2d'}
            stackSize={3}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            renderCard={(card)=> {
              return (
                <View style={styles.wrap}>
                <CardStyle style={styles.card}>
                    <Text style={styles.text}>{card.statement}</Text>
                </CardStyle>
                </View>
              )
          }}
>
        </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2d2d2d',

    },
    wrap: {
      alignItems: 'center',
      justifyContent: 'center',
    },
}); 

const Text = styled.Text`
color: red;
padding: 30px;
font-size: 30px;
text-transform: uppercase;
`

const CardStyle = styled.View`
width: 330px;
height: 480px;
background-color: white ;
border: 0.3px solid black; 
border-radius: 5%;   //looks different on phone vs web? 15 good on phone but looks ridiculous on web
`



// const cards = [
//   {
//     "statementId": 1,
//     "statement": "How are you, really?",
//     "level": 1
//   },
//   {
//     "statementId": 2,
//     "statement": "What would you tell Karen if actions didn't have consequences?",
//     "level": 3
//   },
//   {
//     "statementId": 3,
//     "statement": "If you were to buy me a present, knowing nothing about me other than what I look like, what would it be?",
//     "level": 3
//   },
//   {
//     "statementId": 4,
//     "statement": "What's the most pain you've ever been in that wasn't physical?",
//     "level": 1
//   },
//   {
//     "statementId": 5,
//     "statement": "What compliment do you think I hear the most?",
//     "level": 3
//   },
//   {
//     "statementId": 6,
//     "statement": "Dear younger self: ____.",
//     "level": 1
//   },
//   {
//     "statementId": 7,
//     "statement": "What do you crave more of?",
//     "level": 1
//   },
//   {
//     "statementId": 8,
//     "statement": "Finish the sentences: strangers would describe me as _____. Only I know that I am ______",
//     "level": 1
//   },
// ]; 

// cards={cards}
// <Text style={styles.text}>{card.statement}</Text>