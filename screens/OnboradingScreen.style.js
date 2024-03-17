import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  smallContainer: {
    position: 'relative',
    flex: 1,
    height: 224,
    width: 323,
    backgroundColor: '#17288E',
    bottom: 0,
    left: 0,
    paddingTop: 56,
    paddingLeft: 32,
    paddingRight: 32,
    position: 'absolute',
    borderTopRightRadius: 50,
  },
  smallContainerBg2: {
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'bold',
    fontWeight: 700,
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 6,
  },
  titleColor2: {
    color: '#1C265C',
  },
  desc: {
    fontSize: 16,
    fontFamily: 'helvetica',
    fontWeight: 200,
    lineHeight: 24,
    color: '#FAFAFA',
    marginBottom: 6,
  },
  descColor2: {
    color: '#283470',
  },
  stepIndicatorContainer: {
    position: 'absolute',
    bottom: 164,
    left: 32,
    flexDirection: 'row',
  },
  bg1: {
    backgroundColor: '#FFFFFF',
    color: '#17288E',
  },
  bg2: {
    backgroundColor: '#1C265C',
  },
  btn: {
    width: 145,
    height: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    fontFamily: 'helvetica',
    fontSize: 16,
    color: '#17288E',
  },
  btnTextColor2: {
    color: '#1C265C',
  },
  btnTextColor2: {
    color: '#FFFFFF',
  },
  pattern: {
    position: 'absolute',
  },
});
