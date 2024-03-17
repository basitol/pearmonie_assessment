import React, {useRef, useState} from 'react';
import {Animated, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import StepIndicator from '../components/StepIndicator';
import {styles} from './OnboradingScreen.style';

const {width} = Dimensions.get('window');

import PatternScreen1 from '../layouts/PatternScreen1';
import PatternScreen2 from '../layouts/PatternScreen2';

const onboardingData = [
  {
    id: '1',
    title: 'Transfer That Is Safe',
    desc: 'You have nothing to be scared about, we got you covered.',
    BackgroundComponent: PatternScreen1,
  },
  {
    id: '2',
    title: 'Transfer Money With Ease',
    desc: 'Making money is hard enough, we make transfering it easy enough.',
    BackgroundComponent: PatternScreen2,
  },
  {
    id: '3',
    title: 'Transfer Money With Ease',
    desc: 'Making money is hard enough, we make transfering it easy enough.',
    BackgroundComponent: PatternScreen2,
  },
];

const OnboardingScreen = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentStep, setCurrentStep] = useState(0);

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {
      useNativeDriver: false,
      listener: event => {
        const position = event.nativeEvent.contentOffset.x;
        const currentStep = Math.round(position / width);
        setCurrentStep(currentStep);
      },
    },
  );

  const renderItem = ({item}) => (
    <View style={{width}}>
      <item.BackgroundComponent>
        <View
          style={[
            styles.smallContainer,
            item.id === '2' ? styles.smallContainerBg2 : {},
          ]}>
          <Text
            style={[styles.title, item.id === '2' ? styles.titleColor2 : {}]}>
            {item.title}
          </Text>
          <Text style={[styles.desc, item.id === '2' ? styles.descColor2 : {}]}>
            {item.desc}
          </Text>

          <TouchableOpacity
            onPress={() => {
              if (item.id === '2') {
                navigation.navigate('HomePage');
              }
            }}
            style={[styles.btn, item.id === '1' ? styles.bg1 : styles.bg2]}>
            <Text
              style={[
                styles.btnText,
                item.id === '2' ? styles.btnTextColor2 : {},
              ]}>
              {item.id === '2' ? 'Start banking' : 'Start banking'}
            </Text>
          </TouchableOpacity>
        </View>
      </item.BackgroundComponent>
    </View>
  );

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onScroll={handleScroll}
      />
      <View style={styles.stepIndicatorContainer}>
        <StepIndicator
          steps={onboardingData.length}
          currentStep={currentStep}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;
