import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Themes } from '../assets/Themes/index.js';

export default function Card() {
    return (
        <View style={[styles.container, Themes.light.shadows]}>
            <Image 
                style={styles.cardImage} 
                source={require('../assets/Profiles/mtl.jpg')} 
                resizeMode='cover'
            />
            <View
                style = {styles.textContainer}
            >
                <Text style = {styles.cardText} fontSize = '32'>MTL</Text>
                <Text style = {styles.cardText2}>1 mile away</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 18,
    marginRight: 18,
    borderRadius: 18,
    overflow: 'hidden', 
    position: 'relative',
  },
  cardImage: {
    width: 340,
    height: 374,
  },
  textContainer: {
    position: 'absolute',
    height: 374,
    justifyContent: 'space-between',
    padding: 12,
  },
  cardText: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'SydneyBold'
  },
  cardText2: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Sydney',
  }

});
