import React from 'react';
import {View} from 'react-native';

import {styles} from './StepIndicator.style';

const StepIndicator = ({currentStep, steps}) => {
  return (
    <View style={styles.container}>
      {Array.from({length: steps}).map((_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            currentStep === index ? styles.activeStep : styles.inactiveStep,
          ]}
        />
      ))}
    </View>
  );
};

export default StepIndicator;
