import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Content,
  Text,
  List,
  ListItem,
  Body,
  Right,
  Button,
  Icon
} from 'native-base';
import { LogOutButton } from '../../components/LogOutButton';
import { UserContext } from '../../context/user/userContext';
import { AppLoader } from '../../components/AppLoader';

export class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = UserContext;

  static navigationOptions = {
    headerTitle: 'History',
    headerRight: () => <LogOutButton />
  };

  repeatTransaction = (username, amount) => {
    amount = Math.abs(amount);
    this.props.navigation.navigate('Create', {
      username: username,
      amount: amount
    });
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

    if (this.context.error) {
      return (
        <Content
          padder
          contentContainerStyle={{ justifyContent: 'center', flex: 1 }}
        >
          <View style={styles.errorContent}>
            <Text style={styles.errorText}>{this.context.error}</Text>
            <Button
              block
              onPress={() => {
                this.loadHistory;
              }}
              style={{ marginTop: 25 }}
            >
              <Icon name='refresh-ccw' type='Feather' />
              <Text>Update</Text>
            </Button>
          </View>
        </Content>
      );
    }

    if (transactions && transactions.length > 0) {
      transactions.sort((a, b) => {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
      });

      return (
        <View style={{ backgroundColor: '#ffffff' }}>
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
                    <Button
                      small
                      success
                      bordered
                      style={{
                        marginTop: 10,
                        justifyContent: 'center',
                        width: '50%'
                      }}
                      onPress={() => {
                        this.repeatTransaction(item.username, item.amount);
                      }}
                    >
                      <Text>Repeat</Text>
                    </Button>
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
        <Content padder style={styles.content}>
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
  username: {},
  errorContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    fontSize: 20,
    color: 'red'
  }
});
