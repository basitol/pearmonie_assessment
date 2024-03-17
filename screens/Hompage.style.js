import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#010A43',
  },
  content: {
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  welcome: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menu: {
    width: 48,
    height: 48,
    backgroundColor: '#212A6B',
    borderRadius: 50,
    marginRight: 16,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'column',
    justifyContent: 'left',
    gap: 4,
  },
  line: {
    width: 20,
    height: 2,
    backgroundColor: '#FF2E63',
  },
  line2: {
    width: 15,
    height: 2,
    backgroundColor: '#FF2E63',
  },
  greeting: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  addMoney: {
    width: 90,
    height: 32,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    backgroundColor: '#212A6B',
    borderRadius: 8,
  },
  addMoneyText: {
    color: '#426DDC',
  },
  balanceTitle: {
    color: 'white',
    marginTop: 48,
    fontSize: 12,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 32,
    width: '100%',
    gap: 16,
  },
  button: {
    width: '50%',
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#464E8A',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {},
  sendButton: {},
  buttonText: {
    color: '#464E8A',
  },
  transactionsContainer: {
    flex: 1,
    backgroundColor: '#10194E',
    paddingTop: 16,
    paddingBottom: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: 48,
    marginBottom: -60,
    overflow: 'hidden',
    position: 'relative',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 24,
  },
  transactionsTitle: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'helveticaBold',
    fontWeight: 600,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  transactionStatusAndIcon: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  transactionImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  transactionText: {
    color: 'white',
  },
  transactionStatus: {
    color: 'white',
    marginLeft: 4,
  },
  transactionAmount: {
    fontFamily: 'helveticaBold',
    fontWeight: 'bold',
    fontSize: 20,
  },
  transactionDetails: {
    flexDirection: 'column',
  },
  user: {
    color: '#858EC5',
    fontFamily: 'helveticaBold',
    marginBottom: 4,
  },
  transactionLine: {
    width: 64,
    height: 7,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#4E589F',
  },
});
