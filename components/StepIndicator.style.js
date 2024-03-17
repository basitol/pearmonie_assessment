import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  step: {
    height: 8,
    borderRadius: 5,
  },
  activeStep: {
    width: 32,
    backgroundColor: '#FFB129',
  },
  inactiveStep: {
    width: 16,
    backgroundColor: '#FDD590',
  },
});
