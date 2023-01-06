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

return (
<View style={styles.container}>
        <Swiper 
            cards={statements} 
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

