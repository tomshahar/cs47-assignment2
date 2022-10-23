import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import Header from './components/Header.js';
import Card from './components/Card.js';
import Audio from './components/Audio.js';
import Footer from './components/Footer.js';




export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/
  
  return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.main}>
          <Card/>
          <Audio/>
        </View>
        <Footer/>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(235,235,235,1)',
  },
  main: {
    flexDirection: 'column',
  }
});
