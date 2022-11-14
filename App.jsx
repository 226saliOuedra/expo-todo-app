
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigations/MainStackNavigator';
import { MainProvider } from './src/providers/MainProvider';
import { Appearance } from 'react-native';


export default function App() {
  const colorScheme = Appearance.getColorScheme();
  
  return (
    <MainProvider isDark={colorScheme === "dark"}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </MainProvider>
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
