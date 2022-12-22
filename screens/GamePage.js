import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native'
//{statements.body} to get statements
// maybe an event.preventDefault? to stop page from reloading when changing card?

export const GamePage = () => {
  const [statements, setStatement] = useState({})

  const fetchStatements = () => {
  fetch('http://localhost:8080/random')
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
    <View style={styles.container} >

      <Card> 
      <Text>{statements.body}</Text>  
      </Card>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
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

const Card = styled.View`
width: 330px;
height: 480px;
background-color: white ;
border-radius: 5%;
`
