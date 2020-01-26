import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    this.loadInfo();
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this.loadInfo();
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  render() {
    const currentUser = this.context.currentUser;

    if (this.context.loading || !currentUser.balance) {
      return <AppLoader />;
    }

    const styles = StyleSheet.create({
      center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    });

    return (
      <View style={styles.center}>
        <Text>{currentUser.username}</Text>
        <Text>{currentUser.email}</Text>
        <Text>{currentUser.balance}</Text>
      </View>
    );
  }
}
