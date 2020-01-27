import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/user/userContext';
import { StyleSheet, View } from 'react-native';
import {
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Icon
} from 'native-base';
import { AppLoader } from '../../components/AppLoader';

export const SignUpScreen = ({}) => {
  const { signupUser, loading, error, clearError } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordc, setPasswordc] = useState('');

  useEffect(() => {
    clearError();
  }, []);

  const signUp = () => {
    signupUser(username, email, password);
  };

  if (loading) {
    return <AppLoader />;
  }

  return (
    <Content
      padder
      contentContainerStyle={{ justifyContent: 'center', flex: 1 }}
    >
      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input value={username} onChangeText={setUsername} />
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            autoCompleteType='email'
            keyboardType='email-address'
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password Confirm</Label>
          <Input
            value={passwordc}
            onChangeText={setPasswordc}
            secureTextEntry={true}
          />
        </Item>
        {username && email && password && passwordc && password == passwordc ? (
          <Button block onPress={signUp} style={styles.login}>
            <Icon name='ios-person-add' />
            <Text>Sign Up</Text>
          </Button>
        ) : (
          <Button block disabled style={styles.login}>
            <Icon name='ios-person-add' />
            <Text>Sign Up</Text>
          </Button>
        )}
      </Form>
      <View style={styles.errorContent}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    </Content>
  );
};

SignUpScreen.navigationOptions = {
  headerTitle: 'Sign Up'
};

const styles = StyleSheet.create({
  login: {
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
