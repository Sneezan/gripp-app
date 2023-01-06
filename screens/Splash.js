import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Splash = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
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
     image: {
          flex: 1,
          resizeMode: 'cover',
          width: "100%",
          flexDirection: 'column'
  
    }
  });
  
