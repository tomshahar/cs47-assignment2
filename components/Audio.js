import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Themes } from '../assets/Themes/index.js';

export default function Audio() {
    
    return (
        <View style={[styles.takeContainer, Themes.light.shadows]}>
            <Text style={{fontSize: 18, fontFamily: 'Sydney'}}>My hottest take</Text>
            <View style = {styles.imgContainer}>
                <Image
                  style={styles.playImg} 
                  source={require('../assets/Icons/player_light.png')} 
                />
                <Image
                  style={styles.waveformImg} 
                  source={require('../assets/Icons/audio_waveform_light.png')} 
                  resizeMode='contain'
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
  takeContainer: {
    margin: 18,
    padding: 12,
    borderRadius: 18,
    overflow: 'hidden', 
    backgroundColor: 'white',
    position: 'relative',
  },
  playImg: {
    height: 48,
    width: 48,
    marginRight: 8,

  },
  waveformImg: {
    height: 56,
    width: 200,    
  },
  imgContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
  }
});
