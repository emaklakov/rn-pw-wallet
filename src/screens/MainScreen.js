import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Content, Button, Text, Icon } from 'native-base';

export class MainScreen extends React.Component {
  goToLogIn = () => {
    this.props.navigation.navigate('LogIn');
  };

  goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <Content padder style={styles.content}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>PW Wallet</Text>
        </View>
        <View style={styles.contentImage}>
          <Image
            style={styles.wallet}
            source={require('../../assets/wallet.png')}
          />
        </View>
        <View>
          <Button block onPress={this.goToLogIn} style={styles.login}>
            <Icon name='ios-log-in' />
            <Text>Log In</Text>
          </Button>
          <Button bordered block onPress={this.goToSignUp}>
            <Icon name='ios-person-add' />
            <Text>Sign Up</Text>
          </Button>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  contentImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  },
  contentTitle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30
  },
  wallet: {
    width: 300,
    height: 300
  },
  login: {
    marginBottom: 25
  }
});
