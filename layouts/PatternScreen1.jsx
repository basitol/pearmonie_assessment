import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const PatternScreen1 = ({children}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/pattern6.png')}
        style={[styles.pattern, {top: 42, left: 0}]}
      />
      <Image
        source={require('../assets/pattern1.png')}
        style={[styles.pattern, {top: 0, left: 0}]}
      />
      <Image
        source={require('../assets/pattern2.png')}
        style={[styles.pattern, {top: 0, right: 0}]}
      />
      <Image
        source={require('../assets/pattern3.png')}
        style={[styles.pattern, {top: 28, right: 0}]}
      />
      <Image
        source={require('../assets/pattern4.png')}
        style={[styles.pattern, {top: 120, left: 0}]}
      />
      <Image
        source={require('../assets/pattern5.png')}
        style={[styles.pattern, {top: 152, left: 0}]}
      />
      <Image
        source={require('../assets/pattern10.png')}
        style={[styles.pattern, {top: 380, left: 0, width: '100%'}]}
      />
      <Image
        source={require('../assets/pattern7.png')}
        style={[styles.pattern, {top: 250, left: 80}]}
      />
      <Image
        source={require('../assets/pattern8.png')}
        style={[styles.pattern, {top: 250, left: 187}]}
      />
      <Image
        source={require('../assets/pattern11.png')}
        style={[styles.pattern, {top: 284, left: 115}]}
      />
      <Image
        source={require('../assets/pattern12.png')}
        style={[styles.pattern, {top: 284, left: 187}]}
      />
      <Image
        source={require('../assets/pattern9.png')}
        style={[styles.pattern, {top: 322, left: 163}]}
      />

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#0E164D',
  },
  pattern: {
    position: 'absolute',
  },
});

export default PatternScreen1;
