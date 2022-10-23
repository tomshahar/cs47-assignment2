import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header() {
    const icon = {
        logoIcon: require('../assets/Icons/menu_light.png'),
        dayNight: require('../assets/Icons/sun.png'),
    }
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={icon.logoIcon} />
            <Text style={styles.title}>ensom</Text>
            <Image style={styles.logo} source={icon.dayNight} />
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
    paddingTop: 30,
    flexGrow: 0,
  },
  logo: {
    height: 36,
    width: 36,
  },
  title: {
    fontFamily: 'SydneyBold',
    fontSize: 28,
  }
});
