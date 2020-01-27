import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Content,
  Text,
  Button,
  Item,
  Input,
  Label,
  ListItem,
  Icon,
  Form
} from 'native-base';
import { UserContext } from '../../context/user/userContext';
import { LogOutButton } from '../../components/LogOutButton';

export class CreateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      selectedUser: ''
    };
  }

  static contextType = UserContext;

  static navigationOptions = {
    headerTitle: 'Create payment',
    headerRight: () => <LogOutButton />
  };

  componentDidMount() {
    const { clearError } = this.context;
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('willFocus', () => {
      console.log('Create focusListener');

      let nUsername = navigation
        .dangerouslyGetParent()
        .getParam('username', null);
      let nAmount = navigation.dangerouslyGetParent().getParam('amount', '');
      console.log(nUsername);
      this.setState({ selectedUser: nUsername });
      this.setState({ amount: nAmount });
      clearError();
    });
  }

  selectUser(name) {
    this.setState({ selectedUser: name });
    this.context.users = [];
  }

  async findUser(query) {
    this.setState({ selectedUser: query });

    if (query === '') {
      this.context.users = [];
      return null;
    }

    if (!this.context.loading) {
      this.context.fetchUsers(query.trim());
    } else {
      this.context.users = [];
    }
  }

  render() {
    const { addTransaction, loading, error } = this.context;

    const createTransaction = () => {
      //console.log('selectedUser', this.state.selectedUser);
      addTransaction(
        this.state.selectedUser,
        this.state.amount,
        this.props.navigation
      );
    };

    let usersList = <Text></Text>;
    if (
      this.state.selectedUser &&
      this.state.selectedUser != '' &&
      this.context.users &&
      this.context.users.length > 0
    ) {
      usersList = this.context.users.map((item, i) => {
        return (
          <ListItem
            key={i}
            button
            onPress={() => {
              this.selectUser(item.name);
            }}
          >
            <Text>{item.name}</Text>
          </ListItem>
        );
      });
    }

    return (
      <Content padder style={styles.content}>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input
              onChangeText={text => this.findUser(text)}
              value={this.state.selectedUser}
            />
          </Item>
          {this.state.selectedUser &&
          this.state.selectedUser != '' &&
          this.context.users &&
          this.context.users.length > 0 ? (
            <View style={{ backgroundColor: '#ffffff' }}>{usersList}</View>
          ) : (
            usersList
          )}
          <Item floatingLabel>
            <Label>Amount</Label>
            <Input
              onChangeText={text => this.setState({ amount: text })}
              value={this.state.amount.toString()}
            />
          </Item>
          {loading ? (
            <Button block disabled style={styles.send}>
              <Icon name='ios-send' />
              <Text>Send</Text>
            </Button>
          ) : (
            <Button block onPress={createTransaction} style={styles.send}>
              <Icon name='ios-send' />
              <Text>Send</Text>
            </Button>
          )}
        </Form>
        <View style={styles.errorContent}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  send: {
    marginTop: 45
  },
  errorContent: {
    marginTop: 25
  },
  errorText: {
    fontSize: 20,
    color: 'red'
  }
});
