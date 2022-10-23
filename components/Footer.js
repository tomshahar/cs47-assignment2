import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <View style={styles.navButton}>
                    <Image 
                        style={styles.navImg} 
                        source={require('../assets/Icons/discover_light.png')}
                    />
                    <Text style={styles.navText}>
                        Discover
                    </Text>
                </View>
                <View style={styles.navButton}>
                    <Image 
                        style={styles.navImg} 
                        source={require('../assets/Icons/heart_light.png')}
                    />
                    <Text style={styles.navText}>
                        Matches
                    </Text>
                </View>
                <View style={styles.navButton}>
                    <Image 
                        style={styles.navImg} 
                        source={require('../assets/Icons/messages_light.png')}
                    />
                    <Text style={styles.navText}>
                        DMs
                    </Text>
                </View>
        
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 65,
    backgroundColor: 'rgba(20,20,20,1)',
  },
  nav: {
    flexDirection: 'row',
    marginLeft: 18,
    marginRight: 18,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navImg: {
    width: 32,
    height: 32,
    marginBottom: 4,
  },
  navText: {
    color: 'white',
    fontFamily: 'Sydney',
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingTop: 4,
    width: 64,
  }

});
