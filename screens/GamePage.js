import React, {useEffect, useState} from 'react';
// import styled from 'styled-components/native'
import Swiper from 'react-native-deck-swiper'
import styled from 'styled-components/native'
import { View, StyleSheet } from 'react-native';
import { API_URL } from "../utils/utils.js";

export const GamePage = () => {
  const [statements, setStatement] = useState({})

  const fetchStatements = () => {
   fetch(API_URL('random'))  //statements can't be on local host when viewing expo IOS
  .then((res) => res.json())
  .then((data) => {
    setStatement(data)
  })
  .catch((error) => error)
}

  useEffect(() => {
    fetchStatements()
    },[]);

  return (
<View style={styles.container}>
        <Swiper
            cards={[`${statements.body}`, `${statements.body}`, `${statements.body}`]}  // need to loop this?
            renderCard={(card) => {
                return (
                  <View style={styles.wrap}>
                    <CardStyle style={styles.card}>
                        <Text style={styles.text}>{card}</Text>
                    </CardStyle>
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#2d2d2d'}
            stackSize= {3}>
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
      flex: 1,
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
border-radius: 5%;
`
