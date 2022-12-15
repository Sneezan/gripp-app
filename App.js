import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>gripp app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Text = styled.Text`
color: red;
font-size: 40px;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
