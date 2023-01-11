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
            backgroundColor={'#BE284C'}
            stackSize={3}
            animateCardOpacity={false}
            stackAnimationFriction={7}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            renderCard={(card)=> {
              return (
                <View style={styles.wrap}>
                <CardStyle style={styles.card}>
                    <Text style={styles.text}>{card.statement} </Text>
                    <BrandText>Get closer with gripp</BrandText>
                </CardStyle>
                </View>
              )
          }}>
        </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7b1930',
      alignItems: 'center',
      justifyContent: 'center',

    },
    wrap: {
      alignItems: 'center',
      justifyContent: 'center',
    },
}); 

const Text = styled.Text`
color: #242424;
padding: 40px;
font-size: 28px;
text-transform: uppercase;
font-weight: 300;
`

const BrandText = styled.Text`
color: #BE284C;
font-size: 18px;
font-weight: 600;
text-transform: uppercase;
text-align: center;
position: absolute;
left: 15%;
bottom: 20px;
`

const CardStyle = styled.View`
width: 330px;
height: 480px;
background-color: #F4F2F2;
border: 0.3px solid #7b1930; 
border-radius: 26px; 
margin-top: 10%;
`

