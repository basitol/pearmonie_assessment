import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const PatternScreen2 = ({children}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/onboard2/pattern1.png')}
        style={[styles.pattern, {top: 0, left: 0}]}
      />

      <Image
        source={require('../assets/onboard2/pattern2.png')}
        style={[styles.pattern, {top: 0, right: 0}]}
      />
      <Image
        source={require('../assets/onboard2/pattern3.png')}
        style={[styles.pattern, {top: 227, left: 60}]}
      />
      <Image
        source={require('../assets/onboard2/pattern9.png')}
        style={[styles.pattern, {top: 373, left: 0}]}
      />
      <Image
        source={require('../assets/onboard2/pattern4.png')}
        style={[styles.pattern, {top: 183, left: 0}]}
      />
      <Image
        source={require('../assets/onboard2/pattern5.png')}
        style={[styles.pattern, {top: 254, left: 0}]}
      />
      <Image
        source={require('../assets/onboard2/pattern6.png')}
        style={[styles.pattern, {top: 169, right: 70}]}
      />
      <Image
        source={require('../assets/onboard2/pattern10.png')}
        style={[styles.pattern, {top: 207, right: 110}]}
      />
      <Image
        source={require('../assets/onboard2/pattern7.png')}
        style={[styles.pattern, {top: 0, right: 0}]}
      />
      <Image
        source={require('../assets/onboard2/pattern8.png')}
        style={[styles.pattern, {top: 413, right: 0}]}
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

export default PatternScreen2;
