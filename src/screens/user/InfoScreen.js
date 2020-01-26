import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Card, CardItem, Text, Body } from 'native-base';
import { LogOutButton } from '../../components/LogOutButton';
import { UserContext } from '../../context/user/userContext';
import { AppLoader } from '../../components/AppLoader';

export class InfoScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = UserContext;

  static navigationOptions = {
    headerTitle: 'Info',
    headerRight: () => <LogOutButton />
  };

  loadInfo() {
    this.context.fetchUser();
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('willFocus', () => {
      console.log('Info focusListener');
      this.loadInfo();
    });
  }

  render() {
    const currentUser = this.context.currentUser;

    if (this.context.loading || !currentUser.balance) {
      return <AppLoader />;
    }

    return (
      <Content padder style={styles.content}>
        <Card>
          <CardItem header bordered style={styles.balanceItem}>
            <Text style={styles.balanceTitle}>{currentUser.balance}</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.usernameTitle}>{currentUser.username}</Text>
              <Text style={styles.emailTitle}>{currentUser.email}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  balanceItem: {
    justifyContent: 'center'
  },
  balanceTitle: {
    fontSize: 50
  },
  usernameTitle: {
    fontSize: 20
  },
  emailTitle: {
    color: '#bbbbbb'
  }
});
