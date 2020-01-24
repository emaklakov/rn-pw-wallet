import React, { useContext, useState } from 'react';
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
  const { signupUser, loading, error } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordc, setPasswordc] = useState('');

  const signUp = () => {
    signupUser(username, email, password);
  };

  if (loading) {
    return <AppLoader />;
  }

  return (
    <Content padder style={styles.content}>
      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input value={username} onChangeText={setUsername} />
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input value={email} onChangeText={setEmail} />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input value={password} onChangeText={setPassword} />
        </Item>
        <Item floatingLabel>
          <Label>Password Confirm</Label>
          <Input value={passwordc} onChangeText={setPasswordc} />
        </Item>
        <Button block onPress={signUp} style={styles.login}>
          <Icon name='ios-person-add' />
          <Text>Sign Up</Text>
        </Button>
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
  content: {
    flex: 1
  },
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
