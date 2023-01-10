import React from "react";
import { View, StyleSheet, ImageBackground} from 'react-native';
import { useSelector } from "react-redux";
import styled from 'styled-components/native';
import { formatRelative } from 'date-fns';
export const ProfileCard = ({navigation}) => {
    const userName = useSelector((store) => store.user.username)
    const userCreated = useSelector((store) => store.user.userCreatedAt)
//source={require('../assets/Texture.png')}

  return (
    <View style={styles.container}>
      <Card> 
      <ProfileWrap>
        <TextWrap>
          <Text>Welcome,</Text>
          <StyledText>{userName}</StyledText>
          <Line />
          <Member> Member since {formatRelative(new Date(userCreated), new Date())} </Member>
        </TextWrap>
      </ProfileWrap>
      </Card> 
    </View>
  )
}



const Text = styled.Text`
color: #F4F2F2;
font-size: 32px;
text-transform: capitalize;
`
const StyledText = styled.Text`
color: #F4F2F2;
font-size: 32px;
font-style: italic;
text-transform: capitalize;
`
const Member = styled.Text`
font-size: 12px;
text-transform: uppercase;
color: #F4F2F2;
padding-top: 4px;
`
const Card = styled.ImageBackground`
flex: 0.45;
display: flex;
background-color: #BE284C;
`
const ProfileWrap = styled.View`
top: 170px;
align-items: center;
`
const TextWrap = styled.View`
width: 80%;
`
const Line = styled.View`
border: 1px solid #F4F2F2;
`

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F2F2',
    },
  });
  
