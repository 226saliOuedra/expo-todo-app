import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './src/Box';
import BoxContainer from './src/BoxContainer';
import BoxVerticalContainer from './src/BoxVerticalContainer';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        flex: 2,
        borderBottomWidth: 2,
        borderBottomColor: "white"

      }}>
        <BoxContainer/>
      </View>
      
      <View >
        <BoxVerticalContainer/>
        <BoxVerticalContainer/>
      </View>

     <View style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        flex: 2,
        borderBottomWidth: 2,
        borderBottomColor: "white"

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
    // flexDirection: "row",
    backgroundColor: '#000',
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  name: {
    fontSize: 12,
    fontWeight: "500", 
    color: "white"
  },
 
});
