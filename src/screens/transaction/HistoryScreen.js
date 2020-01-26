import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Content, Text, List, ListItem, Body, Right } from 'native-base';
import { LogOutButton } from '../../components/LogOutButton';
import { UserContext } from '../../context/user/userContext';
import { AppLoader } from '../../components/AppLoader';

export class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);

    //const { navigation } = this.props;
    //this.focusListener = navigation.addListener('didFocus', () => {
    //	  this.loadHistory();
    //});
  }

  static contextType = UserContext;

  static navigationOptions = {
    headerTitle: 'History',
    headerRight: () => <LogOutButton />
  };

  loadHistory() {
    this.context.fetchTransactions();
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('willFocus', () => {
      console.log('History focusListener');
      this.loadHistory();
    });
  }

  render() {
    const transactions = this.context.transactions;

    if (this.context.loading) {
      return <AppLoader />;
    }

    const DATA = [
      {
        amount: -1,
        balance: 499,
        date: '1/26/2020, 2:23:03 PM',
        id: 3,
        username: 'MV Test 1'
      }
    ];

    if (transactions && transactions.length > 0) {
      transactions.sort((a, b) => {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
      });

      return (
        <View>
          <List
            dataArray={transactions}
            renderItem={({ item }) => {
              return (
                <ListItem>
                  <Body>
                    <Text>{item.username}</Text>
                    <Text note>
                      Amount: {item.amount} | Balance: {item.balance}
                    </Text>
                  </Body>
                  <Right>
                    <Text note>{item.date}</Text>
                  </Right>
                </ListItem>
              );
            }}
            keyExtractor={(item, index) => item.id.toString()}
          ></List>
        </View>
      );
    } else {
      return (
        <Content style={styles.content}>
          <View>
            <Text>No transactions</Text>
          </View>
        </Content>
      );
    }
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  item: {},
  username: {}
});
