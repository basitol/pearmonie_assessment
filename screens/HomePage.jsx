import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {styles} from './Hompage.style';

const person1 = require('../assets/person1.png');
const person2 = require('../assets/person2.png');
const person3 = require('../assets/person3.png');
const person4 = require('../assets/person4.png');

const transactionsData = [
  {
    id: '12345',
    from_wallet: '0x1234567890ABCDEF',
    type: 'credit',
    amount: 10.5,
    currency: 'ETH',
    timestamp: '2023-07-13T09:12:34Z',
    imageUri: person4,
    name: 'Adeboye Usman',
  },
  {
    id: '67890',
    to_wallet: '0x1234567890ABCXYZ',
    type: 'debit',
    amount: 5.2,
    currency: 'BTC',
    timestamp: '2023-07-23T09:12:34Z',
    name: 'Mercy Popoola',
    imageUri: person1,
  },
  {
    id: '12245',
    from_wallet: '0x1234567890ABCDEF',
    type: 'credit',
    amount: 10.5,
    currency: 'ETH',
    timestamp: '2023-07-13T09:12:34Z',
    imageUri: person2,
    name: 'Onome Adetayo',
  },
  {
    id: '67899',
    to_wallet: '0x1234567890ABCXYZ',
    type: 'debit',
    amount: 5.2,
    currency: 'BTC',
    timestamp: '2023-07-23T09:12:34Z',
    name: 'Kingsley Abiodun Ololade',
    imageUri: person1,
  },
];

const renderTransactionItem = ({item, index}) => {
  const isCredit = item.type === 'credit';
  const backgroundColor = index % 2 === 0 ? '#192259' : '#10194E';
  const icon = isCredit
    ? 'account-arrow-left-outline'
    : 'account-arrow-right-outline';
  const iconColor = isCredit ? '#1DC7AC' : '#FAAD39';
  const transactionTypeText = isCredit ? 'Received' : 'Sent';

  return (
    <View style={[styles.transactionItem, {backgroundColor}]}>
      <View style={styles.details}>
        <Image source={item.imageUri} style={styles.transactionImage} />
        <View style={styles.transactionDetails}>
          <Text style={styles.user}>{item.name}</Text>
          <View
            style={[
              styles.transactionStatusAndIcon,
              {backgroundColor: iconColor},
            ]}>
            <MaterialCommunityIcons name={icon} size={16} color={'#fff'} />
            <Text style={[styles.transactionStatus]}>
              {transactionTypeText}
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.transactionAmount, {color: iconColor}]}>
        {item.currency} {item.amount}
      </Text>
    </View>
  );
};

const HomePage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.welcome}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.menu}>
              <View style={styles.left}>
                <View style={styles.line}></View>
                <View style={styles.line2}></View>
              </View>
            </View>

            <Text style={styles.greeting}>Hello, Name</Text>
          </View>

          <TouchableOpacity style={styles.addMoney}>
            <Text style={styles.addMoneyText}>Add money</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.balanceTitle}>Your current balance is</Text>
        <Text style={styles.balanceAmount}>₦1,000</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.addButton]}>
            <Text style={styles.buttonText}>Add Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.sendButton]}>
            <Text style={styles.buttonText}>Send Money</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.transactionsContainer}>
        <View style={styles.transactionLine}></View>
        <View style={styles.actionsContainer}>
          <Text style={styles.transactionsTitle}>All Transactions</Text>
        </View>
        <FlatList
          data={transactionsData}
          keyExtractor={item => item.id}
          renderItem={renderTransactionItem}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'flex-start',
            marginTop: 32,
          }}
          ListFooterComponent={<View style={{marginBottom: 20}} />}
        />
      </View>

      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
