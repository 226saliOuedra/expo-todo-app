import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './src/Box';
import BoxContainer from './src/BoxContainer';
import BoxVerticalContainer from './src/BoxVerticalContainer';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={{
        justifyContent: "space-evenly",
        alignItems: "center",
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: "white"

      }}>
        <BoxContainer/>
      </View>
      
      <View style={{
          flexDirection: "row",
          flex: 2,
          justifyContent: "space-evenly",
          alignItems: "center",
          borderBottomWidth: 2,
          borderBottomColor: "white"
}}>
        <BoxVerticalContainer />
        <BoxVerticalContainer />
      </View>

     <View style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,

      }}>
        <BoxContainer/>
      </View>

      <StatusBar style="auto" backgroundColor="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 60,
    justifyContent: 'space-evenly',
  }, 
});
