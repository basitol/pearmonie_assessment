import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import HomePage from './screens/HomePage';
import {useEffect, useState} from 'react';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

const fetchFonts = async () =>
  await Font.loadAsync({
    bold: require('./assets/fonts/stolzl_bold.otf'),
    regular: require('./assets/fonts/stolzl_regular.otf'),
    light: require('./assets/fonts/stolzl_light.otf'),
    medium: require('./assets/fonts/stolzl_medium.otf'),
    helvetica: require('./assets/fonts/HelveticaNeueCyr_Medium.ttf'),
    helveticaLight: require('./assets/fonts/HelveticaNeueCyr Light.ttf'),
    helveticaBold: require('./assets/fonts/HelveticaNeueCyr Bold.ttf'),
  });

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Onboarding' component={OnboardingScreen} />
      <Stack.Screen name='HomePage' component={HomePage} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await fetchFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setDataLoaded(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!dataLoaded) {
    return null; // Return nothing or some loading component
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
